"use client";
import React from "react";
import { User } from "@/app/types/user";
import Link from "next/link";
import { Dropdown } from "antd";
import Modal from "@/app/components/common/Modal";

export default function Avatar({ user }: { user: User }) {
  const items = [
    {
      key: "1",
      label: <Link href={"/profile/" + user.id}>个人信息</Link>,
    },
    {
      key: "2",
      label: <span>我的喜欢</span>,
    },
    {
      key: "3",
      label: (
        <Modal title="退出登录" content={<span>确定要退出登录吗？</span>}>
          <span>退出登录</span>
        </Modal>
      ),
    },
  ];

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
          {/* <Dropdown
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
          </Dropdown> */}
          <Dropdown menu={{ items }} placement="bottom" arrow>
            <span className="cursor-pointer italic text-xl tracking-[.15em] font-bold">
              {user.username}
            </span>
          </Dropdown>
        </div>
      )}
    </>
  );
}
