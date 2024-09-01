"use client";
import NavBar from "@/app/components/layout/NavBar";
import QueryClientContext from "@/app/context/QueryClient";
import { useQuery } from "@tanstack/react-query";
import Swiper from "@/app/components/home/Swiper";
import Topic from "@/app/components/home/Topic";
import { getUserInfo } from "@/app/web/user";
import { useUserStore } from "@/app/store";
import zhCN from "antd/locale/zh_CN";
import "dayjs/locale/zh-cn";
import { ConfigProvider } from 'antd';

export default function Home() {
  return (
    <QueryClientContext>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </QueryClientContext>
  );
}

function App() {
  // const { data } = useQuery({ queryKey: ["login"], queryFn:  login});
  const _status = JSON.parse(
    localStorage.getItem("photography_status") || "{}"
  );
  const setUserInfo = useUserStore((state) => state.setUserInfo);

  if (_status.status) {
    getUserInfo().then((res) => {
      // console.log(res)
      setUserInfo(res.data.user);
    });
  }
  return (
    // style={{ height: `calc(100vh - 64px)` }}
    <div className="w-full">
      <NavBar />
      <div className="w-full h-full box-border">
        <Swiper />
        <div className="px-20 mt-4">
          <Topic />
        </div>
      </div>
    </div>
  );
}
