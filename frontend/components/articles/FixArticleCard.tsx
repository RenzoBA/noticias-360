import qs from "qs";
import { BASE_URL } from "@/constants";
import Link from "next/link";
import { getArticlesData } from "@/lib/utils";
import { SoftArticleType } from "@/types/article";

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

const FixArticleCard = async () => {
  const { data } = (await getArticlesData(fixArticleQuery)) as {
    data: SoftArticleType[];
  };
  const article = data[0];

  const date = new Date(data[0].publishedAt);

  return (
    <article className="flex flex-col gap-4">
      <Link
        href={`${article.categories.data[0].slug}/${article.slug}-${article.id}`}
        className="relative aspect-video w-full"
        prefetch={false}
      >
        <img
          src={BASE_URL + article.cover.url}
          className="absolute inset-0 h-full w-full object-cover transition-all duration-300 hover:brightness-90"
          alt={article.cover.alternativeText}
        />
      </Link>
      <div className="flex w-full flex-col items-center gap-2 px-8 text-center">
        <div className="flex flex-nowrap gap-2 text-xs font-medium uppercase text-custom-blue">
          {article.categories.data.map((category) => (
            <Link
              key={category.id}
              href={`/${category.slug}?page=1`}
              className="whitespace-nowrap hover:underline"
              prefetch={false}
            >
              {category.name}
            </Link>
          ))}
        </div>
        <Link
          href={`${article.categories.data[0].slug}/${article.slug}-${article.id}`}
          className="line-clamp-4 text-2xl font-bold hover:underline lg:text-4xl"
          prefetch={false}
        >
          {article.title}
        </Link>
        <p className="line-clamp-5 text-lg font-normal leading-6 lg:text-xl">
          {article.lead}
        </p>
        <div className="mt-1 flex flex-col gap-1 text-xs font-medium text-neutral-600">
          <Link href="/" className="uppercase hover:underline" prefetch={false}>
            renzo bocanegra
          </Link>
          <time datatype={article.publishedAt}>
            {date.toLocaleDateString("es-ES", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </time>
        </div>
      </div>
    </article>
  );
};

export default FixArticleCard;
