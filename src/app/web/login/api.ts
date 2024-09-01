import { GET, POST } from "@/app/utils/request";
import { hashStr } from "@/app/utils/string";

export const login = ({
  username,
  password,
}: {
  username: string;
  password: string;
}) =>
  POST("/api/login", {
    username,
    password: hashStr(password),
  });

export const register = ({
  username,
  password,
  email,
}: {
  username: string;
  password: string;
  email: string;
}) =>
  POST("/api/register", {
    username,
    email,
    password: hashStr(password),
  });

export const logout = () => {
  return GET("/api/logout");
};
