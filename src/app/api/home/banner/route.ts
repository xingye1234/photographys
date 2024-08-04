import type { NextRequest, NextResponse } from "next/server";
import { readdir } from "fs/promises";
import { join } from "path";

const filePath = "/public/assets/home/banner"
//recommend
export const GET = async (req: NextRequest, res: NextResponse) => {
    try {
        const contents = await readdir(`${join(process.cwd())}${filePath}`);
        return Response.json({
            code: 200,
            msg: '操作成功',
            data:contents.map((item, idx) => {
                return {
                    id:idx,
                    img:`${filePath.replace('/public','')}/${item}`,
                    link:"#"
                }
            })
        });
    } catch (error) {
        return Response.json({
            code: 201,
            msg: '操作失败',
            data: null
        });
    }
}