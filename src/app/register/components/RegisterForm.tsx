"use client";
import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Button, Input } from "@douyinfe/semi-ui";
import { IconUser, IconKey,IconMail } from "@douyinfe/semi-icons";

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
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)} method="POST">
            <div className="bg-[#eff0f3] px-5 py-3 box-border rounded-md">
                <Controller
                    name="username"
                    control={control}
                    rules={{
                        required: true,
                        minLength: 3,
                        maxLength: 18,
                    }}

                    render={({ field }) => <Input prefix={<IconUser />} placeholder={"请输入用户名"} style={{ backgroundColor: 'white' }} size="large" {...field} aria-invalid={errors.username ? "true" : "false"} />}
                />
                <div className="mt-4 w-full text-white">
                    <Controller
                        name="password"
                        control={control}
                        rules={{
                            required: true,
                            minLength: 6,
                            maxLength: 18,
                        }}
                        render={({ field }) => <Input prefix={<IconKey />} placeholder={"请输入密码"} style={{ backgroundColor: 'white' }} size="large" {...field} mode="password" aria-invalid={errors.password ? "true" : "false"} />}
                    />
                </div>

                <div className="mt-4 w-full text-white">
                    <Controller
                        name="passwordConfirm"
                        control={control}
                        rules={{
                            required: true,
                            minLength: 6,
                            maxLength: 18,
                        }}
                        render={({ field }) => <Input prefix={<IconKey />} placeholder={"请再次输入密码"} style={{ backgroundColor: 'white' }} size="large" {...field} mode="password" aria-invalid={errors.passwordConfirm ? "true" : "false"} />}
                    />
                </div>

                <div className="mt-4 w-full text-white">
                    <Controller
                        name="mail"
                        control={control}
                        rules={{
                            required: true,
                            minLength: 6,
                            maxLength: 18,
                        }}
                        render={({ field }) => <Input prefix={<IconMail />} placeholder={"请输入邮箱"} style={{ backgroundColor: 'white' }} size="large" {...field} aria-invalid={errors.mail ? "true" : "false"} />}
                    />
                </div>

                <div className="text-center mt-4 ">
                    <Button theme='solid' size="large" type='primary' className="w-full">
                        <input type="submit" value={'注册'} />
                    </Button>
                </div>
            </div>
        </form>
    );
}
