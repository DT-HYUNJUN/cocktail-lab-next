'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { CocktailCardType } from '@/lib/api';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { useStore } from '@/lib/store';

interface CocktailCardProps {
  cocktail: CocktailCardType;
}

export function CocktailCard({ cocktail }: CocktailCardProps) {
  const router = useRouter();
  const { isLikedCocktail, toggleLikeCocktail } = useStore();
  const liked = isLikedCocktail(cocktail.idDrink);

  const handleClickCard = () => {
    router.push(`/cocktail/${cocktail.idDrink}`);
  };

  const handleToggleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleLikeCocktail(cocktail);
  };

  return (
    <div
      onClick={handleClickCard}
      className="group pt-6 overflow-hidden rounded-xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)] transition-all duration-200 cursor-pointer select-none relative"
    >
      <div className="relative w-full aspect-3/4 overflow-hidden bg-zinc-100">
        <Image
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="eager"
          width={300}
          height={400}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <button
          type="button"
          onClick={handleToggleLike}
          aria-label={liked ? '좋아요 취소' : '좋아요'}
          className="absolute top-2.5 right-2.5 z-10 p-2 rounded-full backdrop-blur-md bg-white/80 hover:bg-white text-zinc-600 hover:text-red-500 transition-all active:scale-90 shadow-sm"
        >
          <Heart
            className={`size-4 transition-colors ${
              liked ? 'fill-red-500 text-red-500' : 'text-zinc-600'
            }`}
          />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-base font-bold text-black group-hover:text-[#FF6F2C] transition-colors duration-300 truncate mb-1">
          {cocktail.strDrink}
        </h3>
      </div>
    </div>
  );
}

export function CocktailCardSkeleton() {
  return (
    <div className="pt-6 overflow-hidden rounded-xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] select-none">
      <div className="relative w-full aspect-3/4 overflow-hidden bg-zinc-200 animate-pulse" />
      <div className="p-4">
        <div className="h-5 w-3/4 bg-zinc-200 rounded animate-pulse mb-1" />
      </div>
    </div>
  );
}

export default CocktailCard;
