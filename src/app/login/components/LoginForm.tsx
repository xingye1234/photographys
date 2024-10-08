"use client";
import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
// import { Button, Input } from "@douyinfe/semi-ui";
import { Input, Button } from 'antd';
import {UserOutlined, UnlockOutlined} from "@ant-design/icons";
// import { IconUser, IconKey } from "@douyinfe/semi-icons";
import { rules } from "@/app/types/login/rules";
import { login } from "@/app/web/login/api";
import { Toast } from "@douyinfe/semi-ui";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/app/store";

interface IFormInput {
  username: string;
  password: string;
}

export default function LoginForm() {
  const router = useRouter();
  const {Password} = Input
  const setUserInfo = useUserStore((state) => state.setUserInfo);
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IFormInput>({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onBlur",
  });
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const result = await login({
        username: data.username,
        password: data.password,
      });
      if (result.data.code === 200) {
        setUserInfo(result.data.data.userInfo);
        localStorage.setItem(
          "photography_status",
          JSON.stringify({ token: result.data.data.token, status: 1 })
        );
        Toast.success("登录成功");
        router.prefetch("/");
        router.replace("/");
      } else {
        Toast.error(result.data.message);
      }
    } catch (error) {
      Toast.error("登录失败");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} method="POST">
      <div className="lg:flex bg-[#eff0f3] px-5 py-3 box-border rounded-md">
        <div className="mt-4 lg:ml-4 lg:mt-0 w-full text-white">
          <Controller
            name="username"
            control={control}
            rules={rules.uname}
            render={({ field }) => (
              <Input
              prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder={"请输入用户名"}
                status={errors.username ? "error" : ""}
                style={{ backgroundColor: "white" }}
                size="large"
                {...field}
                aria-invalid={errors.username ? "true" : "false"}
              />
            )}
          />
          {errors.username && (
            <span role="alert" className="text-red-500 text-sm">
              {errors.username.message}
            </span>
          )}
        </div>
        <div className="mt-4 lg:ml-4 lg:mt-0 w-full text-white">
          <Controller
            name="password"
            control={control}
            rules={rules.pwd}
            render={({ field }) => (
              <Password
                // prefix={<IconKey />}
                prefix={<UnlockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder={"请输入密码"}
                status={errors.password ? "error" : ""}
                size="large"
                {...field}
                // mode="password"
                aria-invalid={errors.password ? "true" : "false"}
              />
            )}
          />
          {errors.password && (
            <span role="alert" className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}
        </div>

        <div className="text-center mt-4 lg:ml-4 lg:mt-0">
          <Button size="large" type="primary" htmlType="submit">
            登录
          </Button>
        </div>
      </div>
    </form>
  );
}
