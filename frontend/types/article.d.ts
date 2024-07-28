type User = {
  id: number;
  username: string;
  photo: {
    id: number;
    alternativeText: string;
    formats: {
      thumbnail: {
        url: string;
      };
    };
  };
};

export type SoftArticleType = {
  id: number;
  title: string;
  lead?: string;
  slug: string;
  publishedAt: string;
  cover: {
    id: number;
    alternativeText: string;
    formats: {
      small: {
        url: string;
      };
      large: {
        url: string;
      };
    };
  };
  categories: {
    data: {
      id: number;
      slug: string;
      name: string;
    }[];
  };
  user: User;
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
    }[];
  };
  user: User;
};

export type ArticleMetaType = {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
};
