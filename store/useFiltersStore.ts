import { create } from "zustand";
import type { CourseFilters, SortOption } from "@/lib/fetcher";

type FiltersState = CourseFilters & {
  mobileOpen: boolean;
  setQ: (value: string) => void;
  setCategory: (value: string) => void;
  setLevel: (value: string) => void;
  setPriceRange: (minPrice: number | null, maxPrice: number | null) => void;
  setRating: (value: number | null) => void;
  setSort: (value: SortOption) => void;
  setMobileOpen: (value: boolean) => void;
  resetFilters: () => void;
  hydrateFromUrl: (filters: CourseFilters) => void;
};

const defaultState: CourseFilters = {
  q: "",
  category: "all",
  level: "all",
  minPrice: null,
  maxPrice: null,
  rating: null,
  sort: "popular"
};

export const useFiltersStore = create<FiltersState>((set) => ({
  ...defaultState,
  mobileOpen: false,
  setQ: (value) => set({ q: value }),
  setCategory: (value) => set({ category: value }),
  setLevel: (value) => set({ level: value }),
  setPriceRange: (minPrice, maxPrice) => set({ minPrice, maxPrice }),
  setRating: (value) => set({ rating: value }),
  setSort: (value) => set({ sort: value }),
  setMobileOpen: (value) => set({ mobileOpen: value }),
  resetFilters: () => set({ ...defaultState }),
  hydrateFromUrl: (filters) =>
    set((state) => ({
      ...state,
      ...defaultState,
      ...filters
    }))
}));
