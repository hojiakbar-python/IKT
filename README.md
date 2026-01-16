# Edulab MVP

Premium online education platformasi uchun frontend MVP. Loyihada kurslar
ro'yxati, filtrlar, qidiruv, kurs detallari va zamonaviy UI/UX mavjud.

## Texnologiyalar
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui (Radix UI asosida)
- TanStack Query
- Zustand

## Asosiy imkoniyatlar
- Kurslar grid'i va batafsil sahifa
- Debounced qidiruv + URL sync (`?q=&category=&level=&sort=...`)
- Filtrlar: kategoriya, daraja, narx oralig'i, reyting
- Saralash: ommabop, yangi, narx past/yuqori
- Mobil filtrlar drawer (Sheet)
- Skeleton/empty/error state'lar
- Dark mode (class-based)

## Tuzilma
```
app/
  courses/
    [slug]/page.tsx
    page.tsx
  search/page.tsx
  layout.tsx
  page.tsx
components/
  ui/...
  course-card.tsx
  filters-panel.tsx
  filters-sheet.tsx
  search-bar.tsx
  ...
lib/
  mock-data.ts
  fetcher.ts
  utils.ts
  query-provider.tsx
store/
  useFiltersStore.ts
```

## Ishga tushirish
```
npm install
npm run dev
```

## Mock data va API simulyatsiya
- `lib/mock-data.ts` ichida 12+ kurs va 6+ kategoriya
- `lib/fetcher.ts` `setTimeout` orqali soxta API simulyatsiya qiladi
- `TanStack Query` orqali data so'raladi

## Eslatma
`components/ui/*` fayllari shadcn/ui komponentlari bo'lib, dizayn va
aksesibilty uchun moslashtirilgan.
