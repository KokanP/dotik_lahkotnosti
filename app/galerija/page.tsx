import { PageHeader } from "@/components/page-header";
import { galleryImages } from "@/lib/data";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerija",
  description: "Utrinki iz salona Dotik lahkotnosti. Poglejte si naš prostor in delo.",
};

export default function GalleryPage() {
  return (
    <div className="pb-20">
      <PageHeader 
        title="Galerija" 
        description="Utrinki iz našega toplega in varnega prostora." 
        imageSrc="/hero.jpg" 
      />

      <div className="container mx-auto px-4 section-padding-sm">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <div key={index} className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
              <Image
                src={src}
                alt={`Galerija slika ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
