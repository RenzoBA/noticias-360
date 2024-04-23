import qs from "qs";
import axios from "axios";
import { FC } from "react";
import { flattenAttributes } from "@/lib/utils";
import { ArticleType } from "@/types/article";
import Link from "next/link";
import CategorySection from "@/components/home-page/CategorySection";
import { Metadata } from "next";
import BlockRendererClient from "@/components/BlockRendererClient";

interface Props {
  params: { category: string; article: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data } = await axios(
    `${BASE_URL}/api/articles/${params.article.split("-").at(-1)}`
  );

  return {
    title: data.data.attributes.title,
  };
}

const BASE_URL = process.env.BASE_URL!;

const query = qs.stringify({
  fields: ["title", "publishedAt", "lead", "content"],
  populate: {
    categories: {
      fields: ["name", "slug"],
    },
    cover: {
      fields: ["url", "alternativeText", "caption"],
    },
  },
});

const getArticleData = async (slug: string) => {
  const { data } = await axios(
    `${BASE_URL}/api/articles/${slug.split("-").at(-1)}?${query}`
  );
  return flattenAttributes(data) as ArticleType;
};

const page: FC<Props> = async ({ params }) => {
  const article = await getArticleData(params.article);

  const date = new Date(article.publishedAt);

  return (
    <main className="mx-auto flex max-w-[1400px] flex-col items-start justify-center px-5 py-8 lg:px-8">
      <div className="mx-auto max-w-3xl border-b pb-8">
        <div className="flex flex-nowrap gap-2 text-xs font-medium uppercase text-custom-blue">
          {article.categories.data.map((category) => (
            <Link
              key={category.id}
              href={`/${category.slug}`}
              className="whitespace-nowrap hover:underline"
              prefetch={false}
            >
              {category.name}
            </Link>
          ))}
        </div>
        <h1 className="mt-2 text-3xl font-bold lg:text-5xl lg:font-semibold">
          {article.title}
        </h1>
        <h2 className="mt-4 text-xl lg:text-2xl">{article.lead}</h2>
        <div className="mt-4 flex flex-col gap-2 text-xs font-medium text-neutral-600">
          <Link href="/" className="uppercase hover:underline" prefetch={false}>
            renzo bocanegra
          </Link>
          <time datatype={article.publishedAt}>
            {date.toLocaleDateString("es-ES", {
              minute: "2-digit",
              hour: "2-digit",
              day: "2-digit",
              month: "long",
              year: "numeric",
              hour12: true,
            })}
          </time>
        </div>
      </div>
      <article className="mx-auto max-w-3xl pt-8">
        <figure>
          <img
            src={`${BASE_URL + article.cover.url}`}
            alt={article.cover.alternativeText || ""}
          />
          <figcaption className="mt-2 text-sm text-neutral-600">
            {article.cover.caption || ""}
          </figcaption>
        </figure>
        <div className="mt-8 flex flex-col gap-8 text-xl">
          <BlockRendererClient content={article.content} />
        </div>
      </article>
      <div>
        {article.categories.data.map((category) => (
          <CategorySection key={category.id} id={category.id} />
        ))}
      </div>
    </main>
  );
};

export default page;
