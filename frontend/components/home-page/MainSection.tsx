import FixArticleCard from "../articles/FixArticleCard";
import { Suspense } from "react";
import { CompactArticlesSkeleton } from "../skeletons/CompactArticleCardSkeleton";
import { FixArticleCardSkeleton } from "../skeletons/FixArticleCardSkeleton";
import { MiniArticlesSkeleton } from "../skeletons/MiniArticleCardSkeleton";
import CompactArticles from "../articles/CompactArticles";
import MiniArticles from "../articles/MiniArticles";

const MainSection = async () => {
  return (
    <div className="grid w-full grid-cols-1 grid-rows-1 gap-8 lg:grid-cols-12">
      <div className="order-2 col-span-full -mt-4 flex flex-col gap-4 divide-y lg:order-first lg:col-span-3">
        <Suspense fallback={<CompactArticlesSkeleton />}>
          <CompactArticles />
        </Suspense>
      </div>
      <div className="order-first col-span-full lg:order-2 lg:col-span-6">
        <Suspense fallback={<FixArticleCardSkeleton />}>
          <FixArticleCard />
        </Suspense>
      </div>
      <div className="order-3 col-span-full lg:col-span-3">
        <section className="flex flex-col gap-4 divide-y">
          <h2 className="text-lg font-bold">Novedades</h2>
          <div className="flex flex-col gap-4 divide-y">
            <Suspense fallback={<MiniArticlesSkeleton />}>
              <MiniArticles />
            </Suspense>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainSection;
