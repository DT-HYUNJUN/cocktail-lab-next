'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import translationData from './i18n/translation.json';
import { DrinkData, CocktailCardType } from './api';

interface StoreContextType {
  recentSearchValueList: string[];
  addRecentSearchValue: (val: string) => void;
  deleteRecentSearchValue: (val: string) => void;
  resetRecentSearchValueList: () => void;
  myIngredientList: string[];
  toggleMyIngredient: (name: string) => void;
  addMyIngredient: (name: string) => void;
  removeMyIngredient: (name: string) => void;
  randomCocktail: DrinkData | null;
  setRandomCocktail: (drink: DrinkData) => void;
  translateName: (name: string, type?: 'ingredient' | 'cocktail') => string;
  likedCocktails: CocktailCardType[];
  toggleLikeCocktail: (cocktail: CocktailCardType) => void;
  isLikedCocktail: (idDrink: string) => boolean;
}

const StoreContext = createContext<StoreContextType>({
  recentSearchValueList: [],
  addRecentSearchValue: () => {},
  deleteRecentSearchValue: () => {},
  resetRecentSearchValueList: () => {},
  myIngredientList: [],
  toggleMyIngredient: () => {},
  addMyIngredient: () => {},
  removeMyIngredient: () => {},
  randomCocktail: null,
  setRandomCocktail: () => {},
  translateName: (name) => name,
  likedCocktails: [],
  toggleLikeCocktail: () => {},
  isLikedCocktail: () => false,
});

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [recentSearchValueList, setRecentSearchValueList] = useState<string[]>([]);
  const [myIngredientList, setMyIngredientList] = useState<string[]>([]);
  const [randomCocktail, setRandomCocktailState] = useState<DrinkData | null>(null);
  const [likedCocktails, setLikedCocktails] = useState<CocktailCardType[]>([]);

  useEffect(() => {
    try {
      const storedSearches = localStorage.getItem('cocktail_recent_searches');
      if (storedSearches) {
        setRecentSearchValueList(JSON.parse(storedSearches));
      }
      const storedIngredients = localStorage.getItem('cocktail_my_ingredients');
      if (storedIngredients) {
        setMyIngredientList(JSON.parse(storedIngredients));
      }
      const storedLikes = localStorage.getItem('cocktail_liked_list');
      if (storedLikes) {
        setLikedCocktails(JSON.parse(storedLikes));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const addRecentSearchValue = (val: string) => {
    if (!val.trim()) return;
    setRecentSearchValueList((prev) => {
      const filtered = prev.filter((item) => item !== val.trim());
      const updated = [val.trim(), ...filtered].slice(0, 10);
      try {
        localStorage.setItem('cocktail_recent_searches', JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
  };

  const deleteRecentSearchValue = (val: string) => {
    setRecentSearchValueList((prev) => {
      const updated = prev.filter((item) => item !== val);
      try {
        localStorage.setItem('cocktail_recent_searches', JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
  };

  const resetRecentSearchValueList = () => {
    setRecentSearchValueList([]);
    try {
      localStorage.removeItem('cocktail_recent_searches');
    } catch (e) {}
  };

  const toggleMyIngredient = (name: string) => {
    setMyIngredientList((prev) => {
      const updated = prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name];
      try {
        localStorage.setItem('cocktail_my_ingredients', JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
  };

  const addMyIngredient = (name: string) => {
    setMyIngredientList((prev) => {
      if (prev.includes(name)) return prev;
      const updated = [...prev, name];
      try {
        localStorage.setItem('cocktail_my_ingredients', JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
  };

  const removeMyIngredient = (name: string) => {
    setMyIngredientList((prev) => {
      const updated = prev.filter((item) => item !== name);
      try {
        localStorage.setItem('cocktail_my_ingredients', JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
  };

  const toggleLikeCocktail = (cocktail: CocktailCardType) => {
    setLikedCocktails((prev) => {
      const exists = prev.some((c) => c.idDrink === cocktail.idDrink);
      const updated = exists
        ? prev.filter((c) => c.idDrink !== cocktail.idDrink)
        : [cocktail, ...prev];
      try {
        localStorage.setItem('cocktail_liked_list', JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
  };

  const isLikedCocktail = (idDrink: string) => {
    return likedCocktails.some((c) => c.idDrink === idDrink);
  };

  const setRandomCocktail = (drink: DrinkData) => {
    setRandomCocktailState(drink);
  };

  const translateName = (name: string, type: 'ingredient' | 'cocktail' = 'cocktail'): string => {
    const isEng = /^[a-zA-Z\s\-0-9']+$/.test(name);
    if (isEng) return name;

    const key = `ko-${type}-names` as keyof typeof translationData.ingredients;
    const dict = (translationData.ingredients as any)[key] || {};
    if (dict && dict[name]) {
      return dict[name];
    }
    return name;
  };

  return (
    <StoreContext.Provider
      value={{
        recentSearchValueList,
        addRecentSearchValue,
        deleteRecentSearchValue,
        resetRecentSearchValueList,
        myIngredientList,
        toggleMyIngredient,
        addMyIngredient,
        removeMyIngredient,
        randomCocktail,
        setRandomCocktail,
        translateName,
        likedCocktails,
        toggleLikeCocktail,
        isLikedCocktail,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  return useContext(StoreContext);
}
