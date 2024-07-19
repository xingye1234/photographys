"use client";
import NavBar from "@/app/components/Layout/NavBar";
import QueryClientContext from "@/app/context/QueryClient";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  return (
    <QueryClientContext>
      <App />
    </QueryClientContext>
  );
}

function App() {
  return (
    <div className="w-full" style={{ height: `calc(100vh - 64px)` }}>
      <NavBar />
      {/* 2xl:max-w-7xl  */}
      <div className="w-full h-full 2xl:mx-auto p-1 box-border">
        Index
      </div>
    </div>
  );
}
