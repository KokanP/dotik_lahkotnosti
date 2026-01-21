import { services, siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles, Calendar } from "lucide-react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Storitve in Cenik",
  description: "Celostna ponudba masaž, energijskih terapij in preoblikovanja telesa.",
};

const categoryIds: Record<string, string> = {
  "Osebna rast in terapije": "energija",
  "Masaže telesa": "masaze",
  "Terapevtski tretmaji": "terapevtski",
  "Maderoterapija": "maderoterapija",
  "Limfna drenaža": "limfna",
  "Oblikovanje telesa": "telo",
  "Otroške in nosečniške masaže": "otroske",
  "Posebne storitve in Dodatki": "posebne",
};

export default function ServicesPage() {
  return (
    <div className="pb-20">
      <PageHeader 
        title="Storitve in Cenik" 
        description="Izberite pot do boljšega počutja. Vsaka terapija je prilagojena vašim potrebam."
        imageSrc="/images/headers/header-services.jpg"
      />

      <div className="container mx-auto px-4 max-w-4xl space-y-20 section-padding-sm">
        {services.map((category, index) => (
          <div key={index} id={categoryIds[category.category] || category.category} className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px bg-accent flex-1"></div>
              <h2 className="font-display text-3xl font-bold text-secondary text-center px-4 shrink-0">
                {category.category}
              </h2>
              <div className="h-px bg-accent flex-1"></div>
            </div>

            {(category as any).note && (
               <div className="text-center mb-8">
                 <span className="text-primary font-medium bg-primary/5 py-2 px-6 rounded-full inline-block">
                   {(category as any).note}
                 </span>
               </div>
            )}

            <div className="grid gap-6">
              {category.items.map((item: any, itemIndex) => (
                <div key={itemIndex} className="bg-white border border-accent rounded-xl p-6 hover:shadow-md transition-shadow group">
                  <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-2">
                    <div>
                      <h3 className="font-bold text-lg text-secondary group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-text/70 text-sm mt-1">{item.description}</p>
                    </div>
                    {(item.price || item.duration) && (
                      <div className="text-right shrink-0 bg-accent/20 px-4 py-2 rounded-lg flex flex-col items-end min-w-[100px]">
                        {item.price && <div className="font-bold text-secondary">{item.price}</div>}
                        {item.duration && <div className="text-xs text-text/60 mt-1">{item.duration}</div>}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-primary/10 rounded-2xl p-8 md:p-12 text-center mt-20 border border-primary/20">
          <Sparkles className="mx-auto text-primary mb-4" size={32} />
          <h3 className="font-display text-2xl font-bold text-secondary mb-4">Ste pripravljeni na sprostitev?</h3>
          <p className="text-text/70 mb-8 max-w-lg mx-auto">
            Rezervirajte svoj termin preprosto preko spleta ali me pokličite za posvet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href={siteConfig.bookingUrl} target="_blank">
               <Button className="h-12 px-8 w-full sm:w-auto">
                 <Calendar className="mr-2 h-4 w-4" />
                 Spletno naročanje
               </Button>
             </Link>
             <Link href={`tel:${siteConfig.phone.replace(/ /g, '')}`}>
               <Button variant="outline" className="h-12 px-8 w-full sm:w-auto">
                 Pokličite {siteConfig.phone}
               </Button>
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
