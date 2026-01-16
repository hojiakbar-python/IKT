"use client";

import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import FiltersPanel from "@/components/filters-panel";
import { useFiltersStore } from "@/store/useFiltersStore";

export default function FiltersSheet() {
  const open = useFiltersStore((state) => state.mobileOpen);
  const setOpen = useFiltersStore((state) => state.setMobileOpen);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="lg:hidden">
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Filtrlar
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[320px] sm:w-[360px]">
        <SheetHeader>
          <SheetTitle>Filtrlar</SheetTitle>
        </SheetHeader>
        <div className="mt-6">
          <FiltersPanel variant="sheet" />
        </div>
      </SheetContent>
    </Sheet>
  );
}
