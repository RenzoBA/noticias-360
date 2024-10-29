import qs from "qs";
import { FC, Suspense } from "react";
import { getArticleData } from "@/lib/utils";
import Link from "next/link";
import CategorySection from "@/components/home-page/CategorySection";
import { Metadata } from "next";
import BlockRendererClient from "@/components/BlockRendererClient";
import ArticleActions from "@/components/articles/ArticleActions";

interface Props {
  params: { category: string; article: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleData(params.article, query);

  return {
    title: article.title,
    description: article.lead,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.lead,
      publishedTime: article.publishedAt,
      images: [
        {
          url: article.cover.url,
          width: 800,
          height: 600,
          alt: article.cover.alternativeText || "",
        },
      ],
    },
  };
}

const query = qs.stringify({
  fields: ["title", "publishedAt", "lead", "content"],
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
      fields: ["name", "slug", "description"],
    },
    cover: {
      fields: ["url", "alternativeText", "caption"],
    },
  },
});

const page: FC<Props> = async ({ params }) => {
  const article = await getArticleData(params.article, query);

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
        <div className="mt-4 flex w-full flex-row items-center justify-between text-neutral-600">
          <div className="flex flex-row items-center gap-2">
            {/* <img
              src={article.user.photo.formats.thumbnail.url}
              alt={article.user.photo.alternativeText || ""}
              className="h-12 w-12 rounded-full"
            /> */}
            <div className="flex flex-col gap-2 text-xs font-medium">
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
          <ArticleActions />
        </div>
      </div>
      <article className="mx-auto max-w-3xl pt-8">
        <figure>
          <img
            src={article.cover.url}
            alt={article.cover.alternativeText || ""}
            className="w-full"
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
        <Suspense>
          {article.categories.data.map((category) => (
            <CategorySection key={category.id} id={category.id} />
          ))}
        </Suspense>
      </div>
    </main>
  );
};

export default page;
