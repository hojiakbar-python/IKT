"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { parseFiltersFromSearchParams } from "@/lib/utils";
import { useFiltersStore } from "@/store/useFiltersStore";
import SearchBar from "@/components/search-bar";
import FiltersPanel from "@/components/filters-panel";
import FiltersSheet from "@/components/filters-sheet";
import SortDropdown from "@/components/sort-dropdown";
import CoursesGrid from "@/components/courses-grid";
import FiltersSync from "@/components/filters-sync";

export default function SearchPageClient() {
  const searchParams = useSearchParams();
  const hydrateFromUrl = useFiltersStore((state) => state.hydrateFromUrl);

  useEffect(() => {
    hydrateFromUrl(parseFiltersFromSearchParams(searchParams));
  }, [searchParams, hydrateFromUrl]);

  return (
    <div className="section-pad">
      <FiltersSync />
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Qidiruv</p>
              <h1 className="font-display text-3xl font-semibold md:text-4xl">
                Kurslarni qidirish
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <FiltersSheet />
              <SortDropdown />
            </div>
          </div>
          <SearchBar placeholder="Kurs, mentor, yo'nalish..." />
          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
            <FiltersPanel />
            <CoursesGrid />
          </div>
        </div>
      </section>
    </div>
  );
}
