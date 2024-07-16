import NavBar from "@/app/components/layout/NavBar";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <NavBar />
      <div className="w-full 2xl:max-w-7xl h-full 2xl:mx-auto py-4 box-border">
        Index
      </div>
    </div>
  );
}
