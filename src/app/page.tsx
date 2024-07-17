"use client";
import NavBar from "@/app/components/layout/NavBar";
import { useFetchQuery } from "@/app/utils/query";
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
  const results = useQuery({queryKey:['login'], queryFn:() => fetch('/api/login').then(res => res.json()).then(res => res.data)});

  console.log(results);
  return (
    <div className="w-full" style={{ height: `calc(100vh - 64px)` }}>
      <NavBar />
      <div className="w-full 2xl:max-w-7xl h-full 2xl:mx-auto py-4 box-border">
        Index
      </div>
    </div>
  );
}
