export interface DrinkData {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate: string | null;
  strTags: string | null;
  strVideo: string | null;
  strCategory: string;
  strIBA: string | null;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strInstructionsES: string | null;
  strInstructionsDE: string | null;
  strInstructionsFR: string | null;
  strInstructionsIT: string | null;
  'strInstructionsZH-HANS': string | null;
  'strInstructionsZH-HANT': string | null;
  strDrinkThumb: string;
  [key: `strIngredient${number}`]: string | null | undefined;
  [key: `strMeasure${number}`]: string | null | undefined;
  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strMeasure1: string | null;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
}

export interface DrinkDto {
  drinks: DrinkData[] | null;
}

export interface CocktailCardType {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strTags?: string | null;
}

export interface FilterCocktailDto {
  drinks: CocktailCardType[] | null;
}

export interface IngredientApiData {
  idIngredient: string;
  strIngredient: string;
  strDescription: string | null;
  strType: string | null;
  strAlcohol: string | null;
  strABV: string | null;
}

export interface IngredientDto {
  ingredients: IngredientApiData[] | null;
}

export type CocktailFilterType = 'c' | 'g' | 'i' | 'a';

export interface ParsedIngredient {
  ingredient: string;
  measure: string;
}

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';
const DEFAULT_TIMEOUT_MS = 8000;

/**
 * TheCocktailDB API 공통 Fetcher 함수
 * 타임아웃, 에러 로깅 및 Next.js revalidate 캐시 옵션 지원
 */
async function fetchCocktailApi<T>(
  endpoint: string,
  revalidateSeconds: number = 3600
): Promise<T | null> {
  try {
    const fetchOptions: RequestInit & { next?: { revalidate: number } } = {
      signal: AbortSignal.timeout(DEFAULT_TIMEOUT_MS),
    };

    if (revalidateSeconds >= 0) {
      fetchOptions.next = { revalidate: revalidateSeconds };
    }

    const res = await fetch(`${BASE_URL}${endpoint}`, fetchOptions);

    if (!res.ok) {
      console.error(
        `[CocktailDB Error] Failed to fetch ${endpoint}: ${res.status} ${res.statusText}`
      );
      return null;
    }

    const data = (await res.json()) as T;
    return data;
  } catch (error) {
    console.error(`[CocktailDB Network/Parse Error] ${endpoint}:`, error);
    return null;
  }
}

/**
 * 칵테일 데이터(DrinkData)의 strIngredient1~15, strMeasure1~15를
 * 깔끔한 정규화 객체 배열 [{ ingredient, measure }] 형태로 추출하는 헬퍼
 */
export function extractIngredients(drink: DrinkData): ParsedIngredient[] {
  const result: ParsedIngredient[] = [];
  for (let i = 1; i <= 15; i++) {
    const ing = drink[`strIngredient${i}`];
    const mea = drink[`strMeasure${i}`];
    if (ing && typeof ing === 'string' && ing.trim()) {
      result.push({
        ingredient: ing.trim(),
        measure: mea && typeof mea === 'string' ? mea.trim() : '',
      });
    }
  }
  return result;
}

// Default fallback data in case TheCocktailDB is slow or offline
export const FALLBACK_RANDOM_DRINK: DrinkData = {
  idDrink: '11000',
  strDrink: 'Mojito',
  strDrinkAlternate: null,
  strTags: 'IBA,ContemporaryClassic,Alcoholic',
  strVideo: null,
  strCategory: 'Cocktail',
  strIBA: 'Contemporary Classics',
  strAlcoholic: 'Alcoholic',
  strGlass: 'Highball glass',
  strInstructions:
    'Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with cracked ice. Pour the rum and top with soda water. Garnish with mint sprig and lime slice.',
  strInstructionsES: null,
  strInstructionsDE: null,
  strInstructionsFR: null,
  strInstructionsIT: null,
  'strInstructionsZH-HANS': null,
  'strInstructionsZH-HANT': null,
  strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg',
  strIngredient1: 'Light rum',
  strIngredient2: 'Lime',
  strIngredient3: 'Sugar',
  strIngredient4: 'Mint',
  strIngredient5: 'Soda water',
  strIngredient6: null,
  strIngredient7: null,
  strIngredient8: null,
  strIngredient9: null,
  strIngredient10: null,
  strIngredient11: null,
  strIngredient12: null,
  strIngredient13: null,
  strIngredient14: null,
  strIngredient15: null,
  strMeasure1: '2-3 oz',
  strMeasure2: 'Juice of 1',
  strMeasure3: '2 tsp',
  strMeasure4: '2-4',
  strMeasure5: 'Top with',
  strMeasure6: null,
  strMeasure7: null,
  strMeasure8: null,
  strMeasure9: null,
  strMeasure10: null,
  strMeasure11: null,
  strMeasure12: null,
  strMeasure13: null,
  strMeasure14: null,
  strMeasure15: null,
};

export async function getRandomCocktail(): Promise<DrinkData> {
  const data = await fetchCocktailApi<DrinkDto>('/random.php', 0);
  if (data?.drinks && data.drinks.length > 0) {
    return data.drinks[0];
  }
  return FALLBACK_RANDOM_DRINK;
}

export async function getCocktailByFilter(
  filter: CocktailFilterType | string,
  filterValue: string
): Promise<CocktailCardType[]> {
  const data = await fetchCocktailApi<FilterCocktailDto>(
    `/filter.php?${filter}=${encodeURIComponent(filterValue)}`,
    3600
  );
  return data?.drinks || [];
}

export async function getCocktailById(idDrink: string): Promise<DrinkData | null> {
  const data = await fetchCocktailApi<DrinkDto>(
    `/lookup.php?i=${encodeURIComponent(idDrink)}`,
    3600
  );
  if (data?.drinks && data.drinks.length > 0) {
    return data.drinks[0];
  }
  return null;
}

export async function getCocktailsByIngredient(ingredient: string): Promise<CocktailCardType[]> {
  return getCocktailByFilter('i', ingredient);
}

/**
 * 재료 조회 (이름 또는 ID)
 * 하위 호환성을 유지하여 이름(예: 'vodka') 또는 ID 모두 지원
 */
export async function getIngredientById(nameOrId: string): Promise<IngredientApiData | null> {
  // 숫자로만 구성되어 있으면 lookup.php?iid= 우선 시도
  if (/^\d+$/.test(nameOrId.trim())) {
    const idData = await fetchCocktailApi<IngredientDto>(
      `/lookup.php?iid=${encodeURIComponent(nameOrId)}`,
      3600
    );
    if (idData?.ingredients && idData.ingredients.length > 0) {
      return idData.ingredients[0];
    }
  }

  // 이름 기반 조회
  const data = await fetchCocktailApi<IngredientDto>(
    `/search.php?i=${encodeURIComponent(nameOrId)}`,
    3600
  );
  if (data?.ingredients && data.ingredients.length > 0) {
    return data.ingredients[0];
  }
  return null;
}

export async function getCocktailByName(name: string): Promise<CocktailCardType[]> {
  const data = await fetchCocktailApi<DrinkDto>(
    `/search.php?s=${encodeURIComponent(name)}`,
    3600
  );
  if (data?.drinks) {
    return data.drinks.map((d) => ({
      idDrink: d.idDrink,
      strDrink: d.strDrink,
      strDrinkThumb: d.strDrinkThumb,
    }));
  }
  return [];
}

export async function getIngredientByName(name: string): Promise<IngredientApiData[]> {
  const data = await fetchCocktailApi<IngredientDto>(
    `/search.php?i=${encodeURIComponent(name)}`,
    3600
  );
  return data?.ingredients || [];
}
