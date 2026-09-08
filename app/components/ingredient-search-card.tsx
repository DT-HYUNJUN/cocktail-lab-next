'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { getKoreanIngredientName } from '@/lib/i18n/translate';

interface IngredientSearchCardProps {
  name: string;
}

export function IngredientSearchCard({ name }: IngredientSearchCardProps) {
  const router = useRouter();

  const handleClickCard = () => {
    router.push(`/ingredient/${encodeURIComponent(name)}`);
  };

  const koreanName = getKoreanIngredientName(name);

  return (
    <div
      onClick={handleClickCard}
      className="group pt-6 overflow-hidden rounded-xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)] active:scale-95 transition-all duration-200 cursor-pointer select-none"
    >
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#f4f4f5] flex items-center justify-center p-3">
        <Image
          src={`https://www.thecocktaildb.com/images/ingredients/${encodeURIComponent(name)}-Medium.png`}
          alt={name}
          width={300}
          height={400}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-4">
        <h3 className="text-base font-bold text-black group-hover:text-[#FF6F2C] transition-colors duration-300 truncate mb-1">
          {koreanName}
        </h3>
        {koreanName !== name && (
          <p className="text-xs text-zinc-400 truncate">{name}</p>
        )}
      </div>
    </div>
  );
}

export default IngredientSearchCard;
