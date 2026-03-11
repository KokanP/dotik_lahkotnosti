# Navodila za prenos spletne strani na naročnika (Brezplačna metoda)

Ta dokument opisuje postopek, kako prenesti gostovanje spletne strani (Netlify) na naročnika, medtem ko koda ostane v varnem upravljanju razvijalca (GitHub).

## Cilj
Naročnik postane lastnik gostovanja (in morebitni plačnik v prihodnosti), razvijalec pa obdrži nadzor nad izvorno kodo in posodobitvami.

---

## 1. Korak: Priprava na GitHubu (Razvijalec)
Ta korak omogoči naročniku dostop do kode, da jo lahko poveže s svojim Netlify računom.

1.  Prijavite se v GitHub.
2.  Odprite repozitorij projekta (npr. `dotik_lahkotnosti`).
3.  Pojdite v **Settings** > **Collaborators**.
4.  Kliknite **Add people**.
5.  Vpišite GitHub uporabniško ime ali email naročnika.
6.  Naročnik bo prejel povabilo na email, ki ga mora **potrditi**.

---

## 2. Korak: Vzpostavitev strani na Netlify (Naročnik)
Ta korak opravi naročnik (ali vi v njegovem imenu na njegovem računu).

1.  Naročnik naj ustvari brezplačen račun na [Netlify.com](https://www.netlify.com/).
2.  Po prijavi naj klikne gumb **"Add new site"** > **"Import an existing project"**.
3.  Izbere naj **GitHub**.
4.  Zaradi koraka 1 bo na seznamu viden repozitorij `dotik_lahkotnosti` (ali ustrezno ime). Izbere naj tega.
5.  V nastavitvah pusti vse privzeto in klikne **"Deploy site"**.

*Rezultat:* Stran bo začela delovati na začasnem naslovu (npr. `happy-hippo-123456.netlify.app`).

---

## 3. Korak: Nastavitev Domene (Ključni trenutek)
Da se stran prikaže na pravi domeni (`mancabracun.si`), moramo domeno prestaviti s starega na nov račun.

### A) Odstranitev s starega računa (Razvijalec)
1.  Prijavite se v svoj Netlify račun.
2.  Odprite projekt `dotik_lahkotnosti`.
3.  Pojdite v **Site configuration** > **Domain management**.
4.  Ob domeni `mancabracun.si` kliknite **Options** > **Remove domain**.
5.  Potrdite odstranitev.

### B) Dodajanje na nov račun (Naročnik)
1.  Takoj po odstranitvi naj se naročnik prijavi v svoj Netlify račun.
2.  Odpre naj svojo novo stran (tisto `happy-hippo...`).
3.  Gre v **Site configuration** > **Domain management**.
4.  Klikne **"Add a domain"**.
5.  Vpiše `mancabracun.si`.
6.  Ker so DNS zapisi (A-record) že nastavljeni pri registratorju domene in kažejo na Netlify, bi moralo preverjanje uspeti skoraj takoj.
    *   *Opomba:* Če vpraša za "DNS Verification", je to normalno. Ker IP naslovi ostanejo isti, običajno ni treba spreminjati ničesar pri registratorju domene.

---

## 4. Korak: Preverjanje obrazcev (Netlify Forms)
Ker smo postavili "novo" stran, je treba preveriti, če so obrazci aktivni.

1.  Naročnik naj gre v svojem Netlify dashboardu v zavihek **Forms**.
2.  Obrazec `contact` bi moral biti viden po prvem uspešnem pošiljanju s spletne strani.
3.  **Pomembno:** V nastavitvah **Site configuration** > **Forms** > **Form notifications** naj naročnik doda svoj email naslov, da bo prejemal obvestila o novih sporočilih.

---

## 5. Korak: Zaključek (Razvijalec)
Ko nova stran deluje na domeni:

1.  Vi lahko na svojem Netlify računu stari projekt izbrišete ali arhivirate, da ne bo zmede.
2.  Na GitHubu ostaja vse enako. Vsaka vaša sprememba (`git push`) bo samodejno posodobila stran na naročnikovem računu.

Srečno!
