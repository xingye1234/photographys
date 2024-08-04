import { NextRequest, NextResponse } from "next/server";
import { NextApiResponse } from "next";
import { createToken } from "@/app/utils/jwt";
import { prisma } from "@/app/data/prisma";
import { setCookie } from "@/app/utils/cookies";
import { cookies } from "next/headers";

//logout
export const GET = async (req: NextRequest, res: NextResponse) => {
  const result = await prisma.user.findMany();

  console.log("------->", result);

  return Response.json({
    code: 200,
    msg: "操作成功",
    data: {
      name: "wkx",
      age: 24,
    },
  });
};

//login
export const POST = async (req: NextRequest, res: NextApiResponse) => {
  const { username, password } = await req.json();
  const cookie = cookies();

  /**
   * TODO:
   * 1.判断用户和密码是否为null
   * 2.查询数据库是否有数据
   * 3.生成token
   * 4.设置headers,cookies
   * 5.返回用户数据信息
   */

  const queryUser = await prisma.user.findMany({
    where: {
      username,
      password,
    },
  });

  if (queryUser.length === 0) {
    return Response.json({
      code: 200,
      msg: "操作失败，用户不存在",
    });
  }

  const token = createToken(queryUser[0]?.email);

  cookie.set("photography_token", token, {
    maxAge: 60 * 60 * 24 * 7,
    secure: true,
    httpOnly: true,
    sameSite: "strict",
    path: "/",
  });

  return Response.json({
    code: 200,
    message: "操作成功",
    data: {
      token,
    },
  });
};
