"use client";

import { Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { useFiltersStore } from "@/store/useFiltersStore";

type SearchBarProps = {
  placeholder?: string;
};

const useDebouncedValue = (value: string, delay = 400) => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handle = window.setTimeout(() => setDebounced(value), delay);
    return () => window.clearTimeout(handle);
  }, [value, delay]);

  return debounced;
};

export default function SearchBar({ placeholder }: SearchBarProps) {
  const q = useFiltersStore((state) => state.q ?? "");
  const setQ = useFiltersStore((state) => state.setQ);
  const [value, setValue] = useState(q);
  const debounced = useDebouncedValue(value);

  useEffect(() => {
    setValue(q);
  }, [q]);

  useEffect(() => {
    setQ(debounced);
  }, [debounced, setQ]);

  const inputPlaceholder = useMemo(
    () => placeholder ?? "Kurs, mentor yoki yo'nalish",
    [placeholder]
  );

  return (
    <div className="relative">
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder={inputPlaceholder}
        className="pl-9"
        aria-label="Qidiruv"
      />
    </div>
  );
}
