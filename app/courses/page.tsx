import { Suspense } from "react";
import CoursesPageClient from "@/components/courses-page-client";

export default function CoursesPage() {
  return (
    <Suspense fallback={<div className="section-pad" />}>
      <CoursesPageClient />
    </Suspense>
  );
}
