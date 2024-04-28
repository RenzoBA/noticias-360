import qs from "qs";
import { flattenAttributes } from "@/lib/utils";
import { SoftCategoryType } from "@/types/category";
import axios from "axios";
import { BASE_URL } from "@/constants";
import Link from "next/link";
import ArticleCard from "../articles/ArticleCard";
import { FC, Suspense } from "react";
import { ArticlesSkeleton } from "../skeletons/ArticleCardSkeleton";

interface CategorySectionProps {
  id: number;
}

const query = qs.stringify({
  fields: ["name", "slug"],
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
      limit: 4,
    },
  },
});

const getCategoryData = async (id: number) => {
  const { data } = await axios(`${BASE_URL}/api/categories/${id}?${query}`);
  return flattenAttributes(data) as SoftCategoryType;
};

const CategorySection: FC<CategorySectionProps> = async ({ id }) => {
  const category = await getCategoryData(id);

  return (
    <section className="mt-16 flex flex-col gap-4 divide-y divide-primary">
      <div className="flex flex-row items-end justify-between">
        <h2>
          <Link
            href={`/${category.slug}`}
            className="text-3xl font-bold hover:underline"
            prefetch={false}
          >
            {category.name}
          </Link>
        </h2>
        <Link
          href={`/${category.slug}`}
          className="text-xs uppercase hover:underline"
          prefetch={false}
        >
          Ver todo
        </Link>
      </div>
      <div className="flex flex-col gap-8 pt-6 sm:grid sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<ArticlesSkeleton />}>
          {category.articles.data.map((article) => (
            <ArticleCard
              key={article.id}
              categorySlug={category.slug}
              article={article}
            />
          ))}
        </Suspense>
      </div>
    </section>
  );
};

export default CategorySection;
