'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Plus, CheckCircle2 } from 'lucide-react';
import { useStore } from '@/lib/store';
import { toast } from '@/app/components/ui/toast';
import { getKoreanObjectParticle } from '@/lib/utils';
import { Ingredient } from '@/lib/ingredient/ingredient.type';
import translationData from '@/lib/i18n/translation.json';

import { getKoreanIngredientName } from '@/lib/i18n/translate';

interface IngredientCardProps {
  ingred: Ingredient;
}

export function IngredientCard({ ingred }: IngredientCardProps) {
  const router = useRouter();
  const { myIngredientList, toggleMyIngredient } = useStore();

  const isAdded = myIngredientList.includes(ingred.name);

  const handleClickCard = () => {
    router.push(`/ingredient/${encodeURIComponent(ingred.name)}`);
  };

  const handleToggleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    const wasAdded = isAdded;
    toggleMyIngredient(ingred.name);

    const displayName = getKoreanIngredientName(ingred.name) || ingred.name;
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

  // Translation helpers
  const getKoreanName = (name: string) => {
    return getKoreanIngredientName(name);
  };

  const getCategoryLabel = () => {
    const filterDict = (translationData as any).filter || {};
    if (ingred.baseSpiritGroup && filterDict.baseSpirit) {
      return filterDict.baseSpirit[ingred.baseSpiritGroup] || ingred.baseSpiritGroup;
    }
    if (ingred.category && filterDict.category) {
      return filterDict.category[ingred.category] || ingred.category;
    }
    return ingred.category;
  };

  return (
    <div className="flex flex-col gap-2 group">
      <div
        onClick={handleClickCard}
        className="relative w-full aspect-square bg-[#F7F7F7] rounded-lg flex items-center justify-center cursor-pointer p-3 overflow-hidden hover:shadow-md transition-all"
      >
        <Image
          src={`https://www.thecocktaildb.com/images/ingredients/${encodeURIComponent(ingred.name)}-Medium.png`}
          alt={ingred.name}
          width={200}
          height={200}
          className="w-[90%] h-[90%] object-contain group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {isAdded ? (
        <button
          onClick={handleToggleAdd}
          className="w-full flex items-center justify-center gap-1 py-1 px-2 text-xs font-semibold rounded border border-[#FF6F2C] text-[#FF6F2C] bg-[#FF6F2C]/10 hover:bg-[#FF6F2C]/20 transition-colors"
        >
          <CheckCircle2 className="size-3.5" />
          <span>추가됨</span>
        </button>
      ) : (
        <button
          onClick={handleToggleAdd}
          className="w-full flex items-center justify-center gap-1 py-1 px-2 text-xs font-semibold rounded border border-[#3d5afe] text-[#3d5afe] hover:bg-[#3d5afe]/10 transition-colors"
        >
          <Plus className="size-3.5" />
          <span>추가하기</span>
        </button>
      )}

      <div
        onClick={handleClickCard}
        className="cursor-pointer font-medium text-sm text-black truncate hover:text-[#FF6F2C] transition-colors"
      >
        {getKoreanName(ingred.name)}
      </div>

      <div className="flex flex-wrap gap-1">
        {getCategoryLabel() && (
          <span className="text-[10px] sm:text-xs rounded bg-[#FF6F2C] text-white px-1.5 py-0.5 font-medium">
            {getCategoryLabel()}
          </span>
        )}
        {ingred.abv !== undefined && ingred.abv !== null && ingred.abv > 0 && (
          <span className="text-[10px] sm:text-xs rounded bg-[#FF6F2C] text-white px-1.5 py-0.5 font-medium">
            {ingred.abv}도
          </span>
        )}
      </div>
    </div>
  );
}

export default IngredientCard;
