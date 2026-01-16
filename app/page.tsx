import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  return (
    <div className="section-pad">
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <Badge className="w-fit" variant="secondary">
              <Sparkles className="mr-2 h-4 w-4" />
              Premium online ta'lim platformasi
            </Badge>
            <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
              Karyerangizni tezlashtiradigan real loyihalar va mentorlik.
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Edulab yordamida yangi kasbni 3 oyda o'zlashtiring. Kuchli
              o'quv reja, mentorlar va hamjamiyat bir joyda.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="shadow-soft-lg">
                Boshlash
              </Button>
              <Button variant="outline" size="lg" className="group">
                Kurslarni ko'rish
                <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div>
                <p className="text-xl font-semibold text-foreground">18k+</p>
                <p>Faol talabalar</p>
              </div>
              <div>
                <p className="text-xl font-semibold text-foreground">120+</p>
                <p>Premium kurslar</p>
              </div>
              <div>
                <p className="text-xl font-semibold text-foreground">4.9</p>
                <p>O'rtacha baho</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft-lg">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Haftalik dastur</p>
                  <p className="text-xl font-semibold text-foreground">
                    Product Design Sprint
                  </p>
                </div>
                <Badge variant="outline">Yangi</Badge>
              </div>
              <div className="rounded-2xl bg-muted p-4">
                <p className="text-sm text-muted-foreground">Bugungi dars</p>
                <p className="text-lg font-semibold text-foreground">
                  Design critique va portfolio review
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-border bg-background p-4">
                  <p className="text-sm text-muted-foreground">Live sessiya</p>
                  <p className="text-lg font-semibold">20:00, Payshanba</p>
                </div>
                <div className="rounded-2xl border border-border bg-background p-4">
                  <p className="text-sm text-muted-foreground">Mentor</p>
                  <p className="text-lg font-semibold">Aziza Iskandar</p>
                </div>
              </div>
              <Link
                href="/courses"
                className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
              >
                Kurslarga o'tish <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
