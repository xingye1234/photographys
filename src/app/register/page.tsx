import React from 'react'
import LoginLayout from '../login/components/LoginLayout';
import RegisterFrom from "./components/RegisterForm"

export default function Register() {
  return (
    <div className="h-screen flex items-center justify-center">
      <LoginLayout showRegister={false}>
        <RegisterFrom/>
      </LoginLayout>
    </div>
  )
}
