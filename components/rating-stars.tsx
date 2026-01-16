"use client";

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type RatingStarsProps = {
  rating: number;
  size?: "sm" | "md" | "lg";
};

const sizeMap = {
  sm: "h-3 w-3",
  md: "h-4 w-4",
  lg: "h-5 w-5"
};

export default function RatingStars({ rating, size = "md" }: RatingStarsProps) {
  const stars = Array.from({ length: 5 }).map((_, index) => {
    const fill =
      rating >= index + 1 ? "text-amber-400" : "text-muted-foreground";
    return <Star key={index} className={cn(sizeMap[size], fill)} />;
  });

  return <div className="flex items-center gap-1">{stars}</div>;
}
