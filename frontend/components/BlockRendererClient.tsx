"use client";

import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import Link from "next/link";

export default function BlockRendererClient({
  content,
}: {
  readonly content: BlocksContent;
}) {
  if (!content) return null;
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: ({ children }) => (
          <p className="max-w-prose leading-8">{children}</p>
        ),
        heading: ({ children, level }) => {
          switch (level) {
            case 1:
              return <p className="text-[38px]">{children}</p>;
            case 2:
              return <p className="text-[35px]">{children}</p>;
            case 3:
              return <p className="text-[32px]">{children}</p>;
            case 4:
              return <p className="text-[29px]">{children}</p>;
            case 5:
              return <p className="text-[26px]">{children}</p>;
            case 6:
              return <p className="text-[23px]">{children}</p>;
            default:
              return <p className="text-xl">{children}</p>;
          }
        },
        link: ({ children, url }) => (
          <Link href={url} className="text-custom-blue hover:underline">
            {children}
          </Link>
        ),
        list: ({ children, format }) => {
          if (format === "ordered") {
            return <p className="list-decimal">{children}</p>;
          } else if (format === "unordered") {
            return <p className="list-disc">{children}</p>;
          }
        },
        quote: ({ children }) => (
          <div className="border-l-2 border-custom-blue pl-5 italic leading-8">
            {children}
          </div>
        ),
        image: ({ image }) => {
          return (
            <figure>
              <img src={image.url} alt={image.alternativeText || ""} />
              <figcaption className="mt-2 text-sm text-neutral-600">
                {image.caption || ""}
              </figcaption>
            </figure>
          );
        },
      }}
    />
  );
}
