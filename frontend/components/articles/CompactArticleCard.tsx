import { BASE_URL } from "@/constants";
import { SoftArticleType } from "@/types/article";
import Link from "next/link";
import { FC } from "react";

interface CompactArticleCardProps {
  categorySlug: string;
  article: SoftArticleType;
}

const CompactArticleCard: FC<CompactArticleCardProps> = ({
  categorySlug,
  article,
}) => {
  const date = new Date(article.publishedAt);

  return (
    <article className="flex flex-col gap-4 pt-4">
      <Link
        href={`${categorySlug}/${article.slug}-${article.id}`}
        className="relative aspect-3/2 w-full"
        prefetch={false}
      >
        <img
          src={BASE_URL + article.cover.url}
          className="absolute inset-0 h-full w-full object-cover transition-all duration-300 hover:brightness-90"
          alt={article.cover.alternativeText}
        />
      </Link>
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
          className="line-clamp-4 text-2xl font-bold hover:underline"
          prefetch={false}
        >
          {article.title}
        </Link>
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

export default CompactArticleCard;
