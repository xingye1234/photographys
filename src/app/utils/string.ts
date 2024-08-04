import crypto from "crypto";

/* hash string */
export const hashStr = (str: string) => {
  return crypto.createHash("sha256").update(str).digest("hex");
};