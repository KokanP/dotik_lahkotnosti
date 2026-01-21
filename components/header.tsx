import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-accent/50 bg-background/95 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex flex-col group">
           <span className="font-display text-2xl font-bold tracking-tight text-secondary group-hover:text-primary transition-colors">
             {siteConfig.name}
           </span>
           <span className="text-[10px] tracking-widest text-primary uppercase">
             {siteConfig.owner}
           </span>
        </Link>
        
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
        
        <Button variant="ghost" className="md:hidden" aria-label="Menu">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
}