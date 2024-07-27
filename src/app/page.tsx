"use client";
import NavBar from "@/app/components/layout/NavBar";
import QueryClientContext from "@/app/context/QueryClient";
import { BackTop } from '@douyinfe/semi-ui';
import { useQuery } from "@tanstack/react-query";
import {GET} from "@/app/utils/request";
import Swiper from "@/app/components/home/Swiper";
import Topic from "@/app/components/home/Topic";

export default function Home() {
  return (
    <QueryClientContext>
      <App />
    </QueryClientContext>
  );
}


function getRecommend() {
  return GET('/api/home/recommend')
}

function App() {


  const {data}= useQuery({queryKey: ['recommend'], queryFn: getRecommend})

  return (
    // style={{ height: `calc(100vh - 64px)` }}
    <div className="w-full" >
      <NavBar />
      <div className="w-full h-full 2xl:mx-auto p-1 box-border">
        <Swiper/>
        <Topic/>
      </div>
      <BackTop />
    </div>
  );
}
