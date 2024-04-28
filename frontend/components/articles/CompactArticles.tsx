import { getArticlesData } from "@/lib/utils";
import qs from "qs";
import CompactArticleCard from "./CompactArticleCard";
import { SoftArticleType } from "@/types/article";

const compactArticlesQuery = qs.stringify({
  sort: ["publishedAt:desc"],
  fields: ["title", "slug", "publishedAt"],
  populate: {
    cover: {
      fields: ["url", "alternativeText"],
    },
    categories: {
      fields: ["name", "slug"],
    },
  },
  pagination: {
    start: 1,
    limit: 2,
  },
});

const CompactArticles = async () => {
  const { data } = (await getArticlesData(compactArticlesQuery)) as {
    data: SoftArticleType[];
  };

  return (
    <>
      {data.map((article) => (
        <CompactArticleCard
          key={article.id}
          categorySlug={article.categories.data[0].slug}
          article={article}
        />
      ))}
    </>
  );
};

export default CompactArticles;
