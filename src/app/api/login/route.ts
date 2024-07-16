import type { NextRequest, NextResponse } from "next/server";
import { createToken } from "@/app/utils/jwt";

//logout
export const GET = (req: NextRequest, res: NextResponse) => {
    return Response.json({
        code: 200,
        msg: '操作成功'
    });
}

//login
export const POST = async (req: NextRequest, res: NextResponse) => {

    const fData = await req.formData();

    /**
     * TODO:
     * 1.判断用户和密码是否为null
     * 2.查询数据库是否有数据
     * 3.生成token
     * 4.设置headers,cookies
     * 5.返回用户数据信息
     */

    return Response.json({
        code: 200,
        msg: '操作成功',
        data: {
            name: 'wkx',
            age: 24
        }
    });
}