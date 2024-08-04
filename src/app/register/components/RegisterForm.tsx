"use client";
import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Button, Input, Toast } from "@douyinfe/semi-ui";
import { IconUser, IconKey, IconMail } from "@douyinfe/semi-icons";
import { rules } from "@/app/types/login/rules";
import { register } from "@/app/web/login/api";
import { useRouter } from "next/navigation";

interface IFormInput {
  username: string;
  password: string;
  passwordConfirm: string;
  mail: string;
}

export default function LoginForm() {
  const router = useRouter();
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IFormInput>({
    defaultValues: {
      username: "",
      password: "",
      passwordConfirm: "",
      mail: "",
    },
    mode: "onBlur",
  });
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const result = await register({
        username: data.username,
        password: data.password,
        email: data.mail,
      });

      if (result.data.code === 200) {
        Toast.success("注册成功");
        router.push("/login");
      }else{
        Toast.error(result.data.message);
      }
    } catch (error) {
      Toast.error("注册失败");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} method="POST">
      <div className="bg-[#eff0f3] px-5 py-3 box-border rounded-md">
        <div className="mt-4 w-full text-white">
          <Controller
            name="username"
            control={control}
            rules={rules.uname}
            render={({ field }) => (
              <Input
                prefix={<IconUser />}
                placeholder={"请输入用户名"}
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
        <div className="mt-4 w-full text-white">
          <Controller
            name="password"
            control={control}
            rules={rules.pwd}
            render={({ field }) => (
              <Input
                prefix={<IconKey />}
                placeholder={"请输入密码"}
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

        <div className="mt-4 w-full text-white">
          <Controller
            name="passwordConfirm"
            control={control}
            rules={rules.pwd}
            render={({ field }) => (
              <Input
                prefix={<IconKey />}
                placeholder={"请再次输入密码"}
                style={{ backgroundColor: "white" }}
                size="large"
                {...field}
                mode="password"
                aria-invalid={errors.passwordConfirm ? "true" : "false"}
              />
            )}
          />
          {errors.passwordConfirm && (
            <span role="alert" className="text-red-500 text-sm">
              {errors.passwordConfirm.message}
            </span>
          )}
        </div>

        <div className="mt-4 w-full text-white">
          <Controller
            name="mail"
            control={control}
            rules={rules.mail}
            render={({ field }) => (
              <Input
                prefix={<IconMail />}
                placeholder={"请输入邮箱"}
                style={{ backgroundColor: "white" }}
                size="large"
                {...field}
                aria-invalid={errors.mail ? "true" : "false"}
              />
            )}
          />
          {errors.mail && (
            <span role="alert" className="text-red-500 text-sm">
              {errors.mail.message}
            </span>
          )}
        </div>

        <div className="text-center mt-4 ">
          <Button
            theme="solid"
            size="large"
            type="primary"
            className="w-full"
            htmlType="submit"
          >
            注册
          </Button>
        </div>
      </div>
    </form>
  );
}
