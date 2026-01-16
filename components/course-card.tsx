"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import RatingStars from "@/components/rating-stars";
import type { Course } from "@/lib/mock-data";
import PriceBadge from "@/components/price-badge";

type CourseCardProps = {
  course: Course;
};

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="group flex h-[420px] flex-col overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-soft-lg">
      <div className="flex h-32 items-center justify-between bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500 px-5 py-4 text-white">
        <div>
          <p className="text-xs uppercase tracking-widest text-white/70">
            {course.category}
          </p>
          <p className="line-clamp-2 text-lg font-semibold">{course.title}</p>
        </div>
        <ArrowUpRight className="h-5 w-5 text-white/80 transition group-hover:-translate-y-1 group-hover:translate-x-1" />
      </div>
      <div className="flex flex-1 flex-col space-y-4 p-5">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <Badge variant="secondary">{course.level}</Badge>
          <span>{course.duration}</span>
        </div>
        <p className="line-clamp-3 text-sm text-muted-foreground">
          {course.description}
        </p>
        <div className="flex items-center justify-between">
          <div>
            <RatingStars rating={course.rating} />
            <p className="text-xs text-muted-foreground">
              {course.rating} · {course.ratingCount} baho
            </p>
          </div>
          <PriceBadge price={course.price} originalPrice={course.originalPrice} />
        </div>
        <div className="mt-auto flex items-center justify-between">
          <p className="text-xs text-muted-foreground">
            {course.students} talaba
          </p>
          <Button asChild size="sm">
            <Link href={`/courses/${course.slug}`}>Batafsil</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}
