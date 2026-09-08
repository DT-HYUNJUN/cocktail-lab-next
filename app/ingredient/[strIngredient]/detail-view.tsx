'use client';

import React from 'react';
import Image from 'next/image';
import { Flame, Sparkles, Wine, Plus, Check } from 'lucide-react';
import { IngredientApiData, CocktailCardType } from '@/lib/api';
import { Ingredient } from '@/lib/ingredient/ingredient.type';
import { CocktailCard } from '@/app/components/cocktail-card';
import translationData from '@/lib/i18n/translation.json';
import { getKoreanIngredientName } from '@/lib/i18n/translate';
import { useStore } from '@/lib/store';
import { toast } from '@/app/components/ui/toast';
import { getKoreanObjectParticle } from '@/lib/utils';

interface DetailViewProps {
  name: string;
  apiData: IngredientApiData | null;
  localData: Ingredient | null;
  cocktailList: CocktailCardType[];
}

export function IngredientDetailView({
  name,
  apiData,
  localData,
  cocktailList,
}: DetailViewProps) {
  const { myIngredientList, toggleMyIngredient } = useStore();

  const isAdded = myIngredientList.includes(name);

  // Translations
  const koreanName = getKoreanIngredientName(name);

  const handleToggleAdd = () => {
    const wasAdded = isAdded;
    toggleMyIngredient(name);

    const displayName = koreanName || name;
    const particle = getKoreanObjectParticle(displayName);

    if (wasAdded) {
      toast({
        title: '내 재료에서 삭제됨',
        description: `'${displayName}'${particle} 내 재료에서 삭제했습니다.`,
        type: 'info',
      });
    } else {
      toast({
        title: '내 재료에 추가됨',
        description: `'${displayName}'${particle} 내 재료에 추가했습니다.`,
        type: 'success',
      });
    }
  };

  const filterDict = (translationData as any).filter || {};
  const getFlavorName = (flavor: string) => {
    return filterDict.flavors?.[flavor] || flavor;
  };
  const getCategoryName = (cat: string) => {
    return filterDict.category?.[cat] || cat;
  };

  const abv = localData
    ? (localData.abv ?? 0)
    : (apiData?.strABV ?? (apiData?.strAlcohol === 'No' ? 0 : '?'));
  const typeLabel = localData
    ? getCategoryName(localData.category)
    : apiData?.strType
      ? (translationData.ingredients as any).types?.[apiData.strType] ||
        apiData.strType
      : '기타';

  return (
    <div className="space-y-6">
      {/* 1. 재료 대표 이미지 & 이름 */}
      <div className="flex flex-col items-center gap-4 px-4 md:px-0 mb-4">
        <div className="size-48 md:size-96 rounded-[20px] bg-[#F7F7F7] flex items-center justify-center p-4 shadow-sm">
          <Image
            src={`https://www.thecocktaildb.com/images/ingredients/${encodeURIComponent(name)}-Medium.png`}
            alt={name}
            width={320}
            height={320}
            priority
            className="size-40 md:size-80 object-contain"
          />
        </div>
        <div className="flex flex-col items-center gap-2.5">
          <h1 className="text-2xl sm:text-3xl font-black text-black tracking-tight text-center">
            {koreanName}
          </h1>
          {koreanName !== name && (
            <span className="text-sm text-zinc-400 font-medium -mt-1.5">
              {name}
            </span>
          )}
          <button
            type="button"
            onClick={handleToggleAdd}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold border transition-all active:scale-95 cursor-pointer shadow-xs ${
              isAdded
                ? 'border-[#FF6F2C] text-[#FF6F2C] bg-[#FF6F2C]/10 hover:bg-[#FF6F2C]/20'
                : 'border-zinc-300 text-zinc-700 hover:border-[#FF6F2C] hover:text-[#FF6F2C] bg-white'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="size-3.5 stroke-[2.5]" />
                <span>내 재료에 추가됨</span>
              </>
            ) : (
              <>
                <Plus className="size-3.5 stroke-[2.5]" />
                <span>내 재료에 추가하기</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="border-b border-[#dedede] mx-4 md:mx-0" />

      {/* 2. 재료 정보 (Specs Grid) */}
      <div className="px-4 md:px-0 space-y-4">
        <h2 className="text-base font-bold text-black">재료 정보</h2>
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {/* 도수 */}
          <div className="flex flex-col items-center gap-2 p-4 rounded-[20px] bg-[#F7F7F7]">
            <div className="size-10 rounded-full bg-[#FDE8E5] flex items-center justify-center text-[#FF6F2C]">
              <Flame className="size-5" />
            </div>
            <span className="text-xs text-zinc-500 font-medium">도수</span>
            <span className="text-sm font-bold text-black">{abv}도</span>
          </div>

          {/* 맛 */}
          <div className="flex flex-col items-center gap-2 p-4 rounded-[20px] bg-[#F7F7F7]">
            <div className="size-10 rounded-full bg-[#FDE8E5] flex items-center justify-center text-[#FF6F2C]">
              <Sparkles className="size-5" />
            </div>
            <span className="text-xs text-zinc-500 font-medium">맛</span>
            <span className="text-sm font-bold text-black truncate max-w-full">
              {localData &&
              localData.flavorProfile &&
              localData.flavorProfile[0]
                ? getFlavorName(localData.flavorProfile[0])
                : '-'}
            </span>
          </div>

          {/* 종류 */}
          <div className="flex flex-col items-center gap-2 p-4 rounded-[20px] bg-[#F7F7F7]">
            <div className="size-10 rounded-full bg-[#FDE8E5] flex items-center justify-center text-[#FF6F2C]">
              <Wine className="size-5" />
            </div>
            <span className="text-xs text-zinc-500 font-medium">종류</span>
            <span className="text-sm font-bold text-black truncate max-w-full">
              {typeLabel}
            </span>
          </div>
        </div>

        {/* 맛 프로필 상세 칩 */}
        {localData &&
          localData.flavorProfile &&
          localData.flavorProfile.length > 1 && (
            <div className="p-4 rounded-[20px] bg-[#F7F7F7] space-y-2.5">
              <h3 className="text-sm font-bold text-black">맛 프로필</h3>
              <div className="flex flex-wrap gap-2">
                {localData.flavorProfile.map((flavor) => (
                  <span
                    key={flavor}
                    className="bg-[#FDE8E5] text-[#FF6F2C] text-xs font-bold rounded-full px-3 py-1.5"
                  >
                    {getFlavorName(flavor)}
                  </span>
                ))}
              </div>
            </div>
          )}
      </div>

      <div className="border-b border-[#dedede] mx-4 md:mx-0" />

      {/* 3. 이 재료로 만드는 칵테일 */}
      {cocktailList && cocktailList.length > 0 && (
        <div className="px-4 md:px-0 space-y-4 pt-2">
          <h2 className="text-base font-bold text-black flex items-center gap-1.5">
            <span>이 재료로 만드는 칵테일</span>
            <span className="text-sm font-bold text-[#FF6F2C]">
              ({cocktailList.length})
            </span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {cocktailList.map((cocktail) => (
              <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default IngredientDetailView;
