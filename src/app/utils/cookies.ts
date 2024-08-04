import { NextApiResponse } from "next";
export const setCookie = (res: NextApiResponse, token: string) => {
    res.setHeader('Set-Cookie', `token=${token}; Path=/; HttpOnly; Max-Age=604800; Samesite=Strict;`);
  };

export const clearCookie = (res: NextApiResponse) => {
    res.setHeader(
      "Set-Cookie",
      `token=; Path=/; HttpOnly;Max-Age=0`
    );
  };