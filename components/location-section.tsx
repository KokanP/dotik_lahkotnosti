import Image from "next/image";
import { siteConfig } from "@/lib/data";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ContactForm } from "./contact-form";

export function LocationSection() {
  return (
    <section id="kontakt" className="section-padding bg-accent/20 scroll-mt-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info & Form */}
          <div className="space-y-8">
            <div>
              <span className="text-primary text-sm font-bold tracking-widest uppercase">Kontakt</span>
              <h2 className="text-3xl font-display mt-2 mb-6">Pišite nam ali nas obiščite</h2>
              <p className="text-text/70 mb-8">
                Veseli bomo vašega obiska v našem salonu v Tehnopolis stavbi. Za rezervacijo termina nas pokličite ali uporabite spletni obrazec.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">Lokacija</h4>
                    <p className="text-sm text-text/70">{siteConfig.location}</p>
                    <p className="text-xs text-text/50 mt-1">Brezplačno parkiranje pred stavbo</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                   <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">Telefon</h4>
                    <a href={`tel:${siteConfig.phone.replace(/ /g, '')}`} className="text-sm text-text/70 hover:text-primary transition-colors">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                 <div className="flex items-start gap-4">
                   <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">Email</h4>
                     <a href={`mailto:${siteConfig.email}`} className="text-sm text-text/70 hover:text-primary transition-colors">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                 <div className="flex items-start gap-4">
                   <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">Delovni čas</h4>
                    <p className="text-sm text-text/70">Po dogovoru (tudi popoldne)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <ContactForm />
          </div>

          {/* Map & Image */}
          <div className="space-y-6">
            <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-lg border border-white/50">
               <Image 
                 src="/images/location.jpg" 
                 alt="Stavba Tehnopolis"
                 fill
                 sizes="(max-width: 1024px) 100vw, 50vw"
                 className="object-cover"
               />
               <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 text-xs">
                 Stavba Tehnopolis
               </div>
            </div>
            
            <div className="h-[400px] w-full rounded-xl overflow-hidden shadow-lg border border-white/50 bg-white">
              <iframe 
                src="https://maps.google.com/maps?q=Tehnopolis%20Celje%2C%20Kidri%C4%8Deva%20ulica%2024a%2C%20Celje&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokacija Dotik Lahkotnosti"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
