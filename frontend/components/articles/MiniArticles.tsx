import qs from "qs";
import { getArticlesData } from "@/lib/utils";
import MiniArticleCard from "./MiniArticleCard";
import { SoftArticleType } from "@/types/article";

const miniArticlesQuery = qs.stringify({
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
    start: 3,
    limit: 4,
  },
});

const MiniArticles = async () => {
  const { data } = (await getArticlesData(miniArticlesQuery)) as {
    data: SoftArticleType[];
  };

  return (
    <>
      {data.map((article) => (
        <MiniArticleCard
          key={article.id}
          categorySlug={article.categories.data[0].slug}
          article={article}
        />
      ))}
    </>
  );
};

export default MiniArticles;
