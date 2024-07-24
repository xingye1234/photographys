'use client';
import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@radix-ui/themes";


interface IFormInput {
    firstName: string
    password: string
}


export default function LoginForm() {

    const { register, handleSubmit } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>UserName</label>
            <input {...register("username", { required: true, maxLength: 20 })} />
            <label>PassWord</label>
            <input {...register("password", { required: true, minLength: 6, maxLength: 18 })} />
            <Button color="cyan" variant="soft" size={"2"} >
                <input type="submit" value="登录"/>
            </Button>
        </form>
    )
}
