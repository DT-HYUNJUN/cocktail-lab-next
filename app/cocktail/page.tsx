'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { Search, Plus, Minus } from 'lucide-react';
import { cocktailFilterList } from '@/lib/filters';
import { getCocktailByFilter, CocktailCardType } from '@/lib/api';
import {
  CocktailCard,
  CocktailCardSkeleton,
} from '@/app/components/cocktail-card';

type FilterType = 'c' | 'g' | 'i' | 'a';

export default function CocktailExplorerPage() {
  const [currentFilter, setCurrentFilter] = useState<FilterType>('c');
  const [currentFilterItemIndex, setCurrentFilterItemIndex] =
    useState<number>(0);
  const [isExpand, setIsExpand] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const [cocktails, setCocktails] = useState<CocktailCardType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Active filter category definition
  const activeFilterGroup = useMemo(() => {
    return (
      cocktailFilterList.find((f) => f.value === currentFilter) ||
      cocktailFilterList[0]
    );
  }, [currentFilter]);

  const activeFilterItem = useMemo(() => {
    return (
      activeFilterGroup.itemList[currentFilterItemIndex] ||
      activeFilterGroup.itemList[0]
    );
  }, [activeFilterGroup, currentFilterItemIndex]);

  // Fetch Cocktails by Filter
  useEffect(() => {
    let isMounted = true;
    const fetchList = async () => {
      setIsLoading(true);
      try {
        const valueToQuery = activeFilterItem.value.replace(/\s+/g, '_');
        const list = await getCocktailByFilter(currentFilter, valueToQuery);
        if (isMounted) {
          setCocktails(list);
        }
      } catch (e) {
        console.error(e);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };
    fetchList();
    return () => {
      isMounted = false;
    };
  }, [currentFilter, currentFilterItemIndex, activeFilterItem]);

  const handleClickFilterTab = (filter: FilterType) => {
    setCurrentFilter(filter);
    setCurrentFilterItemIndex(0);
  };

  const handleClickFilterItem = (index: number, filterType?: FilterType) => {
    if (filterType && filterType !== currentFilter) {
      setCurrentFilter(filterType);
    }
    setCurrentFilterItemIndex(index);
  };

  const filteredResults = useMemo(() => {
    if (!searchValue.trim()) return cocktails;
    return cocktails.filter((c) =>
      c.strDrink.toLowerCase().includes(searchValue.toLowerCase().trim())
    );
  }, [cocktails, searchValue]);

  return (
    <div className="space-y-6">
      {/* 1. PC Wide Filter Section */}
      <div className="hidden md:block border border-[#0000001f] border-b-0 mb-8">
        {cocktailFilterList.map((filter) => (
          <div
            key={filter.value}
            className="grid grid-cols-[100px_1fr] border-b border-[#0000001f]"
          >
            <div className="flex items-center justify-center py-2.5 px-2 border-r border-[#0000001f] bg-zinc-50/50 text-xs font-semibold text-zinc-700">
              {filter.label}
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 p-2.5 text-xs">
              {filter.itemList.map((item, index) => {
                const isSelected =
                  currentFilter === filter.value &&
                  currentFilterItemIndex === index;
                return (
                  <button
                    key={item.value}
                    onClick={() => handleClickFilterItem(index, filter.value)}
                    className={`cursor-pointer transition-colors ${
                      isSelected
                        ? 'text-[#FF6F2C] font-bold underline underline-offset-4'
                        : 'text-zinc-700 hover:text-[#FF6F2C]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* 2. Mobile Filter Menu Tabs */}
      <div className="md:hidden sticky top-12 z-30 bg-white border-b border-[#ebebeb] px-4 pt-1 pb-2 flex justify-between items-center">
        {cocktailFilterList.map((filter) => {
          const isSelected = filter.value === currentFilter;
          return (
            <button
              key={filter.value}
              onClick={() => handleClickFilterTab(filter.value)}
              className={`h-9 px-4 rounded-full text-xs font-semibold transition-all ${
                isSelected
                  ? 'bg-[#E54900] text-white shadow-xs'
                  : 'text-black hover:bg-zinc-100'
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {/* 3. Mobile Filter Circle Icons */}
      <div className="md:hidden relative px-4 py-4 border-b border-[#ebebeb]">
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isExpand ? 'max-h-[500px]' : 'max-h-[180px]'
          }`}
        >
          <div className="grid grid-cols-4 gap-y-5 gap-x-2">
            {activeFilterGroup.itemList.map((item, index) => {
              const isSelected = index === currentFilterItemIndex;
              const imgSrc =
                currentFilter === 'i'
                  ? `https://www.thecocktaildb.com/images/ingredients/${item.value}-small.png`
                  : item.image;

              return (
                <div
                  key={item.value}
                  onClick={() => handleClickFilterItem(index)}
                  className="flex flex-col items-center gap-1 cursor-pointer"
                >
                  <div
                    className={`size-13 rounded-full flex items-center justify-center transition-all bg-[#dfdfdf] ${
                      isSelected
                        ? 'border-2 border-[#FFAA86] ring-2 ring-[#FF6F2C]/40 bg-white'
                        : 'border-2 border-[#dfdfdf]'
                    }`}
                  >
                    {imgSrc && (
                      <Image
                        src={imgSrc}
                        alt={item.value}
                        width={32}
                        height={32}
                        className="size-8 object-contain"
                      />
                    )}
                  </div>
                  <span
                    className={`text-xs text-center truncate max-w-[70px] ${
                      isSelected ? 'font-bold text-[#FF6F2C]' : 'text-zinc-700'
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {activeFilterGroup.itemList.length > 8 && (
          <button
            onClick={() => setIsExpand((prev) => !prev)}
            className="absolute right-3 bottom-1 p-1 text-[#E54900] hover:scale-110 transition-transform"
          >
            {isExpand ? (
              <Minus className="size-5" />
            ) : (
              <Plus className="size-5" />
            )}
          </button>
        )}
      </div>

      {/* 4. Search Filter Input */}
      <div className="flex justify-end px-4 md:px-0">
        <div className="flex items-center gap-2 bg-[#f5f5f5] rounded-xl px-3 py-1.5 w-full sm:w-72">
          <Search className="size-4 text-zinc-400 shrink-0" />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="칵테일을 검색해보세요"
            className="w-full bg-transparent text-xs text-black placeholder:text-zinc-400 outline-none"
          />
        </div>
      </div>

      {/* 5. Cocktails List Grid */}
      <div className="px-4 md:px-0">
        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {[...Array(8)].map((_, i) => (
              <CocktailCardSkeleton key={i} />
            ))}
          </div>
        ) : filteredResults.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {filteredResults.map((cocktail) => (
              <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center font-bold text-[#FF6F2C] text-base">
            찾으시는 칵테일이 없습니다.
          </div>
        )}
      </div>
    </div>
  );
}
