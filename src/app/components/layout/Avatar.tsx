"use client";
import React from "react";
import { User } from "@/app/types/user";
import { Dropdown } from "@douyinfe/semi-ui";
import Link from "next/link";

export default function Avatar({ user }: { user: User }) {
  return (
    <>
      {user && (
        <div className="flex items-center">
          {user.avatar && (
            <img
              src={user.avatar}
              alt="Profile Picture"
              className="w-12 h-12 rounded-full mb-4"
            />
          )}
          <Dropdown
            render={
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link href={"/profile/" + user.id}>个人信息</Link>
                </Dropdown.Item>
                <Dropdown.Item>我的喜欢</Dropdown.Item>
                <Dropdown.Item>退出登录</Dropdown.Item>
              </Dropdown.Menu>
            }
          >
            <span className="cursor-pointer italic text-xl tracking-[.15em] font-bold">
              {user.username}
            </span>
          </Dropdown>
        </div>
      )}
    </>
  );
}
