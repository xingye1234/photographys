import React from 'react'
import LoginLayout from './components/LoginLayout';
import LoginForm from './components/LoginForm';

export default function Login() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <LoginLayout >
        <LoginForm />
      </LoginLayout>
    </div>
  )
}
