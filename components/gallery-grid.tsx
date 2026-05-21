"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { GalleryImage } from "@/lib/data";
import { X, ChevronLeft, ChevronRight, Maximize2, Users, Home } from "lucide-react";

interface GalleryGridProps {
  images: GalleryImage[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState<"vse" | "manca" | "prostor">("vse");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Filter images based on selected category
  const filteredImages = activeCategory === "vse"
    ? images
    : images.filter(img => img.category === activeCategory);

  // Count helper
  const getCount = (category: "vse" | "manca" | "prostor") => {
    if (category === "vse") return images.length;
    return images.filter(img => img.category === category).length;
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      
      if (e.key === "Escape") {
        setSelectedImageIndex(null);
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, filteredImages]);

  const handlePrev = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(prev => 
      prev !== null ? (prev === 0 ? filteredImages.length - 1 : prev - 1) : null
    );
  };

  const handleNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(prev => 
      prev !== null ? (prev === filteredImages.length - 1 ? 0 : prev + 1) : null
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
        {(["vse", "manca", "prostor"] as const).map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setSelectedImageIndex(null); // Reset index on filter change
            }}
            className={`px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 flex items-center gap-2 border shadow-sm cursor-pointer
              ${activeCategory === category
                ? "bg-secondary text-white border-secondary shadow-md scale-105"
                : "bg-white text-text/80 hover:text-secondary border-accent/30 hover:border-secondary/30 hover:bg-accent/10"
              }`}
          >
            {category === "manca" && <Users className="w-4 h-4" />}
            {category === "prostor" && <Home className="w-4 h-4" />}
            <span className="capitalize">
              {category === "vse" ? "Vse" : category === "manca" ? "Manca" : "Prostor"}
            </span>
            <span className={`text-xs px-2 py-0.5 rounded-full transition-colors duration-300
              ${activeCategory === category 
                ? "bg-white/20 text-white" 
                : "bg-accent/40 text-text/60"
              }`}
            >
              {getCount(category)}
            </span>
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredImages.map((image, index) => (
          <div
            key={image.src}
            onClick={() => setSelectedImageIndex(index)}
            className="group relative aspect-square rounded-2xl overflow-hidden bg-accent/20 shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer animate-fade-in"
            style={{ 
              animationDelay: `${index * 50}ms`,
              animationFillMode: "both"
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority={index < 3}
            />
            {/* Glassmorphic Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <div className="absolute top-4 right-4 bg-white/25 backdrop-blur-md rounded-full p-2 text-white border border-white/20 transform translate-y-[-10px] group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                <Maximize2 className="w-4 h-4" />
              </div>
              <span className="text-xs uppercase tracking-widest text-accent/80 font-bold mb-1">
                {image.category === "manca" ? "Manca" : "Prostor"}
              </span>
              <p className="text-white font-medium text-lg leading-tight transform translate-y-[10px] group-hover:translate-y-0 transition-transform duration-300 drop-shadow-md">
                {image.alt}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center animate-fade-in">
          {/* Close Button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-6 right-6 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors cursor-pointer border border-white/10"
            aria-label="Zapri"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 md:left-8 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors cursor-pointer border border-white/10"
            aria-label="Prejšnja slika"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div 
            className="relative w-full h-full max-w-5xl max-h-[80vh] px-4 flex flex-col items-center justify-center"
            onClick={() => setSelectedImageIndex(null)}
          >
            <div 
              className="relative w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Prevent close on clicking image
            >
              <Image
                src={filteredImages[selectedImageIndex].src}
                alt={filteredImages[selectedImageIndex].alt}
                width={1200}
                height={1200}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl select-none"
              />
            </div>
            
            {/* Info overlay inside lightbox */}
            <div 
              className="mt-4 text-center text-white/90 space-y-1 w-full max-w-2xl px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-lg font-medium tracking-wide drop-shadow-md">
                {filteredImages[selectedImageIndex].alt}
              </p>
              <div className="flex items-center justify-center gap-3 text-xs text-white/60">
                <span className="uppercase tracking-widest font-semibold px-2 py-0.5 bg-white/10 rounded">
                  {filteredImages[selectedImageIndex].category === "manca" ? "Manca" : "Prostor"}
                </span>
                <span>•</span>
                <span>{selectedImageIndex + 1} / {filteredImages.length}</span>
              </div>
            </div>
          </div>

          {/* Right Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 md:right-8 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors cursor-pointer border border-white/10"
            aria-label="Naslednja slika"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
}
