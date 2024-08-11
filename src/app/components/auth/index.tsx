'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

const unAuthPages = {
  "login": "/login",
  "register": "/register",
  "/":"/",
  "share": "/share",
  "library":"/library",
}

export default function Auth({children}:{children:React.ReactNode}) {

  return (
     <>{children}</>
  )
}
