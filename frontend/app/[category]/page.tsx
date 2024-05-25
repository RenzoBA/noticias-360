import qs from "qs";
import { getCategoryData } from "@/lib/utils";
import axios from "axios";
import { Suspense } from "react";
import { CategoryName, SoftCategoryType } from "@/types/category";
import { BASE_URL, categoriesId } from "@/constants";
import { ArticlesSkeleton } from "@/components/skeletons/ArticleCardSkeleton";
import { Metadata } from "next";
import Articles from "@/components/articles/Articles";

interface Props {
  params: { category: CategoryName };
  searchParams: { page?: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data } = await axios(
    `${BASE_URL}/api/categories/${categoriesId[params.category]}`
  );

  return {
    title: data.data.attributes.name,
  };
}

const query = qs.stringify({
  fields: ["name", "description"],
});

const page = async ({ params, searchParams }: Readonly<Props>) => {
  const currentPage = Number(searchParams.page) || 1;

  const categoryId = categoriesId[params.category];

  const category = (await getCategoryData(categoryId, query)) as Pick<
    SoftCategoryType,
    "name" | "description"
  >;

  return (
    <main className="mx-auto flex max-w-[1400px] flex-col items-center justify-center gap-8 px-5 py-8 lg:px-8">
      <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <h1 className="text-3xl font-semibold lg:text-5xl">
            {category.name}
          </h1>
          <p className="mt-2 text-xl lg:text-2xl">{category.description}</p>
        </div>
      </div>
      <div className="flex w-full flex-col gap-20 pt-6">
        <Suspense fallback={<ArticlesSkeleton />}>
          <Articles
            currentPage={currentPage}
            categoryId={categoryId}
            categorySlug={params.category}
          />
        </Suspense>
      </div>
    </main>
  );
};

export default page;
