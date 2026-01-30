# Changelog

Vse pomembnejše spremembe projekta "Dotik lahkotnosti" bodo zabeležene v tej datoteki.

## [Unreleased] - 2026-01-29

### Dodano
- **SEO & Social:** Open Graph in Twitter metadata v `app/layout.tsx` za boljši prikaz na družbenih omrežjih.
- **Favicons:** Dodane ikone spletnega mesta (`favicon.ico`, `icon.png`, `apple-icon.png`) v `public/`.
- **Nove strani:**
  - `app/not-found.tsx`: Po meri narejena stran za napake 404.
  - `app/politika-zasebnosti/page.tsx`: Stran s politiko zasebnosti (GDPR).
- **Konfiguracija:** Dodana `netlify.toml` datoteka za kontrolo build procesa.
- **Netlify Forms Helper:** Dodana `public/form.html` za pravilno detekcijo obrazcev na Netlify v5 vtičniku.

### Spremenjeno
- **Kontaktni obrazec:**
  - Posodobljen `components/contact-form.tsx`: izboljšan UX (loading state, reset polj, časovno omejeno obvestilo o uspehu).
  - Spremenjen `fetch` cilj na `/form.html` za obvod težav z Netlify pluginom.
- **Noga (Footer):** Dodana povezava do Politike zasebnosti.
- **Vsebina:** Popravljena povezava do Instagram profila v `lib/data.ts`.
- **Odstranjeno:** Odstranjeni vsi `data-netlify` atributi iz JSX kode, da se preprečijo napake pri gradnji (build).

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
