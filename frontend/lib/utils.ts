import { BASE_URL } from "@/constants";
import { ArticleMetaType, ArticleType, SoftArticleType } from "@/types/article";
import { CategoryLinkType, SoftCategoryType } from "@/types/category";
import axios from "axios";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import qs from "qs";
import { SocialLinkType } from "@/types/social";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function flattenAttributes(data: any): any {
  // Check if data is a plain object; return as is if not
  if (
    typeof data !== "object" ||
    data === null ||
    data instanceof Date ||
    typeof data === "function"
  ) {
    return data;
  }

  // If data is an array, apply flattenAttributes to each element and return as array
  if (Array.isArray(data)) {
    return data.map((item) => flattenAttributes(item));
  }

  // Initialize an object with an index signature for the flattened structure
  let flattened: { [key: string]: any } = {};

  // Iterate over each key in the object
  for (let key in data) {
    // Skip inherited properties from the prototype chain
    if (!data.hasOwnProperty(key)) continue;

    // If the key is 'attributes' or 'data', and its value is an object, merge their contents
    if (
      (key === "attributes" || key === "data") &&
      typeof data[key] === "object" &&
      !Array.isArray(data[key])
    ) {
      Object.assign(flattened, flattenAttributes(data[key]));
    } else {
      // For other keys, copy the value, applying flattenAttributes if it's an object
      flattened[key] = flattenAttributes(data[key]);
    }
  }

  return flattened;
}

export const getSocialsData = async (
  query: string
): Promise<SocialLinkType[]> => {
  const { data } = await axios(`${BASE_URL}/api/socials?${query}`).catch(
    () => ({ data: { data: [] } })
  );
  return flattenAttributes(data.data);
};

export const getCategoriesData = async (
  query: string
): Promise<CategoryLinkType[]> => {
  const { data } = await axios(`${BASE_URL}/api/categories?${query}`).catch(
    () => ({ data: { data: [] } })
  );
  return flattenAttributes(data.data);
};

export const getCategoryData = async (
  categoryId: string,
  query: string
): Promise<
  SoftCategoryType | Pick<SoftCategoryType, "name" | "description">
> => {
  const { data } = await axios(
    `${BASE_URL}/api/categories/${categoryId}?${query}`
  ).catch(() => ({ data: null }));
  return flattenAttributes(data);
};

export const getArticlesData = async (
  query: string
): Promise<{
  data: SoftArticleType[];
}> => {
  const { data } = await axios(`${BASE_URL}/api/articles?${query}`).catch(
    () => ({ data: { data: [] } })
  );
  return flattenAttributes(data);
};

export const getArticleData = async (
  slug: string,
  query: string
): Promise<ArticleType> => {
  const { data } = await axios(
    `${BASE_URL}/api/articles/${slug.split("-").at(-1)}?${query}`
  ).catch(() => ({ data: null }));
  return flattenAttributes(data);
};

export const getArticlesPageData = async (
  categoryId: string,
  currentPage: number
): Promise<{
  data: SoftArticleType[];
  meta: ArticleMetaType;
}> => {
  const articlesPageQuery = qs.stringify({
    sort: ["publishedAt:desc"],
    fields: ["title", "publishedAt", "lead", "slug"],
    filters: {
      categories: {
        id: categoryId,
      },
    },
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
      pageSize: 12,
      page: currentPage,
    },
  });

  const { data } = await axios(
    `${BASE_URL}/api/articles?${articlesPageQuery}`
  ).catch(() => ({ data: { data: [] } }));
  return flattenAttributes(data);
};
