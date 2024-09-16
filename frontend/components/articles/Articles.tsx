import { getArticlesPageData } from "@/lib/utils";
import { FC } from "react";
import ArticleCard from "./ArticleCard";
import { PaginationController } from "../PaginationController";

interface ArticlesProps {
  currentPage: number;
  categoryId: string;
  categorySlug: string;
}

const Articles: FC<ArticlesProps> = async ({
  currentPage,
  categoryId,
  categorySlug,
}) => {
  const { data, meta } = await getArticlesPageData(categoryId, currentPage);

  const pageCount = meta.pagination.pageCount;

  return (
    <>
      <div className="flex w-full flex-col gap-10 sm:grid sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
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
