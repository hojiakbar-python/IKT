"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchCourses } from "@/lib/fetcher";
import { useFiltersStore } from "@/store/useFiltersStore";
import CourseCard from "@/components/course-card";
import CourseListSkeleton from "@/components/course-list-skeleton";
import EmptyState from "@/components/empty-state";
import ErrorState from "@/components/error-state";
import { useMemo } from "react";

export default function CoursesGrid() {
  const filters = useFiltersStore((state) => ({
    q: state.q,
    category: state.category,
    level: state.level,
    minPrice: state.minPrice,
    maxPrice: state.maxPrice,
    rating: state.rating,
    sort: state.sort
  }));
  const resetFilters = useFiltersStore((state) => state.resetFilters);

  const queryFilters = useMemo(() => filters, [filters]);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["courses", queryFilters],
    queryFn: () => fetchCourses(queryFilters)
  });

  if (isLoading) {
    return <CourseListSkeleton count={6} />;
  }

  if (isError) {
    return (
      <ErrorState
        title="Kurslar yuklanmadi"
        description="Internet aloqangizni tekshirib qayta urinib ko'ring."
        onAction={() => refetch()}
      />
    );
  }

  if (!data || data.length === 0) {
    return (
      <EmptyState
        title="Hech narsa topilmadi"
        description="Filtrlarni o'zgartiring yoki boshqa so'z kiriting."
        onAction={resetFilters}
      />
    );
  }

  return (
    <div className="grid items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {data.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
