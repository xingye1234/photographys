import type { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import {join} from "path";

//recommend
export const GET = async (req: NextRequest, res: NextResponse) => {
    try {
        const contents = await readFile(join(process.cwd(), '/src/app/data/recommend.ts'), 'utf-8');
        console.log('------>',JSON.parse(JSON.stringify(contents)));
        return Response.json({
            code: 200,
            msg: '操作成功',
            data: {
                name: 'wkx',
                age: 24,
                infos: JSON.parse(JSON.stringify(contents))
            }
        });
    } catch (error) {
        console.log('------>error',error);
        return Response.json({
            code: 201,
            msg: '操作失败',
            data: null
        });
    }
}