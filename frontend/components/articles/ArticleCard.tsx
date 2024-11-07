import { SoftArticleType } from "@/types/article";
import Link from "next/link";
import { FC } from "react";

interface ArticleCardProps {
  categorySlug: string;
  article: SoftArticleType;
}

const ArticleCard: FC<ArticleCardProps> = ({ categorySlug, article }) => {
  const date = new Date(article.publishedAt);
  date.setHours(date.getHours() - 5);

  return (
    <article className="flex flex-col gap-4 text-balance">
      <Link
        href={`/${categorySlug}/${article.slug}-${article.id}`}
        className="relative aspect-3/2 w-full"
        prefetch={false}
      >
        <img
          src={article.cover.formats.small.url}
          className="absolute inset-0 h-full w-full object-cover transition-all duration-300 hover:brightness-90"
          alt={article.cover.alternativeText}
        />
      </Link>
      <div className="flex w-full flex-col items-start gap-2">
        <div className="flex flex-nowrap gap-2 text-xs font-medium uppercase text-custom-blue">
          {article.categories.data
            ? article.categories.data.map((category) => (
                <Link
                  key={category.id}
                  href={`/${category.slug}?page=1`}
                  className="whitespace-nowrap hover:underline"
                  prefetch={false}
                >
                  {category.name}
                </Link>
              ))
            : " "}
        </div>
        <Link
          href={`/${categorySlug}/${article.slug}-${article.id}`}
          className="line-clamp-5 text-2xl font-bold tracking-[-0.02em] hover:underline"
          prefetch={false}
        >
          {article.title}
        </Link>
        <p className="line-clamp-5 text-lg font-normal leading-6">
          {article.lead}
        </p>
        <div className="mt-2 flex flex-row items-center gap-2">
          {/* <img
            src={article.user.photo.formats.thumbnail.url}
            alt={article.user.photo.alternativeText || ""}
            className="h-10 w-10 rounded-full"
          /> */}
          <div className="mt-1 flex flex-col gap-1 text-xs font-medium text-neutral-600">
            {/* <p
              // href="/"
              // className="uppercase hover:underline"
              // prefetch={false}
              className="uppercase"
            >
              {article.user.username}
            </p> */}
            <time datatype={article.publishedAt}>
              {date.toLocaleDateString("es-ES", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
