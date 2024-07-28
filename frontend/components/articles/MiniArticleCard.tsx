import { BASE_URL } from "@/constants";
import { SoftArticleType } from "@/types/article";
import Link from "next/link";
import { FC } from "react";

interface MiniArticleCardProps {
  categorySlug: string;
  article: SoftArticleType;
}

const MiniArticleCard: FC<MiniArticleCardProps> = ({
  categorySlug,
  article,
}) => {
  const date = new Date(article.publishedAt);

  return (
    <article className="flex flex-row gap-4 text-balance pt-4">
      <div className="flex w-full flex-col items-start gap-2">
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
          href={`${categorySlug}/${article.slug}-${article.id}`}
          className="line-clamp-4 text-base font-bold hover:underline"
          prefetch={false}
        >
          {article.title}
        </Link>
        <div className="mt-auto flex flex-row items-center gap-2">
          <img
            src={`${BASE_URL + article.user.photo.formats.thumbnail.url}`}
            alt={article.user.photo.alternativeText || ""}
            className="h-10 w-10 rounded-full"
          />
          <div className="mt-1 flex flex-col gap-1 text-xs font-medium text-neutral-600">
            <p
              // href="/"
              // className="uppercase hover:underline"
              // prefetch={false}
              className="uppercase"
            >
              {article.user.username}
            </p>
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
      <Link
        href={`${categorySlug}/${article.slug}-${article.id}`}
        className="relative w-40"
        prefetch={false}
      >
        <img
          src={BASE_URL + article.cover.formats.small.url}
          className="absolute inset-0 h-full w-full object-cover transition-all duration-300 hover:brightness-90"
          alt={article.cover.alternativeText}
        />
      </Link>
    </article>
  );
};

export default MiniArticleCard;
