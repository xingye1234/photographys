import React, { Suspense } from 'react';
import localFont from 'next/font/local';
import navbarStyles from './navbar.module.css';
import { INavlist } from '@/app/types/navbar/types';
import NavList from './NavList';
import Link from 'next/link';
import SetTheme from './SetTheme';

const myFont = localFont({
    src: '../../styles/fonts/xingkai.ttf',
    display: 'swap',
    style: 'italic',
})

const hStyles = `${myFont.className} font-bold text-5xl ${navbarStyles["gradient-text"]}`
const pStyles = `${myFont.className} font-bold text-5xl ml-1 ${navbarStyles["gradient-text"]} pr-1`


const navlist: INavlist[] = [
    {
        id: 1,
        name: "Home",
        link: "/"
    },
    {
        id: 2,
        name: "About",
        link: "/about"
    },
    {
        id: 3,
        name: "Projects",
        link: "/projects"
    }
]

export default function NavBar() {
    return (
        <div className='h-16 box-border px-20 border-b border-gray-200 '>
            {/* 2xl:max-w-7xl  2xl:mx-auto  */}
            <div className='w-full h-full flex items-center justify-between'>
                <div className='flex items-center'>
                    <div className='flex'>
                        <p className={hStyles}>H</p>
                        <p className={pStyles}>P</p>
                    </div>
                    <div className='ml-10 hidden md:flex lg:ml-20 xl:ml-40 '>
                        <NavList navlist={navlist}></NavList>
                    </div>
                </div>
                <div className='flex items-center '>
                    <LoginBtn />

                    <SetTheme />
                </div>
            </div>
        </div>
    )
}


function LoginBtn() {
    return (
        <>
            <Link href='/login' className='font-bold py-1 px-6'>登录</Link>
            <Link href='/register' className='font-bold py-1 px-6 border-2 border-black dark:border-white rounded-3xl hover:bg-slate-200'>注册</Link>
        </>
    )
}
