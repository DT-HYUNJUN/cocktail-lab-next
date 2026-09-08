'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Link as LinkIcon, Check, Heart, Plus } from 'lucide-react';
import { DrinkData, extractIngredients } from '@/lib/api';
import { useStore } from '@/lib/store';
import { toast } from '@/app/components/ui/toast';
import { getKoreanObjectParticle } from '@/lib/utils';
import { getKoreanIngredientName } from '@/lib/i18n/translate';

interface DetailViewProps {
  cocktail: DrinkData;
}

export function CocktailDetailView({ cocktail }: DetailViewProps) {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const { isLikedCocktail, toggleLikeCocktail, myIngredientList, toggleMyIngredient } = useStore();
  const liked = isLikedCocktail(cocktail.idDrink);

  const handleToggleLike = () => {
    toggleLikeCocktail({
      idDrink: cocktail.idDrink,
      strDrink: cocktail.strDrink,
      strDrinkThumb: cocktail.strDrinkThumb,
      strTags: cocktail.strTags,
    });
  };

  const handleToggleIngredient = (ingredientName: string) => {
    const isAlreadyAdded = myIngredientList.includes(ingredientName);
    toggleMyIngredient(ingredientName);

    const koreanName = getKoreanIngredientName(ingredientName);
    const displayName = koreanName || ingredientName;
    const particle = getKoreanObjectParticle(displayName);

    if (isAlreadyAdded) {
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

  const handleClickIngredient = (name: string) => {
    router.push(`/ingredient/${encodeURIComponent(name)}`);
  };

  const handleClickShare = () => {
    if (typeof window !== 'undefined') {
      const url = window.location.href;
      if (navigator.share) {
        navigator
          .share({
            title: cocktail.strDrink,
            url,
          })
          .catch(() => {});
      } else {
        navigator.clipboard.writeText(url).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        });
      }
    }
  };

  // Collect ingredients (1 to 15) using type-safe helper
  const ingredients = extractIngredients(cocktail);

  const instructions = cocktail.strInstructions
    ? cocktail.strInstructions
        .split(/[.!]/)
        .map((s) => s.trim())
        .filter((s) => s.length > 0)
    : [];

  const tags = cocktail.strTags
    ? cocktail.strTags
        .split(',')
        .map((t) => t.trim().toUpperCase())
        .filter(Boolean)
    : [];

  return (
    <div className="px-4 md:px-0 py-2 sm:py-6">
      <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-8 md:gap-16">
        {/* 1. 칵테일 이미지 (Image Section) */}
        <div className="flex flex-col items-center shrink-0">
          <div className="w-full md:w-100 aspect-square overflow-hidden rounded-[24px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] bg-zinc-100">
            <Image
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
              width={400}
              height={400}
              priority
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 2. 칵테일 정보 & 재료 & 레시피 (Content Section) */}
        <div className="flex flex-col gap-6 flex-1 max-w-xl">
          {/* Header info */}
          <div>
            {tags.length > 0 && (
              <div className="mb-3 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[#FF6F2C] bg-[#FDE8E5] rounded-full px-3 py-1 font-bold text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="flex items-center justify-between sm:justify-start gap-3 mb-5">
              <h1 className="text-2xl sm:text-3xl font-black text-black tracking-tight m-0">
                {cocktail.strDrink}
              </h1>
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={handleToggleLike}
                  aria-label={liked ? '좋아요 취소' : '좋아요'}
                  className={`p-2 rounded-full border transition-all active:scale-90 flex items-center gap-1.5 text-xs font-semibold ${
                    liked
                      ? 'border-red-200 bg-red-50 text-red-500 hover:bg-red-100'
                      : 'border-zinc-200 text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50'
                  }`}
                >
                  <Heart
                    className={`size-4.5 transition-colors ${
                      liked ? 'fill-red-500 text-red-500' : 'text-zinc-500'
                    }`}
                  />
                </button>
                <button
                  onClick={handleClickShare}
                  aria-label="공유하기"
                  className="p-2 rounded-full border border-zinc-200 text-zinc-600 hover:bg-zinc-50 transition-colors"
                >
                  {copied ? (
                    <Check className="size-4.5 text-emerald-600" />
                  ) : (
                    <LinkIcon className="size-4.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Glass info */}
            <div className="flex gap-2">
              <div className="flex items-center gap-2">
                <div className="size-10 rounded-full bg-[#FDE8E5] flex items-center justify-center text-lg">
                  🍸
                </div>
                <div className="flex flex-col justify-between py-0.5">
                  <span className="text-xs text-zinc-500 font-medium">
                    글래스
                  </span>
                  <span className="text-xs text-zinc-900 font-bold">
                    {cocktail.strGlass}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 재료 Section */}
          <div className="mb-2">
            <h2 className="text-lg font-bold text-black mb-3">재료</h2>
            <div className="rounded-[24px] p-5 bg-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] border border-zinc-100">
              <ul className="list-none p-0 m-0 divide-y divide-zinc-100">
                {ingredients.map((ingred) => {
                  const isAdded = myIngredientList.includes(ingred.ingredient);
                  const koreanName = getKoreanIngredientName(ingred.ingredient);
                  const hasKoreanName =
                    Boolean(koreanName) && koreanName !== ingred.ingredient;

                  return (
                    <li
                      key={`${ingred.ingredient}-${ingred.measure}`}
                      className="flex justify-between items-center py-2.5 first:pt-0 last:pb-0 gap-2"
                    >
                      <div
                        onClick={() => handleClickIngredient(ingred.ingredient)}
                        className="flex items-center cursor-pointer group min-w-0"
                      >
                        <Image
                          src={`https://www.thecocktaildb.com/images/ingredients/${encodeURIComponent(
                            ingred.ingredient
                          )}-Small.png`}
                          alt={ingred.ingredient}
                          width={32}
                          height={32}
                          className="size-8 object-contain mr-2.5 shrink-0 group-hover:scale-110 transition-transform"
                        />
                        <div className="flex flex-col min-w-0">
                          <span className="text-sm font-bold text-zinc-800 group-hover:text-[#FF6F2C] transition-colors truncate">
                            {hasKoreanName ? koreanName : ingred.ingredient}
                          </span>
                          {hasKoreanName && (
                            <span className="text-[11px] text-zinc-400 truncate">
                              {ingred.ingredient}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5 shrink-0">
                        {ingred.measure && (
                          <span className="text-xs sm:text-sm font-bold text-[#FF6F2C] tracking-wide">
                            {ingred.measure}
                          </span>
                        )}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleToggleIngredient(ingred.ingredient);
                          }}
                          aria-label={
                            isAdded
                              ? `${ingred.ingredient} 내 재료에서 삭제`
                              : `${ingred.ingredient} 내 재료에 추가`
                          }
                          className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border transition-all active:scale-95 cursor-pointer ${
                            isAdded
                              ? 'border-[#FF6F2C] text-[#FF6F2C] bg-[#FF6F2C]/10 hover:bg-[#FF6F2C]/20'
                              : 'border-zinc-200 text-zinc-600 hover:border-[#FF6F2C] hover:text-[#FF6F2C] bg-white'
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="size-3 stroke-[2.5]" />
                              <span>추가됨</span>
                            </>
                          ) : (
                            <>
                              <Plus className="size-3 stroke-[2.5]" />
                              <span>추가하기</span>
                            </>
                          )}
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* 만드는 방법 (Instructions) Section */}
          <div>
            <h2 className="text-lg font-bold text-black mb-3">만드는 방법</h2>
            <div className="rounded-[24px] p-5 bg-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] border border-zinc-100">
              <ol className="list-none p-0 m-0 space-y-3">
                {instructions.map((inst, index) => (
                  <li
                    key={`${index}-${inst}`}
                    className="flex items-start gap-3.5"
                  >
                    <span className="size-8 rounded-full bg-[#FF6F2C] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-sm font-bold text-zinc-800 leading-relaxed pt-1">
                      {inst}
                    </span>
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

export default CocktailDetailView;
