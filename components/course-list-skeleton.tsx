import { Card } from "@/components/ui/card";

type CourseListSkeletonProps = {
  count?: number;
};

export default function CourseListSkeleton({ count = 6 }: CourseListSkeletonProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <Card
          key={index}
          className="h-[320px] rounded-3xl border border-border bg-card p-5"
        >
          <div className="h-full animate-pulse space-y-4">
            <div className="h-24 rounded-2xl bg-muted" />
            <div className="h-4 w-3/4 rounded bg-muted" />
            <div className="h-4 w-1/2 rounded bg-muted" />
            <div className="h-10 rounded bg-muted" />
          </div>
        </Card>
      ))}
    </div>
  );
}
