"use client";
import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Button, Input } from "@douyinfe/semi-ui";
import { IconUser, IconKey } from "@douyinfe/semi-icons";
import { rules } from "@/app/types/login/rules";

interface IFormInput {
  username: string;
  password: string;
}

export default function LoginForm() {
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
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

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
                prefix={<IconUser />}
                placeholder={"请输入用户名"}
                validateStatus={errors.username ? "error" : "success"}
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
              <Input
                prefix={<IconKey />}
                placeholder={"请输入密码"}
                validateStatus={errors.password ? "error" : "success"}
                style={{ backgroundColor: "white" }}
                size="large"
                {...field}
                mode="password"
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
          <Button theme="solid" size="large" type="primary" htmlType="submit">
            登录
          </Button>
        </div>
      </div>
    </form>
  );
}
