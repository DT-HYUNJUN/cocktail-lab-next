import React from 'react';
import { notFound } from 'next/navigation';
import { getIngredientById, getCocktailsByIngredient } from '@/lib/api';
import { ingredientData } from '@/lib/ingredient/ingredient.data';
import { getKoreanIngredientName } from '@/lib/i18n/translate';
import { IngredientDetailView } from './detail-view';

interface PageProps {
  params: Promise<{ strIngredient: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { strIngredient } = await params;
  const decoded = decodeURIComponent(strIngredient);
  const koreanName = getKoreanIngredientName(decoded);

  return {
    title: `${koreanName} (${decoded}) - 재료 정보 및 칵테일 - Cocktail Lab`,
    description: `${koreanName} 정보, 도수, 맛 프로필 및 ${koreanName}로 만드는 칵테일 레시피 모음`,
  };
}

export default async function IngredientDetailPage({ params }: PageProps) {
  const { strIngredient } = await params;
  const decoded = decodeURIComponent(strIngredient);

  const [ingredientApi, cocktailList] = await Promise.all([
    getIngredientById(decoded),
    getCocktailsByIngredient(decoded),
  ]);

  const localData =
    ingredientData.find(
      (i) => i.name.toLowerCase() === decoded.toLowerCase()
    ) || null;

  if (!ingredientApi && !localData) {
    notFound();
  }

  return (
    <IngredientDetailView
      name={decoded}
      apiData={ingredientApi}
      localData={localData}
      cocktailList={cocktailList}
    />
  );
}
