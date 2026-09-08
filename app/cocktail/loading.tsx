import { CocktailCardSkeleton } from '@/app/components/cocktail-card';

export default function Loading() {
  return (
    <div className="space-y-6">
      {/* 1. PC Wide Filter Section Skeleton */}
      <div className="hidden md:block border border-[#0000001f] border-b-0 mb-8">
        {[
          { label: '카테고리' },
          { label: '글래스' },
          { label: '재료' },
          { label: '알코올' },
        ].map((filter, i) => (
          <div
            key={i}
            className="grid grid-cols-[100px_1fr] border-b border-[#0000001f]"
          >
            <div className="flex items-center justify-center py-2.5 px-2 border-r border-[#0000001f] bg-zinc-50/50 text-xs font-semibold text-zinc-700">
              {filter.label}
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 p-2.5">
              {[...Array(6)].map((_, idx) => (
                <div
                  key={idx}
                  className="h-4 bg-zinc-200 rounded animate-pulse"
                  style={{ width: `${40 + (idx % 3) * 16}px` }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 2. Mobile Filter Tabs Skeleton */}
      <div className="md:hidden px-4 flex gap-2">
        {['카테고리', '글래스', '재료', '알코올'].map((tab, i) => (
          <div
            key={i}
            className={`h-9 px-4 rounded-full flex items-center justify-center text-xs font-semibold ${
              i === 0
                ? 'bg-[#E54900] text-white'
                : 'bg-zinc-100 text-zinc-400 animate-pulse'
            }`}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* 3. Mobile Filter Circle Icons Skeleton */}
      <div className="md:hidden relative px-4 py-4 border-b border-[#ebebeb]">
        <div className="grid grid-cols-4 gap-y-5 gap-x-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className="size-13 rounded-full bg-zinc-200 animate-pulse border-2 border-[#dfdfdf]" />
              <div className="h-3 w-10 bg-zinc-200 rounded animate-pulse mt-1" />
            </div>
          ))}
        </div>
      </div>

      {/* 4. Search Filter Input Skeleton */}
      <div className="flex justify-end px-4 md:px-0">
        <div className="h-9 bg-zinc-100 rounded-xl w-full sm:w-72 animate-pulse" />
      </div>

      {/* 5. Cocktails List Grid Skeleton */}
      <div className="px-4 md:px-0">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {[...Array(8)].map((_, i) => (
            <CocktailCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
