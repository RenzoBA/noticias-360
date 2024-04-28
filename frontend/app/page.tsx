import CategorySection from "@/components/home-page/CategorySection";
import MainSection from "@/components/home-page/MainSection";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-[1400px] flex-col items-center justify-center px-5 py-8 lg:px-8">
      <MainSection />
      <Suspense>
        <CategorySection id={1} />
      </Suspense>
      <Suspense>
        <CategorySection id={2} />
      </Suspense>
      <Suspense>
        <CategorySection id={3} />
      </Suspense>
      <Suspense>
        <CategorySection id={4} />
      </Suspense>
    </main>
  );
}
