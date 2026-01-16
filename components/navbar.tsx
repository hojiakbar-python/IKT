"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import SnowToggle from "@/components/snow-toggle";

const navLinks = [
  { href: "/", label: "Bosh sahifa" },
  { href: "/courses", label: "Kurslar" },
  { href: "/search", label: "Qidiruv" }
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/courses") {
      return pathname.startsWith("/courses");
    }
    return pathname === href;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight text-foreground"
          >
            Edulab
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium text-muted-foreground transition hover:text-foreground",
                  isActive(link.href) && "text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <SnowToggle />
          <ThemeToggle />
          <Button>Boshlash</Button>
        </div>
      </div>
    </header>
  );
}
