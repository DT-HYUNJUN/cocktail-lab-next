import React from 'react';
import { SearchView } from '../search-view';

interface PageProps {
  params: Promise<{ name: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { name } = await params;
  const decoded = decodeURIComponent(name);
  return {
    title: `'${decoded}' 검색 결과 - Cocktail Lab`,
  };
}

export default async function SearchResultPage({ params }: PageProps) {
  const { name } = await params;
  const decoded = decodeURIComponent(name);

  return <SearchView initialQuery={decoded} />;
}
