import type { Metadata } from 'next';
import './globals.css';
import { StoreProvider } from '@/lib/store';
import { Toaster } from '@/app/components/ui/toast';
import { DesktopHeader } from '@/app/components/desktop-header';
import { TopNavbar } from '@/app/components/top-navbar';
import { BottomNavbar } from '@/app/components/bottom-navbar';
import { ScrollButton } from '@/app/components/scroll-button';

export const metadata: Metadata = {
  title: 'Cocktail Lab (칵테일 랩) - 다양한 칵테일 정보 검색 및 탐색',
  description:
    '칵테일 이름, 카테고리, 재료 기반으로 원하는 칵테일을 검색하고 상세 정보를 확인할 수 있는 서비스',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="h-full">
      <body className="min-h-full flex flex-col bg-white text-zinc-900 font-sans antialiased">
        <StoreProvider>
          {/* Mobile Top Bar */}
          <TopNavbar />

          <div className="mx-auto w-full max-w-5xl px-0 md:px-6 pt-0 md:pt-6 flex-1 pb-24 md:pb-12">
            {/* Desktop Header */}
            <DesktopHeader />

            {/* Main Content */}
            <main>{children}</main>
          </div>

          {/* Floating Action Elements */}
          <ScrollButton />
          <BottomNavbar />

          {/* shadcn/ui Toaster */}
          <Toaster />
        </StoreProvider>
      </body>
    </html>
  );
}
