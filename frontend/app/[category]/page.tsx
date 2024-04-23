import qs from "qs";
import { flattenAttributes } from "@/lib/utils";
import axios from "axios";
import { FC, Suspense } from "react";
import { CategoryName, SoftCategoryType } from "@/types/category";
import { BASE_URL, categoriesId } from "@/constants";
import { ArticlesSkeleton } from "@/components/skeletons/ArticleCardSkeleton";
import { Metadata } from "next";
import ArticleCard from "@/components/articles/ArticleCard";

interface Props {
  params: { category: CategoryName };
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
  populate: {
    articles: {
      sort: ["publishedAt:desc"],
      fields: ["title", "lead", "slug", "publishedAt"],
      populate: {
        cover: {
          fields: ["url", "alternativeText"],
        },
        categories: {
          fields: ["name", "slug"],
        },
      },
      limit: 12,
    },
  },
});

const getCategoryData = async (name: CategoryName) => {
  const { data } = await axios(
    `${BASE_URL}/api/categories/${categoriesId[name]}?${query}`
  );

  return flattenAttributes(data) as SoftCategoryType;
};

const page: FC<Props> = async ({ params }) => {
  const category = await getCategoryData(params.category);

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
      <div className="flex w-full flex-col gap-8 pt-6 sm:grid sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<ArticlesSkeleton />}>
          {category.articles.data.map((article) => (
            <ArticleCard
              key={article.id}
              categorySlug={params.category}
              article={article}
            />
          ))}
        </Suspense>
      </div>
    </main>
  );
};

export default page;
