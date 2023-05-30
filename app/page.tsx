import Image from "next/image";
import { Suspense } from "react";
import RenderItems from "./components/RenderItems";
import Loading from "./loading";

export const revalidate = 180;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <div className="group mt-16 mb-4">
        <h1 className="text-4xl">Find items, Sell items; with ease...</h1>
        <p>#1 Marketplace for new and used items</p>
      </div>
      <Suspense fallback={<Loading />}>
        {/* @ts-expect-error Async Server Component */}
        <RenderItems />
      </Suspense>
    </main>
  );
}
