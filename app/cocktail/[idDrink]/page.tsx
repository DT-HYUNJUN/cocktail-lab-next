import { notFound } from 'next/navigation';
import { getCocktailById } from '@/lib/api';
import { CocktailDetailView } from './detail-view';
import { Suspense } from 'react';
import Loading from './loading';

interface PageProps {
  params: Promise<{ idDrink?: string; id?: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { idDrink, id } = await params;
  const drinkId = idDrink || id;
  if (!drinkId) return { title: 'Cocktail Lab' };

  const cocktail = await getCocktailById(drinkId);
  if (!cocktail) return { title: 'Cocktail Not Found - Cocktail Lab' };

  return {
    title: `${cocktail.strDrink} - Cocktail Lab`,
    description: `${cocktail.strDrink} 레시피, 재료, 글래스 및 상세 제조 방법 안내`,
  };
}

export default async function CocktailDetailPage({ params }: PageProps) {
  const { idDrink, id } = await params;
  const drinkId = idDrink || id;

  if (!drinkId) {
    notFound();
  }

  const cocktail = await getCocktailById(drinkId);

  if (!cocktail) {
    notFound();
  }

  return (
    <Suspense fallback={<Loading />}>
      <CocktailDetailView cocktail={cocktail} />
    </Suspense>
  );
}
