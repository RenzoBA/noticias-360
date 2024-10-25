import qs from "qs";
import { getCategoryData } from "@/lib/utils";
import { SoftCategoryType } from "@/types/category";
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
      fields: ["title", "publishedAt", "lead", "slug"],
      filters: {
        publishedAt: {
          $notNull: true,
        },
      },
      populate: {
        user: {
          fields: ["username"],
          populate: {
            photo: {
              fields: ["alternativeText", "formats"],
            },
          },
        },
        categories: {
          fields: ["name", "slug"],
        },
        cover: {
          fields: ["alternativeText", "formats"],
        },
      },
      limit: 4,
    },
  },
});

const CategorySection: FC<CategorySectionProps> = async ({ id }) => {
  const categoryId = id.toString();

  const category = (await getCategoryData(
    categoryId,
    query
  )) as SoftCategoryType;

  if (!category) return;

  return (
    <section className="mt-16 flex w-full flex-col gap-4 divide-y divide-primary">
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
      <div className="flex flex-col gap-10 pt-6 sm:grid sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
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
