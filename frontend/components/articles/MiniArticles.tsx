import qs from "qs";
import { getArticlesData } from "@/lib/utils";
import MiniArticleCard from "./MiniArticleCard";

const miniArticlesQuery = qs.stringify({
  sort: ["publishedAt:desc"],
  fields: ["title", "publishedAt", "slug"],
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
  pagination: {
    start: 3,
    limit: 4,
  },
});

const MiniArticles = async () => {
  const { data } = await getArticlesData(miniArticlesQuery);

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
