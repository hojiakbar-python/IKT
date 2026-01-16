"use client";

import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useFiltersStore } from "@/store/useFiltersStore";
import type { SortOption } from "@/lib/fetcher";

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "popular", label: "Eng ommabop" },
  { value: "newest", label: "Eng yangi" },
  { value: "price_low", label: "Narx: pastdan" },
  { value: "price_high", label: "Narx: yuqoridan" }
];

export default function SortDropdown() {
  const sort = useFiltersStore((state) => state.sort ?? "popular");
  const setSort = useFiltersStore((state) => state.setSort);
  const activeLabel = sortOptions.find((option) => option.value === sort)?.label;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {activeLabel ?? "Saralash"}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {sortOptions.map((option) => (
          <DropdownMenuItem key={option.value} onClick={() => setSort(option.value)}>
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
