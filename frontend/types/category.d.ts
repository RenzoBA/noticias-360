import { SoftArticleType } from "./article";

export type CategoryName =
  | "sociedad"
  | "politica"
  | "entrevistas"
  | "palco-360";

export type CategoryLinkType = {
  id: number;
  name: string;
  slug: string;
};

export type SoftCategoryType = {
  id: number;
  name: string;
  slug: string;
  description?: string;
  articles: {
    data: SoftArticleType[];
  };
};
