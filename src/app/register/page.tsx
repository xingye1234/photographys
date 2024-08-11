import React from 'react'
import RegisterLayout from './components/RegisterFormLayout';
import RegisterFrom from "./components/RegisterForm"

export default function Register() {
  return (
    <div className="h-screen flex items-center justify-center bg-[url('/assets/login/login.jpg')] bg-cover">
      <RegisterLayout>
        <RegisterFrom/>
      </RegisterLayout>
    </div>
  )
}
