'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Heart } from 'lucide-react';
import { useStore } from '@/lib/store';

interface CocktailCardHProps {
  cocktail: {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
    strTags?: string | null;
  };
  isFetching?: boolean;
}

export function CocktailCardH({
  cocktail,
  isFetching = false,
}: CocktailCardHProps) {
  const router = useRouter();
  const { isLikedCocktail, toggleLikeCocktail } = useStore();
  const liked = isLikedCocktail(cocktail.idDrink);

  const handleClickCard = () => {
    router.push(`/cocktail/${cocktail.idDrink}`);
  };

  const handleToggleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleLikeCocktail({
      idDrink: cocktail.idDrink,
      strDrink: cocktail.strDrink,
      strDrinkThumb: cocktail.strDrinkThumb,
      strTags: cocktail.strTags,
    });
  };

  const tags = cocktail.strTags?.split(',').filter(Boolean) || [];

  return (
    <div
      onClick={handleClickCard}
      className="rounded-[20px] bg-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.3)] transition-shadow duration-200 cursor-pointer overflow-hidden"
    >
      <div className="flex items-center gap-4 p-0">
        <div className="size-32 shrink-0 overflow-hidden rounded-[20px] bg-zinc-100">
          {isFetching ? (
            <div className="size-full animate-pulse bg-zinc-200" />
          ) : (
            <Image
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
              width={128}
              height={128}
              className="size-full object-cover"
              loading="eager"
            />
          )}
        </div>

        <div className="flex flex-col justify-center gap-1.5 py-2 pr-2 min-w-0 flex-1">
          <div className="flex items-center flex-wrap gap-2 pr-2">
            {isFetching ? (
              <div className="h-5 w-16 animate-pulse bg-zinc-200 rounded-full" />
            ) : (
              tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#FF6F2C] text-white"
                >
                  {tag}
                </span>
              ))
            )}
          </div>

          {isFetching ? (
            <div className="h-7 w-32 animate-pulse bg-zinc-200 rounded mt-1" />
          ) : (
            <h3 className="text-xl sm:text-2xl font-bold text-black truncate tracking-tight">
              {cocktail.strDrink}
            </h3>
          )}
        </div>

        {!isFetching && (
          <div className="pr-4 shrink-0">
            <button
              type="button"
              onClick={handleToggleLike}
              aria-label={liked ? '좋아요 취소' : '좋아요'}
              className="p-2.5 rounded-full bg-zinc-50 hover:bg-zinc-100 text-zinc-500 hover:text-red-500 transition-all active:scale-90"
            >
              <Heart
                className={`size-5 transition-colors ${
                  liked ? 'fill-red-500 text-red-500' : 'text-zinc-400'
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export function CocktailCardHSkeleton() {
  return (
    <div className="rounded-[20px] bg-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden select-none">
      <div className="flex items-center gap-4 p-0">
        <div className="size-32 shrink-0 overflow-hidden rounded-[20px] bg-zinc-200 animate-pulse" />

        <div className="flex flex-col justify-center gap-2 py-2 pr-4 min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <div className="h-5 w-16 bg-zinc-200 rounded-full animate-pulse" />
            <div className="h-5 w-12 bg-zinc-200 rounded-full animate-pulse" />
          </div>

          <div className="h-7 w-40 sm:w-56 bg-zinc-200 rounded-lg animate-pulse mt-1" />
        </div>
      </div>
    </div>
  );
}

export default CocktailCardH;
