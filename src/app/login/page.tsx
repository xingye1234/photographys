import React from 'react'
import LoginForm from './components/LoginForm';
// import Image from 'next/image'
// import loginBg from '@/app/images/login.jpg'

export default function Logn() {
  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-r from-cyan-100 to-blue-100'>
      {/* <Image src={loginBg} alt="login" objectFit='cover' className='absolute w-full h-full' /> */}
      <div className='w-[30rem] min-h-64 bg-black/10 rounded-md p-4 box-border shadow-lg flex flex-col items-center'>
        <h1 className="text-3xl font-bold text-center mb-6 mt-6 italic text-white">LOGIN</h1>
        <LoginForm />
      </div>
    </div>
  )
}
