"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@radix-ui/themes";
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
        <label className="mr-2">
          <IconUser size="large"/>
        </label>
        <input {...register("username", { required: true, maxLength: 20 })} className="bg-gray-200 outline-none px-2 py-1"/>
      </div>
      <div className="mt-4 flex items-center">
        <label className="mr-2">
          <IconKey size="large"/>
        </label>
        <input
          {...register("password", {
            required: true,
            minLength: 6,
            maxLength: 18,
          })}
          className="bg-gray-200 outline-none px-2 py-1"
        />
      </div>
      <Button color="cyan" variant="soft" size={"2"}>
        <input type="submit" value="登录" />
      </Button>
    </form>
  );
}
