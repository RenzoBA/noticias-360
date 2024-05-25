import { BASE_URL } from "@/constants";
import { flattenAttributes } from "@/lib/utils";
import { SoftCategoryType } from "@/types/category";
import axios from "axios";
import qs from "qs";
import { FC } from "react";
import ArticleCard from "./ArticleCard";

interface ArticlesProps {
  categoryId: string;
  categorySlug: string;
}

const query = qs.stringify({
  fields: [],
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

const getArticlesData = async (categoryId: string) => {
  const { data } = await axios(
    `${BASE_URL}/api/categories/${categoryId}?${query}`
  );

  return flattenAttributes(data) as Pick<SoftCategoryType, "articles">;
};

const Articles: FC<ArticlesProps> = async ({ categoryId, categorySlug }) => {
  const category = await getArticlesData(categoryId);

  return (
    <div className="flex w-full flex-col gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-4">
      {category.articles.data.map((article) => (
        <ArticleCard
          key={article.id}
          categorySlug={categorySlug}
          article={article}
        />
      ))}
    </div>
  );
};

export default Articles;
