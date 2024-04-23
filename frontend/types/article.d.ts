export type SoftArticleType = {
  id: number;
  title: string;
  lead?: string;
  slug: string;
  publishedAt: string;
  cover: {
    id: number;
    url: string;
    alternativeText: string;
  };
  categories: {
    data: {
      id: number;
      slug: string;
      name: string;
    }[];
  };
};

export type ArticleType = {
  id: number;
  title: string;
  publishedAt: string;
  lead: string;
  cover: {
    id: number;
    url: string;
    alternativeText: string;
    caption: string;
  };
  content: RootNode[];
  categories: {
    data: {
      id: number;
      name: string;
      slug: string;
      color: string;
    }[];
  };
};
