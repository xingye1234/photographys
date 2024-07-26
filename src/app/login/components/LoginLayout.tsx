import React from 'react'
import localFont from 'next/font/local';
import Link from 'next/link';


const myFont = localFont({
    src: '../../styles/fonts/xingkai.ttf',
    display: 'swap',
    style: 'italic',
})

const hStyles = `${myFont.className} font-bold text-5xl text-cyan-300`;
const pStyles = `${myFont.className} font-bold text-5xl ml-1 text-cyan-300`;

export default function LoginLayout({ children, showRegister = true }: { children: React.ReactNode, showRegister?: boolean }) {
    return (
        <div className='w-[25rem] bg-[#eff0f3] lg:w-[50rem] lg:bg-transparent'>
            <div className='hidden lg:flex'>
                <p className={hStyles}>H</p>
                <p className={pStyles}>P</p>
            </div>
            <h1 className="hidden lg:block text-lg font-bold mb-6 mt-6 italic text-[#4e4e4e]">欢迎登录 Headerstream Photography</h1>
            <h1 className="lg:hidden text-3xl font-bold text-center mb-6 mt-6 italic text-white">LOGIN</h1>
            {children}

            {showRegister && (
                <div className='text-xs text-right mt-2 text-gray-400'>
                    <Link href={'/forgetpassword'} className='text-blue-500 decoration-1 hover:text-blue-700 pr-4'>忘记密码?</Link>
                    还没有账号？<Link href={'/register'} className='text-blue-500 decoration-1 hover:text-blue-700 '>立即注册</Link>
                </div>
            )}

        </div>
    )
}
