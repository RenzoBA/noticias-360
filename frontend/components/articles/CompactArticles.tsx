import { getArticlesData } from "@/lib/utils";
import qs from "qs";
import CompactArticleCard from "./CompactArticleCard";

const compactArticlesQuery = qs.stringify({
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
    start: 1,
    limit: 2,
  },
});

const CompactArticles = async () => {
  const { data } = await getArticlesData(compactArticlesQuery);

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
