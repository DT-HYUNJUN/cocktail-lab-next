'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Search, X } from 'lucide-react';
import { useStore } from '@/lib/store';

export function DesktopHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { addRecentSearchValue } = useStore();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      addRecentSearchValue(searchValue.trim());
      router.push(`/search/${encodeURIComponent(searchValue.trim())}`);
    }
  };

  const handleClear = () => {
    setSearchValue('');
    inputRef.current?.focus();
  };

  const isHome = pathname === '/';
  const isCocktail = pathname.startsWith('/cocktail');
  const isIngredient = pathname.startsWith('/ingredient');

  return (
    <div className="hidden md:block mb-8">
      {/* Top Row: Logo & Search Bar */}
      <div className="flex items-center gap-12 mb-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer group shrink-0">
          <Image
            src="/assets/icon/cocktail_lab.png"
            alt="cocktail_lab_logo"
            width={28}
            height={28}
            className="w-7 h-7 object-contain"
          />
          <span className="text-2xl font-black text-[#FF6F2C] tracking-tight">
            Cocktail Lab
          </span>
        </Link>

        {/* Search Bar */}
        <div className="w-100">
          <form
            onSubmit={handleSearchSubmit}
            className="relative flex items-center bg-[#f5f5f5] rounded-full px-3 py-1.5 border border-transparent focus-within:border-[#FF6F2C]/30 focus-within:bg-white transition-all"
          >
            <input
              ref={inputRef}
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="검색어를 입력하세요"
              className="w-full bg-transparent text-sm text-black placeholder:text-zinc-400 outline-none pl-1 pr-7"
            />
            {searchValue ? (
              <button
                type="button"
                onClick={handleClear}
                className="p-1 rounded-full text-zinc-400 hover:text-black mr-1"
              >
                <X className="size-4" />
              </button>
            ) : null}
            <button
              type="submit"
              className="p-1 text-zinc-500 hover:text-[#FF6F2C] transition-colors"
            >
              <Search className="size-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Menu Bar */}
      <div className="h-7.5 py-2.5 pb-4">
        <ul className="flex list-none p-0 m-0 gap-4">
          <li>
            <Link
              href="/"
              className={`cursor-pointer font-medium py-2 px-1 text-sm transition-all border-b-2 ${
                isHome
                  ? 'text-[#FF6F2C] border-[#FF6F2C] font-bold'
                  : 'text-black border-transparent hover:text-[#FF6F2C] hover:border-[#FF6F2C]'
              }`}
            >
              홈
            </Link>
          </li>
          <li>
            <Link
              href="/cocktail"
              className={`cursor-pointer font-medium py-2 px-1 text-sm transition-all border-b-2 ${
                isCocktail
                  ? 'text-[#FF6F2C] border-[#FF6F2C] font-bold'
                  : 'text-black border-transparent hover:text-[#FF6F2C] hover:border-[#FF6F2C]'
              }`}
            >
              칵테일
            </Link>
          </li>
          <li>
            <Link
              href="/ingredient"
              className={`cursor-pointer font-medium py-2 px-1 text-sm transition-all border-b-2 ${
                isIngredient
                  ? 'text-[#FF6F2C] border-[#FF6F2C] font-bold'
                  : 'text-black border-transparent hover:text-[#FF6F2C] hover:border-[#FF6F2C]'
              }`}
            >
              재료
            </Link>
          </li>
        </ul>
      </div>
      {/* <div className="border-b border-[#0000001f]" /> */}
    </div>
  );
}

export default DesktopHeader;
