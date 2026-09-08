'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { ArrowLeft, Search, X } from 'lucide-react';
import { useStore } from '@/lib/store';

export function TopNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { addRecentSearchValue } = useStore();

  const isHome = pathname === '/';
  const isSearch = pathname.startsWith('/search');

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

  return (
    <div className="md:hidden sticky top-0 z-40 w-full h-12 bg-white border-b border-[#dedede] px-4 flex items-center justify-between">
      {/* Left */}
      <div className="flex items-center">
        {isHome ? (
          <Link href="/" className="flex items-center gap-1 cursor-pointer">
            <Image
              src="/assets/icon/cocktail_lab.png"
              alt="cocktail_lab_logo"
              width={24}
              height={24}
              className="w-6 h-6 object-contain"
            />
            <span className="text-base font-bold text-[#FF6F2C]">Cocktail Lab</span>
          </Link>
        ) : (
          <button
            onClick={() => router.back()}
            className="p-1 -ml-1 text-black hover:text-[#FF6F2C] transition-colors"
          >
            <ArrowLeft className="size-5" />
          </button>
        )}
      </div>

      {/* Center - Search input on /search */}
      {isSearch && (
        <div className="flex-1 mx-2">
          <form
            onSubmit={handleSearchSubmit}
            className="relative flex items-center bg-[#f5f5f5] rounded-full px-3 py-1"
          >
            <input
              ref={inputRef}
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="검색어를 입력하세요"
              className="w-full bg-transparent text-xs text-black placeholder:text-zinc-400 outline-none pr-6"
            />
            {searchValue ? (
              <button
                type="button"
                onClick={handleClear}
                className="absolute right-2 p-0.5 text-zinc-400"
              >
                <X className="size-3.5" />
              </button>
            ) : null}
          </form>
        </div>
      )}

      {/* Right - Search button */}
      <div>
        {!isSearch && (
          <Link
            href="/search"
            className="p-1 text-zinc-700 hover:text-[#FF6F2C] transition-colors flex items-center"
          >
            <Search className="size-5" />
          </Link>
        )}
      </div>
    </div>
  );
}

export default TopNavbar;
