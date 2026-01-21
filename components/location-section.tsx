import Image from "next/image";
import { siteConfig } from "@/lib/data";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ContactForm } from "./contact-form";

export function LocationSection() {
  return (
    <section className="section-padding bg-accent/20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info & Form */}
          <div className="space-y-8">
            <div>
              <span className="text-primary text-sm font-bold tracking-widest uppercase">Kontakt</span>
              <h2 className="text-3xl font-display mt-2 mb-6">Pišite nam ali nas obiščite</h2>
              <p className="text-text/70 mb-8">
                Veseli bomo vašega obiska v našem salonu v Celeia parku. Za rezervacijo termina nas pokličite ali uporabite spletni obrazec.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">Lokacija</h4>
                    <p className="text-sm text-text/70">{siteConfig.location}</p>
                    <p className="text-xs text-text/50 mt-1">Parkiranje v parkirni hiši Celeia park</p>
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
                 alt="Poslovno trgovski center Celeia park"
                 fill
                 sizes="(max-width: 1024px) 100vw, 50vw"
                 className="object-cover"
               />
               <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 text-xs">
                 Poslovno trgovski center Celeia park
               </div>
            </div>
            
            <div className="h-[400px] w-full rounded-xl overflow-hidden shadow-lg border border-white/50 bg-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2766.123456789!2d15.2654321!3d46.2345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47657962102149e1%3A0x0!2sA%C5%A1kr%C4%8Deva%20ulica%2014%2C%203000%20Celje!5e0!3m2!1ssl!2ssi!4v1600000000000!5m2!1ssl!2ssi" 
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
