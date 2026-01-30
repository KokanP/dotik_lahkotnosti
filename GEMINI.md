# Gemini Project Context

## Status Projekta
**Datum:** 29. Januar 2026
**Faza:** Produkcija in vzdrževanje

## Zadnje Spremembe
- **Netlify Forms:** Uspešna implementacija preko `public/form.html` (obvod za Next.js Plugin v5).
- **SEO & Social:** Dodane Open Graph in Twitter meta oznake ter Favicons.
- **Vsebina:** Popravljena Instagram povezava na `dotik.lahkotnosti`.
- **Nove Strani:**
  - `404` (Not Found) po meri.
  - `Politika zasebnosti` (GDPR skladnost).
- **UX:** Izboljšan odziv kontaktnega obrazca (reset + timeout sporočila).

## Odprte Zadeve / TODO
- [ ] Preveriti hitrost nalaganja na mobilnih napravah (LCP).
- [ ] Morebitna optimizacija Google Maps (lazy loading) za odstranitev opozoril v konzoli.
- [ ] Redno posodabljanje blog vsebin.

## Opombe
- Projekt uporablja Next.js z Tailwind CSS.
- **Obrazci:** Za delovanje na Netlifyju se uporablja statična datoteka `public/form.html`. Ne spreminjaj `action` poti v `ContactForm` komponenti!
- Podatki so centralizirani v `lib/data.ts`.
