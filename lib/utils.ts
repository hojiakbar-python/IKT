import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { SortOption } from "@/lib/fetcher";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type FiltersFromUrl = {
  q?: string;
  category?: string;
  level?: string;
  minPrice?: number | null;
  maxPrice?: number | null;
  rating?: number | null;
  sort?: SortOption;
};

export const parseFiltersFromSearchParams = (searchParams: {
  get: (key: string) => string | null;
}): FiltersFromUrl => {
  const q = searchParams.get("q") ?? "";
  const category = searchParams.get("category") ?? "all";
  const level = searchParams.get("level") ?? "all";
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  const rating = searchParams.get("rating");
  const sort = (searchParams.get("sort") ?? "popular") as SortOption;

  return {
    q,
    category,
    level,
    minPrice: minPrice ? Number(minPrice) : null,
    maxPrice: maxPrice ? Number(maxPrice) : null,
    rating: rating ? Number(rating) : null,
    sort
  };
};

export const buildSearchParams = (filters: FiltersFromUrl) => {
  const params = new URLSearchParams();
  if (filters.q) params.set("q", filters.q);
  if (filters.category && filters.category !== "all") {
    params.set("category", filters.category);
  }
  if (filters.level && filters.level !== "all") {
    params.set("level", filters.level);
  }
  if (filters.minPrice != null) {
    params.set("minPrice", String(filters.minPrice));
  }
  if (filters.maxPrice != null) {
    params.set("maxPrice", String(filters.maxPrice));
  }
  if (filters.rating != null) {
    params.set("rating", String(filters.rating));
  }
  if (filters.sort && filters.sort !== "popular") {
    params.set("sort", filters.sort);
  }
  return params.toString();
};
