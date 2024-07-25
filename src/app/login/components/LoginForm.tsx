"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@douyinfe/semi-ui";
import { IconUser, IconKey } from "@douyinfe/semi-icons";

interface IFormInput {
    username: string;
    password: string;
}

export default function LoginForm() {
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center">
                <label className="mr-3 text-white">
                    <IconUser size="large" />
                </label>
                <input {...register("username", { required: true, maxLength: 20 })} className="bg-white outline-none px-3 py-1" />
            </div>
            <div className="mt-4 flex items-center">
                <label className="mr-3 text-white">
                    <IconKey size="large" />
                </label>
                <input
                    {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 18,
                    })}
                    className="bg-white outline-none px-3 py-1"
                />
            </div>
            <div className="mt-4 text-center">
                <Button theme='solid' type='primary'>
                    登录
                </Button>
            </div>
        </form>
    );
}
