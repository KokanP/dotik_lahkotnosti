# Gemini Project Context

## Status Projekta
**Datum:** 21. Januar 2026
**Faza:** Poliranje UI in optimizacija

## Zadnje Spremembe
- **Hero Sekcija:**
  - Povečan kontrast (temnejši overlay `bg-black/35`, močnejše sence).
  - Optimizacija DOM strukture (odstranjen odvečni wrapper).
  - Popravek gradienta, da ne prekriva gumbov.
- **Galerija:**
  - Popravek osveževanja slike `6.jpg` (preimenovanje v `6-sedenje.jpg`).
- **Vsebina:**
  - Popravljen kontaktni email naslov na mancabracun2020@gmail.com.
  - Posodobljen `lib/data.ts` z novimi potmi in manjšimi popravki besedila.

## Odprte Zadeve / TODO
- [ ] Preveriti hitrost nalaganja na mobilnih napravah (LCP).
- [ ] Morebitna optimizacija Google Maps (lazy loading) za odstranitev opozoril v konzoli.
- [ ] Končni pregled vseh strani pred večjim launchom.

## Opombe
- Projekt uporablja Next.js z Tailwind CSS.
- Slike se nahajajo v `public/`.
- Podatki so centralizirani v `lib/data.ts`.
