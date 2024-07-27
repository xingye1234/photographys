import React from "react";
import localFont from "next/font/local";
import Link from "next/link";

const myFont = localFont({
  src: "../../styles/fonts/xingkai.ttf",
  display: "swap",
  style: "italic",
});

const hStyles = `${myFont.className} font-bold text-5xl text-cyan-300`;
const pStyles = `${myFont.className} font-bold text-5xl ml-1 text-cyan-300`;

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-[25rem] bg-[#eff0f3] py-4 rounded-md ">
      <h1 className="text-3xl font-bold text-center mt-2 italic text-[#4e4e4e]">
        REGISTER
      </h1>
      {children}
    </div>
  );
}
