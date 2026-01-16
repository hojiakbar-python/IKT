"use client";

import { Suspense, useEffect } from "react";
import CoursesGrid from "@/components/courses-grid";
import FiltersPanel from "@/components/filters-panel";
import FiltersSheet from "@/components/filters-sheet";
import SearchBar from "@/components/search-bar";
import SortDropdown from "@/components/sort-dropdown";
import FiltersSync from "@/components/filters-sync";
import { useFiltersStore } from "@/store/useFiltersStore";
import { useSearchParams } from "next/navigation";
import { parseFiltersFromSearchParams } from "@/lib/utils";

function CoursesPageContent() {
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
              <p className="text-sm text-muted-foreground">Kurslar</p>
              <h1 className="font-display text-3xl font-semibold md:text-4xl">
                Premium kurslar katalogi
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <FiltersSheet />
              <SortDropdown />
            </div>
          </div>
          <SearchBar />
          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
            <FiltersPanel />
            <CoursesGrid />
          </div>
        </div>
      </section>
    </div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={<div className="section-pad" />}>
      <CoursesPageContent />
    </Suspense>
  );
}
