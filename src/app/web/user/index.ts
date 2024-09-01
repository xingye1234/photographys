import { GET } from "@/app/utils/request";

export const getUserInfo = () => {
  return GET("/api/user");
};
