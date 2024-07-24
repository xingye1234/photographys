import React from 'react'
import LoginForm from './components/LoginForm';
import navbarStyles from '@/app/components/Layout/navbar.module.css';
// import Image from 'next/image'
// import loginBg from '@/app/images/login.jpg'

const titleStyles = `text-4xl font-bold text-center mb-6 italic ${navbarStyles["gradient-text-login"]}`

export default function Logn() {
  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-r from-cyan-100 to-blue-100'>
      {/* <Image src={loginBg} alt="login" objectFit='cover' className='absolute w-full h-full' /> */}
      <div className='w-1/4 h-1/3 bg-white rounded-md p-4 box-border shadow-xl'>
        <h1 className={titleStyles}>LOGIN</h1>
        <LoginForm />
      </div>
    </div>
  )
}
