import { PageHeader } from "@/components/page-header";
import { galleryImages } from "@/lib/data";
import { GalleryGrid } from "@/components/gallery-grid";
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

      <div className="section-padding-sm">
        <GalleryGrid images={galleryImages} />
      </div>
    </div>
  );
}

