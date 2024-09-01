import { NextRequest } from "next/server";
import { NextApiResponse } from "next";
import { prisma } from "@/app/data/prisma";
import { checkToken } from "@/app/utils/jwt";

export const GET = async (req: NextRequest, res: NextApiResponse) => {
  const token = req.cookies.get("photography_token");
  if (!token?.value) {
    return Response.json({ code: "401", message: "Unauthorized" });
  }

  const mail = checkToken(token.value) as string;

  const userInfo = await prisma.user.findUnique({
    where: {
      email: mail,
    },
  });
  return Response.json({ message: "success", user: userInfo });
};
