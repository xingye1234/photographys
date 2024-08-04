import type { NextRequest, NextResponse } from "next/server";
import { NextApiResponse } from "next";
import { prisma } from "@/app/data/prisma";


export const POST = async (req: NextRequest, res: NextApiResponse) => {
  const { username, password, email } = await req.json();

  const queryUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (queryUser) {
    return Response.json({ message: "用户已经存在", status: 400 });
  }

  const user = await prisma.user.create({
    data: {
      username,
      email,
      password,
    },
  });

  if (user) {
    return Response.json({ message: "注册成功", code: 200 });
  }else{
    return Response.json({ message: "注册失败", code: 400 });
  }
};
