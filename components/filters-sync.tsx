"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { buildSearchParams } from "@/lib/utils";
import { useFiltersStore } from "@/store/useFiltersStore";

export default function FiltersSync() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastQuery = useRef<string | null>(null);
  const { q, category, level, minPrice, maxPrice, rating, sort } =
    useFiltersStore();

  useEffect(() => {
    const query = buildSearchParams({
      q,
      category,
      level,
      minPrice,
      maxPrice,
      rating,
      sort
    });

    const current = searchParams.toString();
    if (query === current || query === lastQuery.current) {
      return;
    }

    lastQuery.current = query;
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }, [q, category, level, minPrice, maxPrice, rating, sort, pathname, router, searchParams]);

  return null;
}
