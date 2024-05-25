import { BASE_URL } from "@/constants";
import { flattenAttributes } from "@/lib/utils";
import axios from "axios";
import qs from "qs";
import { FC } from "react";
import ArticleCard from "./ArticleCard";
import { PaginationController } from "../PaginationController";
import { ArticleMetaType, SoftArticleType } from "@/types/article";

interface ArticlesProps {
  currentPage: number;
  categoryId: string;
  categorySlug: string;
}

const getArticlesData = async (categoryId: string, currentPage: number) => {
  const query = qs.stringify({
    sort: ["publishedAt:desc"],
    fields: ["title", "lead", "slug", "publishedAt"],
    filters: {
      categories: {
        id: categoryId,
      },
    },
    populate: {
      cover: {
        fields: ["url", "alternativeText"],
      },
      categories: {
        fields: ["name", "slug"],
      },
    },
    pagination: {
      pageSize: 12,
      page: currentPage,
    },
  });

  const { data } = await axios(`${BASE_URL}/api/articles?${query}`);

  return flattenAttributes(data) as {
    data: SoftArticleType[];
    meta: ArticleMetaType;
  };
};

const Articles: FC<ArticlesProps> = async ({
  currentPage,
  categoryId,
  categorySlug,
}) => {
  const { data, meta } = await getArticlesData(categoryId, currentPage);

  const pageCount = meta.pagination.pageCount;

  return (
    <>
      <div className="flex w-full flex-col gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-4">
        {data.map((article) => (
          <ArticleCard
            key={article.id}
            categorySlug={categorySlug}
            article={article}
          />
        ))}
      </div>
      <PaginationController pageCount={pageCount} />
    </>
  );
};

export default Articles;
