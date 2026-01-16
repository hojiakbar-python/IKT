import { Suspense } from "react";
import SearchPageClient from "@/components/search-page-client";

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="section-pad" />}>
      <SearchPageClient />
    </Suspense>
  );
}
