import { NextApiResponse } from "next";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";
//logout
export const GET = async (req: NextRequest, res: NextApiResponse) => {
  const cookieStore = cookies();

  cookieStore.delete("photography_token");
  return Response.json({
    code: 200,
    msg: "操作成功",
  });
};
