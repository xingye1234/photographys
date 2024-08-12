import React from "react";
import localFont from "next/font/local";
import navbarStyles from "./navbar.module.css";
import { INavlist } from "@/app/types/navbar/types";
import NavList from "@/app/components/layout/NavList";
import Link from "next/link";
import SetTheme from "@/app/components/layout/SetTheme";
import Avatar from "./Avatar";
import { useUserStore } from "@/app/store";
import { User } from "@/app/types/user";

const myFont = localFont({
  src: "../../styles/fonts/xingkai.ttf",
  display: "swap",
  style: "italic",
});

const hStyles = `${myFont.className} font-bold text-5xl ${navbarStyles["gradient-text"]}`;
const pStyles = `${myFont.className} font-bold text-5xl ml-1 ${navbarStyles["gradient-text"]} pr-1`;

const navlist: INavlist[] = [
  { id: 1, link: "/map", name: "摄影师" },
  { id: 2, link: "/rank", name: "排行榜" },
  { id: 3, link: "/share", name: "摄影分享区" },
  { id: 4, link: "/library", name: "图库" },
];

export default function NavBar() {
  const userStore = useUserStore<User>((state) => state.user as User);
  return (
    // border-b border-gray-200
    <div className="h-16 box-border px-20">
      {/* 2xl:max-w-7xl  2xl:mx-auto  */}
      <div className="w-full h-full flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex">
            <p className={hStyles}>H</p>
            <p className={pStyles}>P</p>
          </div>
          <div className="ml-10 hidden md:flex lg:ml-20 xl:ml-40 ">
            <NavList navlist={navlist}></NavList>
          </div>
        </div>
        <div className="flex items-center ">
          {userStore.id ? <Avatar user={userStore}/> : <LoginBtn />}
          <SetTheme />
        </div>
      </div>
    </div>
  );
}

function LoginBtn() {
  return (
    <>
      <Link href="/login" className="font-bold py-1 px-6">
        登录
      </Link>
      <Link
        href="/register"
        className="font-bold py-1 px-6 border-2 border-black dark:hover:bg-slate-400
             dark:border-white rounded-3xl hover:bg-slate-200"
      >
        注册
      </Link>
    </>
  );
}
