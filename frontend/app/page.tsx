import CategorySection from "@/components/home-page/CategorySection";
import MainSection from "@/components/home-page/MainSection";
import { headers } from "next/headers";
import Script from "next/script";
import { Suspense } from "react";

export default function Home() {
  const nonce = headers().get("x-nonce");

  return (
    <>
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
        <Suspense>
          <CategorySection id={5} />
        </Suspense>
        <Suspense>
          <CategorySection id={6} />
        </Suspense>
        <Suspense>
          <CategorySection id={7} />
        </Suspense>
        <Suspense>
          <CategorySection id={8} />
        </Suspense>
      </main>
      <Script
        src="https://www.googletagmanager.com/gtag/js"
        strategy="afterInteractive"
        nonce={nonce!}
      />
    </>
  );
}
