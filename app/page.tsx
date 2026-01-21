import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/service-card";
import { LocationSection } from "@/components/location-section";
import { siteConfig } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 pb-0">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero.jpg" 
            alt="Manca Bračun - Dotik Lahkotnosti" 
            fill 
            sizes="100vw"
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-secondary/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent/50" />
        </div>
        
        <div className="container relative z-10 px-4 text-center pt-20">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-md leading-tight">
            Ko duša zaživi <br className="hidden md:block"/> in telo se sprosti
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light tracking-wide drop-shadow-sm">
            {siteConfig.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={siteConfig.bookingUrl} target="_blank">
              <Button className="h-14 px-8 text-base bg-white text-secondary hover:bg-accent border-none shadow-xl">
                Rezervirajte termin
              </Button>
            </Link>
            <Link href="/storitve">
              <Button variant="outline" className="h-14 px-8 text-base border-white text-white hover:bg-white/10 hover:text-white bg-transparent backdrop-blur-sm">
                Naše storitve
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
           <Image 
            src="/about.jpg" 
            alt="Manca Bračun" 
            fill 
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="order-1 md:order-2 space-y-6 pl-0 md:pl-8">
          <span className="text-primary text-sm font-bold tracking-widest uppercase">O meni</span>
          <h2 className="text-3xl md:text-5xl font-display text-secondary">
            Dobrodošli v prostor <br/> miru in sprostitve
          </h2>
          <p className="text-text/80 leading-relaxed text-lg">
            Sem Manca Bračun, maserka in energijska terapevtka. Verjamem, da se resnična sprostitev zgodi šele takrat, ko se telo in duša počutita varna.
          </p>
          <p className="text-text/80 leading-relaxed">
            Pri svojem delu ne gledam na uro, temveč na človeka. Združujem ročne tehnike, energijsko delo in občutek za sočloveka, da vam pomagam najti pot nazaj k sebi.
          </p>
          <div className="pt-4">
            <Link href="/o-meni">
              <Button variant="outline">Spoznajte mojo zgodbo</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-accent/20 section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary text-sm font-bold tracking-widest uppercase">Storitve</span>
            <h2 className="text-3xl md:text-4xl font-display text-secondary mt-3 mb-6">
              Kako vam lahko pomagam?
            </h2>
            <p className="text-text/70 text-lg">
              Izberite terapijo, ki jo vaše telo in duša najbolj potrebujeta v tem trenutku.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Masaže" 
              description="Od terapevtske do sproščujoče antistresne masaže. Dotik, ki zdravi in pomirja."
              href="/storitve#masaze"
            />
             <ServiceCard 
              title="Energijske terapije" 
              description="Reiki, hipnoterapija in energijsko čiščenje za globoko ravnovesje telesa in duha."
              href="/storitve#energija"
            />
             <ServiceCard 
              title="Preoblikovanje telesa" 
              description="Maderoterapija in limfna drenaža za boljše počutje in samozavest."
              href="/storitve#telo"
            />
          </div>
          
          <div className="text-center mt-12">
            <Link href="/storitve">
               <Button className="min-w-[200px]">Vse storitve in cenik</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials / Quote */}
      <section className="container mx-auto px-4 text-center section-padding-sm">
        <blockquote className="font-display text-2xl md:text-4xl italic text-secondary/80 max-w-4xl mx-auto leading-relaxed">
          "Ko pomagam drugim, se napolni tudi moja duša. Diham za svoje delo, čutim ga v srcu in vem, da je to moje življenjsko poslanstvo."
        </blockquote>
        <cite className="block mt-8 text-primary font-bold tracking-wide not-italic uppercase text-sm">- Manca Bračun</cite>
      </section>

      <LocationSection />
    </div>
  );
}
