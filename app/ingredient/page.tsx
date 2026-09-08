'use client';

import React, { useState, useMemo } from 'react';
import {
  SlidersHorizontal,
  ChevronDown,
  Check,
  X,
  RotateCcw,
} from 'lucide-react';
import { useStore } from '@/lib/store';
import { ingredientData } from '@/lib/ingredient/ingredient.data';
import {
  IngredientFilterState,
  IngredientSortOption,
  IngredientCategory,
  AbvLevel,
  BaseSpiritGroup,
  FlavorProfile,
} from '@/lib/ingredient/ingredient.type';
import {
  filterIngredients,
  getSelectedFilterCount,
  ingredientFilterOptions,
  initialFilterState,
} from '@/lib/ingredient/ingredient.filter';
import {
  ingredientSortOptions,
  sortIngredients,
} from '@/lib/ingredient/ingredient.sort';
import { IngredientCard } from '@/app/components/ingredient-card';

export default function IngredientPage() {
  const [tabValue, setTabValue] = useState<number>(1); // 0: 나의 재료, 1: 재료
  const [openFilterDrawer, setOpenFilterDrawer] = useState<boolean>(false);
  const [openSortDrawer, setOpenSortDrawer] = useState<boolean>(false);

  const [filters, setFilters] = useState<IngredientFilterState>(initialFilterState);
  const [sortOption, setSortOption] = useState<IngredientSortOption>('NAME_ASC');

  const { myIngredientList } = useStore();

  // Filter handlers
  const toggleCategory = (category: IngredientCategory) => {
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }));
  };

  const toggleAbvLevel = (abvLevel: AbvLevel) => {
    setFilters((prev) => ({
      ...prev,
      abvLevels: prev.abvLevels.includes(abvLevel)
        ? prev.abvLevels.filter((a) => a !== abvLevel)
        : [...prev.abvLevels, abvLevel],
    }));
  };

  const toggleSpirit = (spirit: BaseSpiritGroup) => {
    setFilters((prev) => ({
      ...prev,
      baseSpiritGroups: prev.baseSpiritGroups.includes(spirit)
        ? prev.baseSpiritGroups.filter((s) => s !== spirit)
        : [...prev.baseSpiritGroups, spirit],
    }));
  };

  const toggleFlavor = (flavor: FlavorProfile) => {
    setFilters((prev) => ({
      ...prev,
      flavors: prev.flavors.includes(flavor)
        ? prev.flavors.filter((f) => f !== flavor)
        : [...prev.flavors, flavor],
    }));
  };

  const toggleCategoryGroup = () => {
    const all = ingredientFilterOptions.categories.map((c) => c.value);
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.length === all.length ? [] : all,
    }));
  };

  const toggleAbvLevelGroup = () => {
    const all = ingredientFilterOptions.abvLevels.map((a) => a.value);
    setFilters((prev) => ({
      ...prev,
      abvLevels: prev.abvLevels.length === all.length ? [] : all,
    }));
  };

  const toggleSpiritGroup = () => {
    const all = ingredientFilterOptions.baseSpiritGroup.map((s) => s.value);
    setFilters((prev) => ({
      ...prev,
      baseSpiritGroups: prev.baseSpiritGroups.length === all.length ? [] : all,
    }));
  };

  const toggleFlavorGroup = () => {
    const all = ingredientFilterOptions.flavors.map((f) => f.value);
    setFilters((prev) => ({
      ...prev,
      flavors: prev.flavors.length === all.length ? [] : all,
    }));
  };

  const resetFilters = () => {
    setFilters(initialFilterState);
  };

  const selectedFilterCount = useMemo(() => {
    return getSelectedFilterCount(filters);
  }, [filters]);

  // Compute filtered & sorted result
  const filteredResult = useMemo(() => {
    const filtered = filterIngredients(ingredientData, filters);
    return sortIngredients(filtered, sortOption);
  }, [filters, sortOption]);

  // My ingredients list from local data
  const myIngredients = useMemo(() => {
    return ingredientData.filter((i) => myIngredientList.includes(i.name));
  }, [myIngredientList]);

  return (
    <div className="space-y-4">
      {/* Tabs */}
      <div className="border-b border-[#dedede] bg-white sticky top-12 md:static z-30">
        <div className="grid grid-cols-2 text-center text-sm font-semibold">
          <button
            onClick={() => setTabValue(0)}
            className={`py-3.5 border-b-2 transition-colors ${
              tabValue === 0
                ? 'border-[#FF6F2C] text-[#FF6F2C] font-bold'
                : 'border-transparent text-zinc-500 hover:text-black'
            }`}
          >
            나의 재료 ({myIngredientList.length})
          </button>
          <button
            onClick={() => setTabValue(1)}
            className={`py-3.5 border-b-2 transition-colors ${
              tabValue === 1
                ? 'border-[#FF6F2C] text-[#FF6F2C] font-bold'
                : 'border-transparent text-zinc-500 hover:text-black'
            }`}
          >
            재료
          </button>
        </div>
      </div>

      {/* Tab 0: 나의 재료 (My Ingredients) */}
      {tabValue === 0 && (
        <div className="px-4 md:px-0 pt-4">
          {myIngredients.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[50vh] text-zinc-500 text-sm">
              <p>내가 가진 재료들을 추가해보세요!</p>
              <button
                onClick={() => setTabValue(1)}
                className="mt-3 px-4 py-2 rounded-full bg-[#FF6F2C] text-white text-xs font-bold shadow-xs hover:bg-[#E54900] transition-colors"
              >
                재료 목록 보러가기
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {myIngredients.map((ingred) => (
                <IngredientCard key={ingred.name} ingred={ingred} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tab 1: 재료 목록 (All Ingredients) */}
      {tabValue === 1 && (
        <div className="space-y-4">
          {/* Filter Header Button */}
          <div className="flex justify-end px-4 md:px-0 pb-2 border-b border-[#dedede]">
            <button
              onClick={() => setOpenFilterDrawer(true)}
              className="relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-300 hover:border-[#FF6F2C] text-xs font-semibold text-zinc-800 transition-colors"
            >
              <SlidersHorizontal className="size-3.5 text-zinc-600" />
              <span>필터</span>
              {selectedFilterCount > 0 && (
                <span className="size-4 rounded-full bg-[#FF6F2C] text-white text-[10px] flex items-center justify-center font-bold">
                  {selectedFilterCount}
                </span>
              )}
            </button>
          </div>

          {/* List Header: Total count & Sort selector */}
          <div className="flex items-center justify-between px-4 md:px-0 text-sm">
            <span className="text-xs text-zinc-600">총 {filteredResult.length}개</span>
            <div className="relative">
              <button
                onClick={() => setOpenSortDrawer(true)}
                className="flex items-center gap-1 text-xs font-semibold text-zinc-800 hover:text-[#FF6F2C] cursor-pointer"
              >
                <span>
                  {ingredientSortOptions.find((o) => o.value === sortOption)?.label || '이름순'}
                </span>
                <ChevronDown className="size-3.5" />
              </button>
            </div>
          </div>

          {/* Grid */}
          <div className="px-4 md:px-0">
            {filteredResult.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-[40vh] text-center space-y-3">
                <p className="text-sm text-zinc-500">조건에 맞는 재료가 없습니다.</p>
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 rounded-full border border-[#FF6F2C] text-[#FF6F2C] text-xs font-bold hover:bg-[#FDE8E5] transition-colors"
                >
                  필터 초기화
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {filteredResult.map((ingred) => (
                  <IngredientCard key={ingred.name} ingred={ingred} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Filter Bottom Drawer / Modal */}
      {openFilterDrawer && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[85vh] flex flex-col bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-300">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-4 border-b border-zinc-200 shrink-0">
              <button
                onClick={() => setOpenFilterDrawer(false)}
                className="p-1 text-zinc-500 hover:text-black"
              >
                <X className="size-5" />
              </button>
              <h3 className="text-base font-bold text-black">필터</h3>
              <div className="w-6" />
            </div>

            {/* Drawer Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* 카테고리 */}
              <div className="p-3 rounded-lg bg-[#F7F7F7] space-y-2">
                <div
                  onClick={toggleCategoryGroup}
                  className="flex items-center gap-2 cursor-pointer select-none"
                >
                  <div
                    className={`size-4 rounded-full flex items-center justify-center border ${
                      filters.categories.length === ingredientFilterOptions.categories.length
                        ? 'bg-[#FF6F2C] border-[#FF6F2C] text-white'
                        : 'border-zinc-300 bg-white'
                    }`}
                  >
                    {filters.categories.length === ingredientFilterOptions.categories.length && (
                      <Check className="size-3" />
                    )}
                  </div>
                  <span className="text-sm font-bold text-black">카테고리</span>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {ingredientFilterOptions.categories.map((category) => {
                    const isSelected = filters.categories.includes(category.value);
                    return (
                      <button
                        key={category.value}
                        onClick={() => toggleCategory(category.value)}
                        className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${
                          isSelected
                            ? 'bg-[#FF6F2C] text-white font-bold'
                            : 'bg-white border border-zinc-300 text-zinc-700'
                        }`}
                      >
                        {category.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 도수 */}
              <div className="p-3 rounded-lg bg-[#F7F7F7] space-y-2">
                <div
                  onClick={toggleAbvLevelGroup}
                  className="flex items-center gap-2 cursor-pointer select-none"
                >
                  <div
                    className={`size-4 rounded-full flex items-center justify-center border ${
                      filters.abvLevels.length === ingredientFilterOptions.abvLevels.length
                        ? 'bg-[#FF6F2C] border-[#FF6F2C] text-white'
                        : 'border-zinc-300 bg-white'
                    }`}
                  >
                    {filters.abvLevels.length === ingredientFilterOptions.abvLevels.length && (
                      <Check className="size-3" />
                    )}
                  </div>
                  <span className="text-sm font-bold text-black">도수</span>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {ingredientFilterOptions.abvLevels.map((abv) => {
                    const isSelected = filters.abvLevels.includes(abv.value);
                    return (
                      <button
                        key={abv.value}
                        onClick={() => toggleAbvLevel(abv.value)}
                        className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${
                          isSelected
                            ? 'bg-[#FF6F2C] text-white font-bold'
                            : 'bg-white border border-zinc-300 text-zinc-700'
                        }`}
                      >
                        {abv.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 베이스 */}
              <div className="p-3 rounded-lg bg-[#F7F7F7] space-y-2">
                <div
                  onClick={toggleSpiritGroup}
                  className="flex items-center gap-2 cursor-pointer select-none"
                >
                  <div
                    className={`size-4 rounded-full flex items-center justify-center border ${
                      filters.baseSpiritGroups.length ===
                      ingredientFilterOptions.baseSpiritGroup.length
                        ? 'bg-[#FF6F2C] border-[#FF6F2C] text-white'
                        : 'border-zinc-300 bg-white'
                    }`}
                  >
                    {filters.baseSpiritGroups.length ===
                      ingredientFilterOptions.baseSpiritGroup.length && (
                      <Check className="size-3" />
                    )}
                  </div>
                  <span className="text-sm font-bold text-black">베이스</span>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {ingredientFilterOptions.baseSpiritGroup.map((spirit) => {
                    const isSelected = filters.baseSpiritGroups.includes(spirit.value);
                    return (
                      <button
                        key={spirit.value}
                        onClick={() => toggleSpirit(spirit.value)}
                        className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${
                          isSelected
                            ? 'bg-[#FF6F2C] text-white font-bold'
                            : 'bg-white border border-zinc-300 text-zinc-700'
                        }`}
                      >
                        {spirit.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 맛 */}
              <div className="p-3 rounded-lg bg-[#F7F7F7] space-y-2">
                <div
                  onClick={toggleFlavorGroup}
                  className="flex items-center gap-2 cursor-pointer select-none"
                >
                  <div
                    className={`size-4 rounded-full flex items-center justify-center border ${
                      filters.flavors.length === ingredientFilterOptions.flavors.length
                        ? 'bg-[#FF6F2C] border-[#FF6F2C] text-white'
                        : 'border-zinc-300 bg-white'
                    }`}
                  >
                    {filters.flavors.length === ingredientFilterOptions.flavors.length && (
                      <Check className="size-3" />
                    )}
                  </div>
                  <span className="text-sm font-bold text-black">맛</span>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {ingredientFilterOptions.flavors.map((flavor) => {
                    const isSelected = filters.flavors.includes(flavor.value);
                    return (
                      <button
                        key={flavor.value}
                        onClick={() => toggleFlavor(flavor.value)}
                        className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${
                          isSelected
                            ? 'bg-[#FF6F2C] text-white font-bold'
                            : 'bg-white border border-zinc-300 text-zinc-700'
                        }`}
                      >
                        {flavor.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="p-4 border-t border-zinc-200 flex items-center gap-3 bg-white shrink-0">
              <button
                onClick={resetFilters}
                className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl border border-zinc-300 hover:bg-zinc-100 text-xs font-semibold text-zinc-800 transition-colors"
              >
                <RotateCcw className="size-3.5" />
                <span>초기화</span>
              </button>
              <button
                onClick={() => setOpenFilterDrawer(false)}
                className="flex-1 py-3 rounded-xl bg-[#FF6F2C] hover:bg-[#E54900] text-white text-xs font-bold transition-colors shadow-md"
              >
                {filteredResult.length}개 상품보기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sort Drawer / Modal */}
      {openSortDrawer && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="w-full max-w-sm bg-white rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl space-y-4 animate-in slide-in-from-bottom duration-200">
            <h3 className="text-base font-bold text-black pb-2 border-b border-zinc-200">
              정렬 기준
            </h3>
            <div className="space-y-2">
              {ingredientSortOptions.map((option) => (
                <div
                  key={option.value}
                  onClick={() => {
                    setSortOption(option.value);
                    setOpenSortDrawer(false);
                  }}
                  className={`flex items-center justify-between p-3 rounded-xl cursor-pointer hover:bg-zinc-50 ${
                    sortOption === option.value
                      ? 'text-[#FF6F2C] font-bold bg-[#FDE8E5]/50'
                      : 'text-zinc-700'
                  }`}
                >
                  <span className="text-sm">{option.label}</span>
                  {sortOption === option.value && <Check className="size-4" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
