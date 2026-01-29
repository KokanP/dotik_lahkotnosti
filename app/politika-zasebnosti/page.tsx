import { siteConfig } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politika zasebnosti",
  description: "Politika zasebnosti in varstvo osebnih podatkov salona Dotik lahkotnosti.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container section-padding max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-8">Politika zasebnosti</h1>
      
      <div className="prose prose-stone max-w-none text-text/80">
        <p>
          V salonu <strong>{siteConfig.name}</strong> (v nadaljevanju: ponudnik) spoštujemo vašo zasebnost in se zavezujemo, da bomo vaše osebne podatke varovali skrbno in v skladu z veljavno zakonodajo (GDPR).
        </p>

        <h3 className="text-xl font-bold text-secondary mt-8 mb-4">1. Upravljavec podatkov</h3>
        <p>
          Upravljavec osebnih podatkov je:<br />
          <strong>{siteConfig.owner}</strong><br />
          {siteConfig.location}<br />
          Email: {siteConfig.email}
        </p>

        <h3 className="text-xl font-bold text-secondary mt-8 mb-4">2. Katere podatke zbiramo?</h3>
        <p>Preko spletne strani zbiramo naslednje podatke:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Kontaktni obrazec:</strong> Ime in priimek, elektronski naslov (email) in vsebino vašega sporočila. Te podatke potrebujemo, da vam lahko odgovorimo na vaše povpraševanje.</li>
          <li><strong>Piškotki:</strong> Spletna stran lahko uporablja nujne piškotke za delovanje strani. Ne uporabljamo sledilnih piškotkov za trženje brez vaše privolitve.</li>
        </ul>

        <h3 className="text-xl font-bold text-secondary mt-8 mb-4">3. Namen obdelave</h3>
        <p>Vaše podatke uporabljamo izključno za:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Komunikacijo z vami glede vašega povpraševanja ali rezervacije termina.</li>
          <li>Izboljšanje uporabniške izkušnje na spletni strani.</li>
        </ul>

        <h3 className="text-xl font-bold text-secondary mt-8 mb-4">4. Hramba podatkov</h3>
        <p>
          Vaše podatke hranimo le toliko časa, kolikor je potrebno za izpolnitev namena, zaradi katerega so bili zbrani (npr. dokler ne odgovorimo na vaše sporočilo ali dokler traja poslovno sodelovanje), oziroma skladno z zakonskimi roki.
        </p>

        <h3 className="text-xl font-bold text-secondary mt-8 mb-4">5. Posredovanje tretjim osebam</h3>
        <p>
          Vaših osebnih podatkov ne prodajamo, ne izmenjujemo in ne posredujemo tretjim osebam, razen če to zahteva zakon ali če je to nujno za delovanje spletne strani (npr. ponudnik gostovanja).
        </p>

        <h3 className="text-xl font-bold text-secondary mt-8 mb-4">6. Vaše pravice</h3>
        <p>V skladu z uredbo GDPR imate pravico do:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Dostopa do svojih osebnih podatkov.</li>
          <li>Popravka netočnih podatkov.</li>
          <li>Izbrisa podatkov ("pravica do pozabe"), kadar ni zakonske obveznosti za hrambo.</li>
          <li>Omejitve obdelave.</li>
        </ul>
        <p className="mt-4">
          Za uveljavljanje svojih pravic nas lahko kadarkoli kontaktirate na: <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">{siteConfig.email}</a>.
        </p>

        <h3 className="text-xl font-bold text-secondary mt-8 mb-4">7. Spremembe politike</h3>
        <p>
          Pridržujemo si pravico do spremembe te politike zasebnosti. Spremembe bodo objavljene na tej strani.
        </p>
        
        <p className="text-sm text-text/50 mt-8">Zadnja posodobitev: {new Date().toLocaleDateString('sl-SI')}</p>
      </div>
    </div>
  );
}
