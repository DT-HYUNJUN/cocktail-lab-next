import translationData from './translation.json';

const namesDict = (translationData.ingredients as any).names || {};
const koIngredDict = (translationData.ingredients as any)['ko-ingredient-names'] || {};

export function getKoreanIngredientName(name: string): string {
  if (!name) return '';
  if (namesDict[name]) return namesDict[name];

  const lower = name.toLowerCase().trim();
  if (namesDict[lower]) return namesDict[lower];

  for (const [k, v] of Object.entries(namesDict)) {
    if (k.toLowerCase().trim() === lower) return v as string;
  }

  for (const [ko, en] of Object.entries(koIngredDict)) {
    if ((en as string).toLowerCase().trim() === lower) return ko;
  }

  return name;
}
