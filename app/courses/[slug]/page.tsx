"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchCourseBySlug } from "@/lib/fetcher";
import RatingStars from "@/components/rating-stars";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseListSkeleton from "@/components/course-list-skeleton";
import EmptyState from "@/components/empty-state";
import ErrorState from "@/components/error-state";

export default function CourseDetailPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["course", slug],
    queryFn: () => fetchCourseBySlug(slug),
    enabled: Boolean(slug)
  });

  if (isLoading) {
    return (
      <div className="section-pad">
        <section className="mx-auto w-full max-w-6xl px-4">
          <CourseListSkeleton count={3} />
        </section>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="section-pad">
        <section className="mx-auto w-full max-w-6xl px-4">
          <ErrorState title="Yuklashda xatolik" description="Keyinroq qayta urinib ko'ring." />
        </section>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="section-pad">
        <section className="mx-auto w-full max-w-6xl px-4">
          <EmptyState title="Kurs topilmadi" description="Boshqa kurslarni ko'rib chiqing." />
        </section>
      </div>
    );
  }

  return (
    <div className="section-pad">
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_0.8fr]">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary">{data.category}</Badge>
              <h1 className="font-display text-3xl font-semibold md:text-4xl">
                {data.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <RatingStars rating={data.rating} />
                  <span className="text-foreground font-semibold">{data.rating}</span>
                  <span>({data.ratingCount} baho)</span>
                </div>
                <span>{data.students} talaba</span>
                <span>{data.level}</span>
                <span>Mentor: {data.instructor}</span>
              </div>
              <p className="text-lg text-muted-foreground">{data.description}</p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border bg-muted">
              <div className="aspect-[16/9] bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500 opacity-90" />
              <div className="flex items-center justify-between p-4">
                <div>
                  <p className="text-sm text-muted-foreground">Preview</p>
                  <p className="text-lg font-semibold text-foreground">
                    {data.previewTitle}
                  </p>
                </div>
                <Button variant="outline">Tomosha qilish</Button>
              </div>
            </div>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold">What you'll learn</h3>
                  <ul className="mt-4 grid gap-3 text-sm text-muted-foreground md:grid-cols-2">
                    {data.outcomes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </TabsContent>
              <TabsContent value="curriculum" className="space-y-6">
                <Accordion type="single" collapsible className="w-full">
                  {data.curriculum.map((module, index) => (
                    <AccordionItem key={module.title} value={`item-${index}`}>
                      <AccordionTrigger>{module.title}</AccordionTrigger>
                      <AccordionContent>
                        <ul className="grid gap-2 text-sm text-muted-foreground">
                          {module.lessons.map((lesson) => (
                            <li key={lesson}>{lesson}</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
              <TabsContent value="reviews" className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3">
                    <RatingStars rating={data.rating} size="lg" />
                    <div>
                      <p className="text-2xl font-semibold text-foreground">{data.rating}</p>
                      <p className="text-sm text-muted-foreground">
                        {data.ratingCount} ta baho asosida
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Mentor feedback, real loyiha va community support eng ko'p
                    e'tirof etiladi.
                  </p>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="lg:sticky lg:top-28">
            <Card className="space-y-4 p-6 shadow-soft-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Kurs narxi</p>
                  <p className="text-2xl font-semibold text-foreground">
                    {data.price.toLocaleString("uz-UZ")} so'm
                  </p>
                </div>
                {data.originalPrice ? (
                  <Badge variant="secondary" className="text-xs">
                    -{Math.round((1 - data.price / data.originalPrice) * 100)}%
                  </Badge>
                ) : null}
              </div>
              <div className="grid gap-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Darslar</span>
                  <span className="text-foreground">{data.lessons} ta</span>
                </div>
                <div className="flex justify-between">
                  <span>Davomiyligi</span>
                  <span className="text-foreground">{data.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span>Format</span>
                  <span className="text-foreground">Live + replay</span>
                </div>
              </div>
              <Button size="lg" className="w-full">
                Kursga yozilish
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                Mentor bilan suhbat
              </Button>
              <p className="text-xs text-muted-foreground">
                7 kunlik pulni qaytarish kafolati.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
