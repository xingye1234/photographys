"use client";
import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Button, Input } from "@douyinfe/semi-ui";
import { IconUser, IconKey, IconMail } from "@douyinfe/semi-icons";
import { rules } from "@/app/types/login/rules";

interface IFormInput {
    username: string;
    password: string;
    passwordConfirm: string;
    mail: string;
}

export default function LoginForm() {
    const { handleSubmit, formState: { errors }, control } = useForm<IFormInput>({
        defaultValues: {
            username: "",
            password: "",
            passwordConfirm: "",
            mail: ""
        },
        mode: "onBlur",

    });
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} method="POST">
            <div className="bg-[#eff0f3] px-5 py-3 box-border rounded-md">
                <div className="mt-4 w-full text-white">
                    <Controller
                        name="username"
                        control={control}
                        rules={rules.uname}
                        render={({ field }) => <Input prefix={<IconUser />} placeholder={"请输入用户名"} style={{ backgroundColor: 'white' }} size="large" {...field} aria-invalid={errors.username ? "true" : "false"} />}
                    />
                    {errors.username && <span role="alert" className="text-red-500 text-sm">{errors.username.message}</span>}
                </div>
                <div className="mt-4 w-full text-white">
                    <Controller
                        name="password"
                        control={control}
                        rules={rules.pwd}
                        render={({ field }) => <Input prefix={<IconKey />} placeholder={"请输入密码"} style={{ backgroundColor: 'white' }} size="large" {...field} mode="password" aria-invalid={errors.password ? "true" : "false"} />}
                    />
                    {errors.password && <span role="alert" className="text-red-500 text-sm">{errors.password.message}</span>}
                </div>

                <div className="mt-4 w-full text-white">
                    <Controller
                        name="passwordConfirm"
                        control={control}
                        rules={rules.pwd}
                        render={({ field }) => <Input prefix={<IconKey />} placeholder={"请再次输入密码"} style={{ backgroundColor: 'white' }} size="large" {...field} mode="password" aria-invalid={errors.passwordConfirm ? "true" : "false"} />}
                    />
                    {errors.passwordConfirm && <span role="alert" className="text-red-500 text-sm">{errors.passwordConfirm.message}</span>}
                </div>

                <div className="mt-4 w-full text-white">
                    <Controller
                        name="mail"
                        control={control}
                        rules={rules.mail}
                        render={({ field }) => <Input prefix={<IconMail />} placeholder={"请输入邮箱"} style={{ backgroundColor: 'white' }} size="large" {...field} aria-invalid={errors.mail ? "true" : "false"} />}
                    />
                    {errors.mail && <span role="alert" className="text-red-500 text-sm">{errors.mail.message}</span>}
                </div>

                <div className="text-center mt-4 ">
                    <Button theme='solid' size="large" type='primary' className="w-full" htmlType="submit">
                        注册
                    </Button>
                </div>
            </div>
        </form>
    );
}
