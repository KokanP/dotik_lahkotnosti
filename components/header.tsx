"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-accent/50 bg-background/95 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex flex-col group relative z-50">
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
        
        {/* Mobile Toggle */}
        <Button 
          variant="ghost" 
          className="md:hidden relative z-50" 
          aria-label="Menu"
          onClick={toggleMenu}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl flex flex-col justify-center items-center gap-8 md:hidden">
            <nav className="flex flex-col items-center gap-8 text-xl font-display font-medium text-secondary">
              <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Domov</Link>
              <Link href="/o-meni" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">O meni</Link>
              <Link href="/storitve" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Storitve</Link>
              <Link href="/galerija" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Galerija</Link>
              <Link href="/blog" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Blog</Link>
              <Link href={siteConfig.bookingUrl} target="_blank" onClick={() => setIsOpen(false)}>
                <Button className="mt-4 px-12 h-12 text-lg">Naroči se</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
