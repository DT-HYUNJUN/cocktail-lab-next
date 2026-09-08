export default function Loading() {
  return (
    <div className="px-4 md:px-0 py-2 sm:py-6">
      <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-8 md:gap-16">
        {/* 1. 칵테일 이미지 (Image Skeleton) */}
        <div className="flex flex-col items-center shrink-0">
          <div className="w-full md:w-100 aspect-square overflow-hidden rounded-[24px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] bg-zinc-200 animate-pulse" />
        </div>

        {/* 2. 칵테일 정보 & 재료 & 레시피 (Content Skeleton) */}
        <div className="flex flex-col gap-6 flex-1 max-w-xl w-full">
          {/* Header info */}
          <div>
            {/* Tags skeleton */}
            <div className="mb-3 flex flex-wrap gap-2">
              <div className="h-6 w-16 bg-zinc-200 rounded-full animate-pulse" />
              <div className="h-6 w-20 bg-zinc-200 rounded-full animate-pulse" />
            </div>

            {/* Title & Share button skeleton */}
            <div className="flex items-center justify-between mb-5">
              <div className="h-9 w-3/5 bg-zinc-200 rounded-lg animate-pulse" />
              <div className="size-8 bg-zinc-200 rounded-full animate-pulse" />
            </div>

            {/* Glass info skeleton */}
            <div className="flex gap-2">
              <div className="flex items-center gap-2">
                <div className="size-10 rounded-full bg-zinc-200 animate-pulse shrink-0" />
                <div className="flex flex-col gap-1.5 py-0.5">
                  <div className="h-3 w-10 bg-zinc-200 rounded animate-pulse" />
                  <div className="h-3.5 w-24 bg-zinc-200 rounded animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* 재료 Section skeleton */}
          <div className="mb-2">
            <div className="h-6 w-14 bg-zinc-200 rounded animate-pulse mb-3" />
            <div className="rounded-[24px] p-5 bg-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] border border-zinc-100">
              <ul className="list-none p-0 m-0 divide-y divide-zinc-100">
                {[1, 2, 3, 4].map((i) => (
                  <li
                    key={i}
                    className="flex justify-between items-center py-2.5 first:pt-0 last:pb-0"
                  >
                    <div className="flex items-center gap-2">
                      <div className="size-8 rounded-full bg-zinc-200 animate-pulse shrink-0" />
                      <div className="h-4 w-28 bg-zinc-200 rounded animate-pulse" />
                    </div>
                    <div className="h-4 w-16 bg-zinc-200 rounded animate-pulse" />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 만드는 방법 (Instructions) Section skeleton */}
          <div>
            <div className="h-6 w-24 bg-zinc-200 rounded animate-pulse mb-3" />
            <div className="rounded-[24px] p-5 bg-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] border border-zinc-100">
              <ol className="list-none p-0 m-0 space-y-3">
                {[1, 2].map((i) => (
                  <li key={i} className="flex items-start gap-3.5">
                    <div className="size-8 rounded-full bg-zinc-200 animate-pulse shrink-0 mt-0.5" />
                    <div className="flex-1 space-y-2 pt-1.5">
                      <div className="h-3.5 bg-zinc-200 rounded animate-pulse w-full" />
                      <div className="h-3.5 bg-zinc-200 rounded animate-pulse w-4/5" />
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
