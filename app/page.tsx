'use client';

import React, { useState, useEffect } from 'react';
import { RefreshCw, Heart } from 'lucide-react';
import {
  getRandomCocktail,
  getCocktailByFilter,
  CocktailCardType,
} from '@/lib/api';
import { categoryList } from '@/lib/filters';
import {
  CocktailCardH,
  CocktailCardHSkeleton,
} from '@/app/components/cocktail-card-h';
import {
  CocktailCard,
  CocktailCardSkeleton,
} from '@/app/components/cocktail-card';
import { useStore } from '@/lib/store';

export default function HomePage() {
  const { randomCocktail, setRandomCocktail, likedCocktails } = useStore();
  const [currentCategory, setCurrentCategory] =
    useState<string>('Ordinary_Drink');
  const [filterCocktails, setFilterCocktails] = useState<CocktailCardType[]>(
    []
  );
  const [isFetchingRandom, setIsFetchingRandom] = useState<boolean>(false);
  const [isFetchingCategory, setIsFetchingCategory] = useState<boolean>(false);

  // Fetch Random Cocktail
  const fetchRandom = async () => {
    setIsFetchingRandom(true);
    try {
      const data = await getRandomCocktail();
      setRandomCocktail(data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsFetchingRandom(false);
    }
  };

  useEffect(() => {
    if (!randomCocktail) {
      fetchRandom();
    }
  }, []);

  // Fetch Category Cocktails
  useEffect(() => {
    let isMounted = true;
    const fetchCategory = async () => {
      setIsFetchingCategory(true);
      try {
        const list = await getCocktailByFilter('c', currentCategory);
        if (isMounted) {
          setFilterCocktails(list);
        }
      } catch (e) {
        console.error(e);
      } finally {
        if (isMounted) setIsFetchingCategory(false);
      }
    };
    fetchCategory();
    return () => {
      isMounted = false;
    };
  }, [currentCategory]);

  return (
    <div className="space-y-8">
      {/* 1. 오늘의 추천 (Random Cocktail Section) */}
      <section className="px-4 md:px-0">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight">
            오늘의 추천
          </h2>
          <button
            onClick={fetchRandom}
            disabled={isFetchingRandom}
            className="flex items-center gap-1 text-sm font-semibold text-[#FF6F2C] hover:text-[#E54900] disabled:opacity-50 transition-colors"
          >
            <RefreshCw
              className={`size-3.5 ${isFetchingRandom ? 'animate-spin' : ''}`}
            />
            <span>새로고침</span>
          </button>
        </div>

        {isFetchingRandom || !randomCocktail ? (
          <CocktailCardHSkeleton />
        ) : (
          <CocktailCardH
            cocktail={{
              idDrink: randomCocktail.idDrink,
              strDrink: randomCocktail.strDrink,
              strDrinkThumb: randomCocktail.strDrinkThumb,
              strTags: randomCocktail.strTags,
            }}
          />
        )}
      </section>

      {/* Divider */}
      <div className="border-b border-[#ebebeb] mx-4 md:mx-0" />

      {/* 2. 좋아요한 칵테일 (Liked Cocktails Section) */}
      <section className="px-4 md:px-0 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight">
              좋아요한 칵테일
            </h2>
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-600">
              {likedCocktails.length}
            </span>
          </div>
        </div>

        {likedCocktails.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {likedCocktails.map((cocktail) => (
              <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-zinc-200 bg-zinc-50/70 p-8 text-center flex flex-col items-center justify-center gap-2">
            <div className="size-10 rounded-full bg-red-50 flex items-center justify-center text-red-500 mb-1">
              <Heart className="size-5" />
            </div>
            <p className="text-sm font-semibold text-zinc-700">
              아직 좋아요한 칵테일이 없습니다
            </p>
            <p className="text-xs text-zinc-400">
              마음에 드는 칵테일의 하트를 눌러 나만의 보관함을 만들어보세요!
            </p>
          </div>
        )}
      </section>

      {/* Divider */}
      <div className="border-b border-[#ebebeb] mx-4 md:mx-0" />

      {/* 3. 카테고리 (Category Section) */}
      <section className="px-4 md:px-0 space-y-4">
        <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight">
          카테고리
        </h2>

        {/* Category Chip Menu */}
        <div className="flex items-center gap-2 flex-wrap">
          {categoryList.map((category) => {
            const formattedFilterValue = category.value.replace(/\s+/g, '_');
            const isSelected =
              currentCategory.toLowerCase() ===
                formattedFilterValue.toLowerCase() ||
              currentCategory.toLowerCase() === category.value.toLowerCase();

            return (
              <button
                key={category.value}
                onClick={() => setCurrentCategory(formattedFilterValue)}
                className={`text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full transition-all duration-150 ${
                  isSelected
                    ? 'bg-[#FF6F2C] text-white shadow-xs font-bold'
                    : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-800'
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Cocktails Grid */}
        <div className="pt-2">
          {isFetchingCategory ? (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {[...Array(8)].map((_, i) => (
                <CocktailCardSkeleton key={i} />
              ))}
            </div>
          ) : filterCocktails.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {filterCocktails.slice(0, 10).map((cocktail) => (
                <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center text-zinc-400 text-sm">
              해당 카테고리의 칵테일을 불러올 수 없습니다.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
