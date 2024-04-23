import qs from "qs";
import { flattenAttributes } from "@/lib/utils";
import axios from "axios";
import { BASE_URL } from "@/constants";
import { SoftArticleType } from "@/types/article";
import CompactArticleCard from "../articles/CompactArticleCard";
import FixArticleCard from "../articles/FixArticleCard";
import MiniArticleCard from "../articles/MiniArticleCard";

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

const fixArticleQuery = qs.stringify({
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
  pagination: {
    start: 0,
    limit: 1,
  },
});

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

const getArticlesData = async (query: string) => {
  const { data } = await axios(`${BASE_URL}/api/articles?${query}`);
  return flattenAttributes(data) as { data: SoftArticleType[] };
};

const MainSection = async () => {
  const { data: compactArticles } = await getArticlesData(compactArticlesQuery);
  const { data: fixArticle } = await getArticlesData(fixArticleQuery);
  const { data: miniArticles } = await getArticlesData(miniArticlesQuery);

  return (
    <div className="grid w-full grid-cols-1 grid-rows-1 gap-8 lg:grid-cols-12">
      <div className="order-2 col-span-full -mt-4 flex flex-col gap-4 divide-y lg:order-first lg:col-span-3">
        {compactArticles.map((article) => (
          <CompactArticleCard
            key={article.id}
            categorySlug={article.categories.data[0].slug}
            article={article}
          />
        ))}
      </div>
      <div className="order-first col-span-full lg:order-2 lg:col-span-6">
        <FixArticleCard
          categorySlug={fixArticle[0].categories.data[0].slug}
          article={fixArticle[0]}
        />
      </div>
      <div className="order-3 col-span-full lg:col-span-3">
        <section className="flex flex-col gap-4 divide-y">
          <h2 className="text-lg font-bold">Novedades</h2>
          <div className="flex flex-col gap-4 divide-y">
            {miniArticles.map((article) => (
              <MiniArticleCard
                key={article.id}
                categorySlug={article.categories.data[0].slug}
                article={article}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainSection;
