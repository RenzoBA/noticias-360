export const ArticleCardSkeleton = () => (
  <div className="flex flex-col gap-4">
    <div className="relative aspect-3/2 w-full">
      <div className="absolute inset-0 h-full w-full animate-pulse bg-muted" />
    </div>
    <div className="flex w-full flex-col items-start gap-4">
      <div className="flex flex-nowrap gap-2">
        <div className="h-4 w-16 animate-pulse rounded-sm bg-muted" />
        <div className="h-4 w-16 animate-pulse rounded-sm bg-muted" />
      </div>
      <div className="flex w-full flex-col gap-2">
        <div className="h-8 w-full animate-pulse rounded-sm bg-muted" />
        <div className="h-8 w-full animate-pulse rounded-sm bg-muted" />
      </div>
      <div className="flex w-3/4 flex-col gap-2">
        <div className="h-6 w-full animate-pulse rounded-sm bg-muted" />
        <div className="h-6 w-full animate-pulse rounded-sm bg-muted" />
        <div className="h-6 w-full animate-pulse rounded-sm bg-muted" />
      </div>
      <div className="mt-1 flex flex-col gap-1">
        <div className="h-4 w-24 animate-pulse rounded-sm bg-muted" />
        <div className="h-4 w-16 animate-pulse rounded-sm bg-muted" />
      </div>
    </div>
  </div>
);

export const ArticlesSkeleton = () => (
  <>
    <ArticleCardSkeleton />
    <ArticleCardSkeleton />
    <ArticleCardSkeleton />
    <ArticleCardSkeleton />
  </>
);
