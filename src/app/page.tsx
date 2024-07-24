"use client";
import NavBar from "@/app/components/Layout/NavBar";
import QueryClientContext from "@/app/context/QueryClient";
import { useQuery } from "@tanstack/react-query";
import {GET} from "@/app/utils/request";

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
    <div className="w-full" style={{ height: `calc(100vh - 64px)` }}>
      <NavBar />
      <div className="w-full h-full 2xl:mx-auto p-1 box-border">
        Index
      </div>
    </div>
  );
}
