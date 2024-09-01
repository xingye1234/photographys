"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {SunFilled, MoonFilled} from '@ant-design/icons';

export default function SetTheme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  //确定是否已经在客户端挂载
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <span
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="ml-4 pt-1 cursor-pointer"
      >
        {/* {theme === "light" ? <IconSun size="extra-large" /> : <IconMoon size="extra-large" />} */}
        {theme === "light" ? <SunFilled style={{fontSize: "20px"}} /> : <MoonFilled style={{fontSize: "20px"}}/>}
      </span>
    </>
  );
}
