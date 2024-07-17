import type { NextRequest, NextResponse } from "next/server";

//photoList
export const GET = (req: NextRequest, res: NextResponse) => {
    return Response.json({
        code: 200,
        msg: '操作成功',
        data:{
            name: 'wkx',
            age: 24
        }
    });
}