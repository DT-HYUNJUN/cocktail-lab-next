import { CocktailCardSkeleton } from '@/app/components/cocktail-card';

export default function Loading() {
  return (
    <div className="space-y-6">
      {/* 1. 재료 대표 이미지 & 이름 스켈레톤 */}
      <div className="flex flex-col items-center gap-4 px-4 md:px-0 mb-4">
        <div className="size-48 md:size-96 rounded-[20px] bg-[#F7F7F7] flex items-center justify-center p-4 shadow-sm">
          <div className="size-40 md:size-80 bg-zinc-200 rounded-2xl animate-pulse" />
        </div>
        <div className="h-8 md:h-9 w-44 bg-zinc-200 rounded-lg animate-pulse" />
      </div>

      <div className="border-b border-[#dedede] mx-4 md:mx-0" />

      {/* 2. 재료 정보 (Specs Grid) 스켈레톤 */}
      <div className="px-4 md:px-0 space-y-4">
        <div className="h-5 w-16 bg-zinc-200 rounded animate-pulse" />
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {[
            { label: '도수', width: 'w-10' },
            { label: '맛', width: 'w-12' },
            { label: '종류', width: 'w-14' },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 p-4 rounded-[20px] bg-[#F7F7F7]"
            >
              <div className="size-10 rounded-full bg-zinc-200 animate-pulse" />
              <div className="h-3 w-8 bg-zinc-200 rounded animate-pulse" />
              <div
                className={`h-4 ${item.width} bg-zinc-200 rounded animate-pulse`}
              />
            </div>
          ))}
        </div>

        {/* 맛 프로필 상세 칩 스켈레톤 */}
        <div className="p-4 rounded-[20px] bg-[#F7F7F7] space-y-2.5">
          <div className="h-4 w-16 bg-zinc-200 rounded animate-pulse" />
          <div className="flex flex-wrap gap-2">
            <div className="h-7 w-16 bg-zinc-200 rounded-full animate-pulse" />
            <div className="h-7 w-20 bg-zinc-200 rounded-full animate-pulse" />
            <div className="h-7 w-14 bg-zinc-200 rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      <div className="border-b border-[#dedede] mx-4 md:mx-0" />

      {/* 3. 이 재료로 만드는 칵테일 스켈레톤 */}
      <div className="px-4 md:px-0 space-y-4 pt-2">
        <div className="h-5 w-40 bg-zinc-200 rounded animate-pulse" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {[...Array(4)].map((_, i) => (
            <CocktailCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
