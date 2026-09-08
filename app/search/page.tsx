import React from 'react';
import { SearchView } from './search-view';

export const metadata = {
  title: '검색 - Cocktail Lab',
  description: '칵테일 및 재료 검색',
};

export default function SearchPage() {
  return <SearchView initialQuery="" />;
}
