import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * 한국어 받침 유무에 따른 목적격 조사(을/를) 선택 헬퍼
 */
export function getKoreanObjectParticle(word: string): string {
  if (!word) return '을(를)';
  const lastChar = word.charCodeAt(word.length - 1);
  if (lastChar >= 0xac00 && lastChar <= 0xd7a3) {
    const hasJongseong = (lastChar - 0xac00) % 28 !== 0;
    return hasJongseong ? '을' : '를';
  }
  return '을(를)';
}
