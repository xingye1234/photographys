"use client";
import NavBar from "@/app/components/layout/NavBar";
import QueryClientContext from "@/app/context/QueryClient";
import { BackTop } from "@douyinfe/semi-ui";
import { useQuery } from "@tanstack/react-query";
import Swiper from "@/app/components/home/Swiper";
import Topic from "@/app/components/home/Topic";

export default function Home() {
  return (
    <QueryClientContext>
      <App />
    </QueryClientContext>
  );
}


function App() {
  // const { data } = useQuery({ queryKey: ["login"], queryFn:  login});

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
      <BackTop />
    </div>
  );
}
