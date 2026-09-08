'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Wine, GlassWater } from 'lucide-react';

export function BottomNavbar() {
  const pathname = usePathname();

  // Hide on search page as in original project
  if (pathname.startsWith('/search')) {
    return null;
  }

  const isHome = pathname === '/';
  const isCocktail = pathname.startsWith('/cocktail');
  const isIngredient = pathname.startsWith('/ingredient');

  const tabs = [
    { label: '홈', href: '/', isActive: isHome, icon: Home },
    { label: '칵테일', href: '/cocktail', isActive: isCocktail, icon: Wine },
    { label: '재료', href: '/ingredient', isActive: isIngredient, icon: GlassWater },
  ];

  return (
    <div className="md:hidden fixed bottom-[15px] left-0 right-0 mx-auto w-[234px] h-[52px] bg-white rounded-full z-50 flex items-center justify-center p-1 shadow-[0_2px_6px_rgba(0,0,0,0.2)]">
      <div className="flex w-full h-full items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`relative flex flex-col items-center justify-center w-[74px] h-[44px] rounded-full transition-all duration-200 ${
                tab.isActive ? 'bg-[#e8e8ff] text-black font-semibold' : 'text-zinc-500 hover:text-black'
              }`}
            >
              <Icon className="size-5 mb-0.5" />
              <span className="text-[11px] leading-tight">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default BottomNavbar;
