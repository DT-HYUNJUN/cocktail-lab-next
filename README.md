# 🍸 Cocktail Lab (칵테일 랩)

> **TheCocktailDB API**를 활용한 모던 칵테일 레시피 탐색 & 큐레이션 웹 애플리케이션

[![CI](https://github.com/DT-HYUNJUN/cocktail-lab-next/actions/workflows/ci.yml/badge.svg)](https://github.com/DT-HYUNJUN/cocktail-lab-next/actions/workflows/ci.yml)
![Next.js](https://img.shields.io/badge/Next.js-16.3.3-black?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat&logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat&logo=vercel)

---

## 📖 목차
1. [프로젝트 소개](#-프로젝트-소개)
2. [주요 기능](#-주요-기능)
3. [기술 스택](#-기술-스택)
4. [프로젝트 구조](#-프로젝트-구조)
5. [시작 가이드](#-시작-가이드)
6. [CI/CD 파이프라인](#-cicd-파이프라인)

---

## ✨ 프로젝트 소개

**Cocktail Lab**은 전 세계의 다양한 칵테일 정보와 재료별 레시피를 손쉽게 탐색할 수 있는 큐레이션 서비스입니다.  
Next.js 16의 App Router와 React 19를 기반으로 구축되었으며, 모바일과 데스크톱 환경 모두에 최적화된 반응형 UI와 직관적인 UX를 제공합니다.

---

## 🍹 주요 기능

- 🎲 **오늘의 랜덤 칵테일**: 매일 새로운 칵테일 레시피를 추천받고 한 번의 클릭으로 새로고침 가능
- 🏷️ **카테고리 & 필터 탐색**: 알코올 유무, 카테고리(Ordinary Drink, Cocktail 등), 글라스 종류별 세분화된 탐색
- 🧪 **재료(Ingredient) 상세 정보**: 진, 럼, 보드카, 테킬라 등 베이스 주류 정보 및 해당 재료를 사용하는 칵테일 목록 제공
- 🔍 **통합 검색**: 칵테일 이름 및 재료 기반 실시간 검색 지원
- ❤️ **즐겨찾기(Like)**: 마음에 드는 칵테일을 찜하고 나만의 칵테일 리스트 관리 (로컬 영속화)
- 📱 **반응형 레이아웃**: 데스크톱 헤더 및 모바일 최적화 하단 네비게이션 바 지원

---

## 🛠 기술 스택

### Frontend
- **Framework**: Next.js 16.3.3 (App Router, Turbopack)
- **Library**: React 19.2.8
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4, Lucide React (Icons), clsx, tailwind-merge
- **State Management**: React Context API (`lib/store.tsx`) + LocalStorage

### DevOps & Infrastructure
- **CI**: GitHub Actions (Lint, Type Check, Next.js Build 검증)
- **CD / Hosting**: Vercel (자동 프로덕션 배포 및 PR Preview 환경)
- **Code Quality**: ESLint 9, Prettier

---

## 📂 프로젝트 구조

```text
cocktail-lab-next/
├── .github/
│   └── workflows/
│       └── ci.yml               # GitHub Actions CI 파이프라인
├── app/
│   ├── cocktail/
│   │   ├── [idDrink]/           # 칵테일 상세 페이지
│   │   └── page.tsx             # 칵테일 탐색/필터 페이지
│   ├── ingredient/
│   │   ├── [strIngredient]/     # 재료 상세 및 연관 칵테일 페이지
│   │   └── page.tsx             # 재료 목록 페이지
│   ├── search/
│   │   ├── [name]/              # 검색 결과 페이지
│   │   └── page.tsx             # 검색 메인 페이지
│   ├── components/              # UI 컴포넌트 (카드, 네비게이션 등)
│   ├── layout.tsx               # 루트 레이아웃 (공통 Header/Footer)
│   └── page.tsx                 # 메인 홈 페이지 (랜덤 칵테일 & 추천)
├── lib/
│   ├── api.ts                   # TheCocktailDB API 연동 및 데이터 정규화 헬퍼
│   ├── store.tsx                # 전역 상태 관리 Context (찜 목록, 상태)
│   ├── filters.ts               # 카테고리/재료/글라스 필터 상수
│   └── utils.ts                 # 공통 유틸리티 함수 (cn 등)
├── public/                      # 정적 에셋 (이미지, 아이콘)
├── next.config.ts               # Next.js 설정
├── tsconfig.json                # TypeScript 컴파일러 설정
└── package.json                 # 프로젝트 의존성 및 스크립트 정의
```

---

## 🚀 시작 가이드

### 1. 저장소 클론
```bash
git clone https://github.com/DT-HYUNJUN/cocktail-lab-next.git
cd cocktail-lab-next
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 개발 서버 실행
```bash
npm run dev
```
브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하여 결과를 확인합니다.

### 4. 스크립트 명령어
| 명령어 | 설명 |
| :--- | :--- |
| `npm run dev` | 로컬 개발 서버 실행 (Turbopack) |
| `npm run build` | 프로덕션 빌드 생성 |
| `npm run start` | 프로덕션 빌드 서버 실행 |
| `npm run lint` | ESLint 코드 정적 분석 |
| `npm run typecheck` | TypeScript 타입 컴파일 검증 (`tsc --noEmit`) |
| `npm run format` | Prettier 코드 포맷팅 적용 |

---

## 🔄 CI/CD 파이프라인

이 프로젝트는 **GitHub Actions**와 **Vercel**을 결합한 자동화 파이프라인을 운영합니다.

- **CI (GitHub Actions)**:
  - `main` 브랜치로의 `push` 또는 `pull_request` 발생 시 트리거
  - `npm run lint` (정적 분석) ➔ `npm run typecheck` (타입 검사) ➔ `npm run build` (빌드 검증)를 거쳐 코드 무결성을 검증합니다.
- **CD (Vercel)**:
  - 검증 완료 후 `main` 브랜치 머지 시 Vercel을 통해 실제 서버에 무중단 자동 배포
  - PR 생성 시 각 PR 전용 **Preview URL**을 생성하여 브랜치 단위로 사전 검수 가능
