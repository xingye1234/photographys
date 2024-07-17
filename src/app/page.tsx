import NavBar from "@/app/components/layout/NavBar";
import { useFetchQuery } from "@/app/utils/query";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function Home() {

  // const results = useFetchQuery('login', '/api/login')

  // console.log(results)

  return (
    // <QueryClientProvider client={new QueryClient()}>
      <div className="w-full" style={{ height: `calc(100vh - 64px)` }}>
        <NavBar />
        <div className="w-full 2xl:max-w-7xl h-full 2xl:mx-auto py-4 box-border">
          Index
        </div>
      </div>
    // </QueryClientProvider>
  );
}
