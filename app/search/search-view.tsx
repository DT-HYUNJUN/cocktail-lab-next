'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';
import { useStore } from '@/lib/store';
import {
  getCocktailByName,
  getIngredientByName,
  CocktailCardType,
  IngredientApiData,
} from '@/lib/api';
import { CocktailCard } from '@/app/components/cocktail-card';
import { IngredientSearchCard } from '@/app/components/ingredient-search-card';

interface SearchViewProps {
  initialQuery?: string;
}

export function SearchView({ initialQuery = '' }: SearchViewProps) {
  const router = useRouter();
  const {
    recentSearchValueList,
    deleteRecentSearchValue,
    resetRecentSearchValueList,
    translateName,
  } = useStore();

  const [cocktails, setCocktails] = useState<CocktailCardType[]>([]);
  const [ingredients, setIngredients] = useState<IngredientApiData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  useEffect(() => {
    if (!initialQuery) {
      setCocktails([]);
      setIngredients([]);
      setHasSearched(false);
      return;
    }

    let isMounted = true;
    const executeSearch = async () => {
      setIsLoading(true);
      setHasSearched(true);
      try {
        const translatedCocktail = translateName(initialQuery, 'cocktail');
        const translatedIngredient = translateName(initialQuery, 'ingredient');

        const [cList, iList] = await Promise.all([
          getCocktailByName(translatedCocktail),
          getIngredientByName(translatedIngredient),
        ]);

        if (isMounted) {
          setCocktails(cList);
          setIngredients(iList);
        }
      } catch (e) {
        console.error(e);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    executeSearch();
    return () => {
      isMounted = false;
    };
  }, [initialQuery]);

  const handleClickRecent = (val: string) => {
    router.push(`/search/${encodeURIComponent(val)}`);
  };

  return (
    <div className="space-y-6">
      {/* 1. 최근 검색어 (Recent Searches) */}
      <div className="px-4 md:px-0 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-black">최근 검색어</span>
          {recentSearchValueList.length > 0 && (
            <button
              onClick={resetRecentSearchValueList}
              className="text-xs text-zinc-500 hover:text-[#FF6F2C] transition-colors"
            >
              전체삭제
            </button>
          )}
        </div>

        {recentSearchValueList.length > 0 ? (
          <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none">
            {recentSearchValueList.map((term) => (
              <div
                key={term}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-300 bg-white hover:border-[#FF6F2C] text-xs font-medium text-zinc-800 shrink-0 cursor-pointer transition-colors"
              >
                <span onClick={() => handleClickRecent(term)}>{term}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteRecentSearchValue(term);
                  }}
                  className="text-zinc-400 hover:text-zinc-700"
                >
                  <X className="size-3" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-zinc-400 py-2">최근 검색어가 없습니다.</p>
        )}
      </div>

      <div className="border-b border-[#dedede] mx-4 md:mx-0" />

      {/* 2. Loading indicator */}
      {isLoading && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-4 md:px-0">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="aspect-[3/4] rounded-xl bg-zinc-100 animate-pulse"
            />
          ))}
        </div>
      )}

      {/* 3. 재료 결과 */}
      {!isLoading && ingredients.length > 0 && (
        <section className="px-4 md:px-0 space-y-4">
          <h2 className="text-lg font-bold text-black">재료</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {ingredients.map((ing) => (
              <IngredientSearchCard
                key={ing.idIngredient}
                name={ing.strIngredient}
              />
            ))}
          </div>
        </section>
      )}

      {!isLoading && ingredients.length > 0 && cocktails.length > 0 && (
        <div className="border-b border-[#dedede] mx-4 md:mx-0" />
      )}

      {/* 4. 칵테일 결과 */}
      {!isLoading && cocktails.length > 0 && (
        <section className="px-4 md:px-0 space-y-4">
          <h2 className="text-lg font-bold text-black">칵테일</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {cocktails.map((cocktail) => (
              <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
            ))}
          </div>
        </section>
      )}

      {/* 5. 검색 결과 없음 */}
      {!isLoading &&
        hasSearched &&
        cocktails.length === 0 &&
        ingredients.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-2">
            <p className="text-base text-zinc-900">
              <span className="font-bold text-[#FF6F2C]">
                &apos;{initialQuery}&apos;
              </span>{' '}
              결과를 찾을 수 없어요.
            </p>
            <p className="text-xs text-zinc-500">
              정확한 검색을 원하실 경우 영어로 검색해주세요.
            </p>
          </div>
        )}
    </div>
  );
}

export default SearchView;
