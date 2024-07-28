export const FixArticleCardSkeleton = () => (
  <div className="flex flex-col gap-4">
    <div className="relative aspect-3/2 w-full">
      <div className="absolute inset-0 h-full w-full animate-pulse bg-muted" />
    </div>
    <div className="flex w-full flex-col items-center gap-2 px-8 text-center">
      <div className="flex flex-nowrap gap-2">
        <div className="h-4 w-16 animate-pulse rounded-sm bg-muted" />
        <div className="h-4 w-16 animate-pulse rounded-sm bg-muted" />
      </div>
      <div className="flex w-full flex-col gap-2">
        <div className="h-10 w-full animate-pulse rounded-sm bg-muted" />
        <div className="h-10 w-full animate-pulse rounded-sm bg-muted" />
      </div>
      <div className="mt-1 flex w-full flex-col gap-2">
        <div className="h-6 w-full animate-pulse rounded-sm bg-muted" />
        <div className="h-6 w-full animate-pulse rounded-sm bg-muted" />
        <div className="h-6 w-full animate-pulse rounded-sm bg-muted" />
        <div className="h-6 w-full animate-pulse rounded-sm bg-muted" />
      </div>
      <div className="mt-1 flex flex-col items-center gap-1">
        <div className="h-4 w-24 animate-pulse rounded-sm bg-muted" />
        <div className="h-4 w-16 animate-pulse rounded-sm bg-muted" />
      </div>
    </div>
  </div>
);
