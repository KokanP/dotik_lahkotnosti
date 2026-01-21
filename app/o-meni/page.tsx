import { bioData } from "@/lib/data";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "O meni",
  description: "Spoznajte Manco Bračun, certificirano maserka in energijska terapevtka.",
};

export default function AboutPage() {
  return (
    <div className="pb-20">
      <PageHeader 
        title={bioData.title}
        description="Moje delo ni le poklic, ampak klic srca."
        imageSrc="/images/headers/header-about.jpg"
      />

      <div className="container mx-auto px-4 section-padding-sm">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 text-lg text-text/80 leading-relaxed">
            {bioData.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            
            <div className="bg-secondary/5 p-8 rounded-2xl mt-8 border border-secondary/10">
              <h3 className="font-display text-2xl font-bold text-secondary mb-4">Moj pristop</h3>
              <p className="italic text-secondary/80">"{bioData.approach}"</p>
            </div>
          </div>
          
          <div className="relative space-y-8">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
               <Image 
                src="/about.jpg" 
                alt={bioData.name}
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            
            <div>
              <h3 className="font-display text-2xl font-bold text-secondary mb-6">Znanja in Certifikati</h3>
              <ul className="space-y-4">
                {bioData.certificates.map((cert, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                    <span className="text-text/80">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
