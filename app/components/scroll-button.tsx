'use client';

import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="맨 위로 이동"
      className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-40 size-11 rounded-full bg-white text-[#FF6F2C] border border-zinc-200 shadow-lg flex items-center justify-center hover:bg-[#FF6F2C] hover:text-white transition-all active:scale-95"
    >
      <ArrowUp className="size-5" />
    </button>
  );
}

export default ScrollButton;
