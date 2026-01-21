"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { Button } from "./ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-accent/50 bg-background/95 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 relative">
        {/* Logo */}
        <Link href="/" className="flex flex-col group z-50">
           <span className="font-display text-2xl font-bold tracking-tight text-secondary group-hover:text-primary transition-colors">
             {siteConfig.name}
           </span>
           <span className="text-[10px] tracking-widest text-primary uppercase">
             {siteConfig.owner}
           </span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 lg:gap-8 items-center">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors text-text/80">Domov</Link>
          <Link href="/o-meni" className="text-sm font-medium hover:text-primary transition-colors text-text/80">O meni</Link>
          <Link href="/storitve" className="text-sm font-medium hover:text-primary transition-colors text-text/80">Storitve</Link>
          <Link href="/galerija" className="text-sm font-medium hover:text-primary transition-colors text-text/80">Galerija</Link>
          <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors text-text/80">Blog</Link>
          <Link href={siteConfig.bookingUrl} target="_blank">
            <Button>Naroči se</Button>
          </Link>
        </nav>
        
        {/* Mobile Actions (Phone + Toggle) */}
        <div className="flex items-center gap-4 md:hidden z-50">
          {/* Call Button (Always Visible) */}
          <a href={`tel:${siteConfig.phone.replace(/ /g, '')}`} className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors">
            <Phone className="h-5 w-5" />
          </a>

          {/* Menu Toggle */}
          <Button 
            variant="ghost" 
            className="p-2 h-10 w-10" 
            aria-label="Menu"
            onClick={toggleMenu}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu Dropdown (Push content down style) */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-background border-b border-accent shadow-xl flex flex-col p-6 gap-6 md:hidden animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-4 text-center text-lg font-medium text-secondary">
              <Link href="/" onClick={() => setIsOpen(false)} className="py-2 hover:text-primary border-b border-accent/20">Domov</Link>
              <Link href="/o-meni" onClick={() => setIsOpen(false)} className="py-2 hover:text-primary border-b border-accent/20">O meni</Link>
              <Link href="/storitve" onClick={() => setIsOpen(false)} className="py-2 hover:text-primary border-b border-accent/20">Storitve</Link>
              <Link href="/galerija" onClick={() => setIsOpen(false)} className="py-2 hover:text-primary border-b border-accent/20">Galerija</Link>
              <Link href="/blog" onClick={() => setIsOpen(false)} className="py-2 hover:text-primary border-b border-accent/20">Blog</Link>
              <Link href={siteConfig.bookingUrl} target="_blank" onClick={() => setIsOpen(false)} className="pt-2">
                <Button className="w-full h-12 text-base shadow-none">Naroči se</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}