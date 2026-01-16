"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "@/lib/fetcher";
import { useFiltersStore } from "@/store/useFiltersStore";
import { Button } from "@/components/ui/button";
import { badgeVariants } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type FiltersPanelProps = {
  variant?: "sidebar" | "sheet";
};

export default function FiltersPanel({ variant = "sidebar" }: FiltersPanelProps) {
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories
  });
  const {
    category,
    level,
    minPrice,
    maxPrice,
    rating,
    setCategory,
    setLevel,
    setPriceRange,
    setRating,
    resetFilters
  } = useFiltersStore();

  return (
    <aside
      className={
        variant === "sidebar"
          ? "hidden h-fit rounded-3xl border border-border bg-card p-6 lg:block"
          : "h-fit rounded-3xl border border-border bg-card p-6"
      }
    >
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filtrlar</h2>
        <Button variant="ghost" size="sm" onClick={resetFilters}>
          Tozalash
        </Button>
      </div>
      <Accordion type="multiple" defaultValue={["category", "level", "price", "rating"]} className="mt-6 space-y-4">
        <AccordionItem value="category">
          <AccordionTrigger>Kategoriya</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap gap-2">
              {["all", ...(categories ?? [])].map((item) => (
                <button
                  key={item}
                  type="button"
                  className={cn(
                    badgeVariants({
                      variant: category === item ? "default" : "outline"
                    }),
                    "cursor-pointer capitalize"
                  )}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="level">
          <AccordionTrigger>Daraja</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap gap-2">
              {["all", "Beginner", "Intermediate", "Advanced"].map((item) => (
                <button
                  key={item}
                  type="button"
                  className={cn(
                    badgeVariants({
                      variant: level === item ? "default" : "outline"
                    }),
                    "cursor-pointer"
                  )}
                  onClick={() => setLevel(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="price">
          <AccordionTrigger>Narx oralig'i</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-3">
              <Input
                type="number"
                placeholder="Min"
                value={minPrice ?? ""}
                onChange={(event) =>
                  setPriceRange(
                    event.target.value ? Number(event.target.value) : null,
                    maxPrice ?? null
                  )
                }
              />
              <Input
                type="number"
                placeholder="Max"
                value={maxPrice ?? ""}
                onChange={(event) =>
                  setPriceRange(
                    minPrice ?? null,
                    event.target.value ? Number(event.target.value) : null
                  )
                }
              />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="rating">
          <AccordionTrigger>Reyting</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap gap-2">
              {[4.5, 4.7, 4.8, 4.9].map((value) => (
                <button
                  key={value}
                  type="button"
                  className={cn(
                    badgeVariants({
                      variant: rating === value ? "default" : "outline"
                    }),
                    "cursor-pointer"
                  )}
                  onClick={() => setRating(rating === value ? null : value)}
                >
                  {value}+ yulduz
                </button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </aside>
  );
}
