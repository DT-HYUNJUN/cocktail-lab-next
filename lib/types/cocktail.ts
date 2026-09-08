export type BaseSpirit =
  | 'gin'
  | 'rum'
  | 'vodka'
  | 'whiskey'
  | 'tequila'
  | 'brandy'
  | 'liqueur'
  | 'non_alcoholic';

export type Strength = 'non_alcoholic' | 'low' | 'medium' | 'high';

export type TasteProfile =
  | 'sweet'
  | 'sour'
  | 'bitter'
  | 'refreshing'
  | 'smoky'
  | 'fruity'
  | 'creamy'
  | 'herbal'
  | 'dry';

export type GlassType =
  | 'martini'
  | 'highball'
  | 'rocks'
  | 'coupe'
  | 'hurricane'
  | 'flute'
  | 'copper_mug'
  | 'collins';

export type Method = 'build' | 'shake' | 'stir' | 'blend' | 'layer';

export type Difficulty = 'easy' | 'medium' | 'hard';

export type IngredientCategory =
  | 'spirit'
  | 'liqueur'
  | 'mixer'
  | 'juice'
  | 'syrup'
  | 'bitters'
  | 'garnish'
  | 'dairy'
  | 'other';

export interface Ingredient {
  nameKo: string;
  nameEn: string;
  amount: number;
  unit: 'ml' | 'oz' | 'dash' | 'drop' | 'leaf' | 'slice' | 'piece' | 'fill' | 'pinch' | 'barspoon';
  category: IngredientCategory;
  isOptional?: boolean;
  substitute?: string;
}

export interface Cocktail {
  id: string;
  nameKo: string;
  nameEn: string;
  shortDesc: string;
  description: string;
  history: string;
  baseSpirit: BaseSpirit;
  abv: number; // approximate percentage
  strength: Strength;
  difficulty: Difficulty;
  tastes: TasteProfile[];
  glass: GlassType;
  method: Method;
  ibaOfficial: boolean;
  ibaCategory?: 'The Unforgettables' | 'Contemporary Classics' | 'New Era Drinks';
  ingredients: Ingredient[];
  garnish: string;
  ice: string;
  instructions: string[];
  bartenderTips: string[];
  colorGradient: string;
  accentColor: string;
  featured?: boolean;
  popular?: boolean;
  rating?: number;
  preparationTimeMinutes?: number;
}

export interface FilterState {
  searchQuery: string;
  baseSpirit: BaseSpirit | 'all';
  strength: Strength | 'all';
  difficulty: Difficulty | 'all';
  tastes: TasteProfile[];
  method: Method | 'all';
  glass: GlassType | 'all';
  ibaOnly: boolean;
  sortBy: 'popular' | 'rating' | 'abv-asc' | 'abv-desc' | 'name';
}
