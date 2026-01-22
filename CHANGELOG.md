# Changelog

Vse pomembnejše spremembe projekta "Dotik lahkotnosti" bodo zabeležene v tej datoteki.

## [Unreleased] - 2026-01-21

### Dodano
- Nova datoteka `CHANGELOG.md`.
- Nova slika v galeriji: `public/images/gallery/6-sedenje.jpg` (preimenovana iz `6.jpg` za osvežitev predpomnilnika).

### Spremenjeno
- Posodobljena naslovna slika `public/hero.jpg`.
- Posodobljena vsebina bloga "Bolečine v hrbtu zaradi sedenja" v `lib/data.ts` (popravek uvoda).
- Posodobljene poti do slik v `lib/data.ts` (za `6-sedenje.jpg`).
- Popravljen kontaktni email naslov v `lib/data.ts`.
- Posodobljen `todo.txt`.
- Optimizirana "Hero" sekcija v `app/page.tsx`:
    - Izboljšan kontrast besedila (dodana senca, temnejše ozadje `bg-black/35`).
    - Popravljen spodnji preliv (gradient), da ne prekriva gumbov.
    - Poenostavljena DOM struktura za boljšo zmogljivost.
- Ustvarjena datoteka `GEMINI.md` za sledenje statusa projekta.

### Odstranjeno
- Stara slika `public/images/gallery/6.jpg`.
- Odstranjene začasne slike zaslona (`hero_picture.PNG`, `hero_picture2.PNG`).
