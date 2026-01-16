import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto w-full max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Edulab</h3>
            <p className="text-sm text-muted-foreground">
              Premium onlayn ta'lim platformasi. O'sish uchun kerakli
              resurslarni bir joyga jamladik.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-medium">Yangiliklar uchun obuna</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Input placeholder="Email manzilingiz" type="email" />
              <Button>Yuborish</Button>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span>Yordam</span>
              <span>FAQ</span>
              <span>Kontakt</span>
              <span>Blog</span>
            </div>
          </div>
        </div>
        <p className="mt-10 text-xs text-muted-foreground">
          © 2024 Edulab. Barcha huquqlar himoyalangan.
        </p>
      </div>
    </footer>
  );
}
