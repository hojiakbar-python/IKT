import { courses, categories, Course } from "@/lib/mock-data";

export type SortOption = "popular" | "newest" | "price_low" | "price_high";

export type CourseFilters = {
  q?: string;
  category?: string;
  level?: string;
  minPrice?: number | null;
  maxPrice?: number | null;
  rating?: number | null;
  sort?: SortOption;
};

const delay = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const normalize = (value?: string) => value?.toLowerCase().trim() ?? "";

const sortCourses = (list: Course[], sort: SortOption) => {
  const sorted = [...list];
  switch (sort) {
    case "price_low":
      return sorted.sort((a, b) => a.price - b.price);
    case "price_high":
      return sorted.sort((a, b) => b.price - a.price);
    case "newest":
      return sorted.sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    case "popular":
    default:
      return sorted.sort((a, b) => b.students - a.students);
  }
};

export async function fetchCourses(filters: CourseFilters = {}) {
  await delay(500);
  const query = normalize(filters.q);
  const category = normalize(filters.category);
  const level = normalize(filters.level);

  let filtered = courses.filter((course) => {
    const matchesQuery =
      !query ||
      course.title.toLowerCase().includes(query) ||
      course.category.toLowerCase().includes(query) ||
      course.instructor.toLowerCase().includes(query);

    const matchesCategory =
      !category || category === "all" || course.category.toLowerCase() === category;

    const matchesLevel =
      !level || level === "all" || course.level.toLowerCase() === level;

    const matchesRating = !filters.rating || course.rating >= filters.rating;

    const matchesMin =
      filters.minPrice == null || course.price >= filters.minPrice;

    const matchesMax =
      filters.maxPrice == null || course.price <= filters.maxPrice;

    return (
      matchesQuery &&
      matchesCategory &&
      matchesLevel &&
      matchesRating &&
      matchesMin &&
      matchesMax
    );
  });

  filtered = sortCourses(filtered, filters.sort ?? "popular");

  return filtered;
}

export async function fetchCourseBySlug(slug?: string) {
  await delay(400);
  return courses.find((course) => course.slug === slug);
}

export async function fetchCategories() {
  await delay(200);
  return categories;
}
