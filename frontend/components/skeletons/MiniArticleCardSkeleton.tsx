export const MiniArticleCardSkeleton = () => (
  <div className="flex flex-row gap-4 pt-4">
    <div className="flex w-full flex-col items-start gap-2">
      <div className="flex flex-nowrap gap-2">
        <div className="h-4 w-16 animate-pulse rounded-sm bg-muted" />
        <div className="h-4 w-16 animate-pulse rounded-sm bg-muted" />
      </div>
      <div className="flex w-full flex-col gap-2">
        <div className="h-8 w-full animate-pulse rounded-sm bg-muted" />
        <div className="h-8 w-full animate-pulse rounded-sm bg-muted" />
      </div>
      <div className="mt-1 flex flex-col gap-1">
        <div className="h-4 w-24 animate-pulse rounded-sm bg-muted" />
        <div className="h-4 w-16 animate-pulse rounded-sm bg-muted" />
      </div>
    </div>
    <div className="relative aspect-video w-full">
      <div className="absolute inset-0 h-full w-full animate-pulse bg-muted" />
    </div>
  </div>
);

export const MiniArticlesSkeleton = () => (
  <>
    <MiniArticleCardSkeleton />
    <MiniArticleCardSkeleton />
    <MiniArticleCardSkeleton />
    <MiniArticleCardSkeleton />
  </>
);
