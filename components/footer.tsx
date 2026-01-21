import { siteConfig } from "@/lib/data";
import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-accent/30 pt-16 pb-8">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 mb-12">
        <div>
          <h3 className="font-display text-xl font-bold text-secondary mb-4">{siteConfig.name}</h3>
          <p className="text-text/70 mb-4 max-w-xs text-sm leading-relaxed">
            {siteConfig.slogan}
          </p>
          <div className="flex gap-4">
            <Link href={siteConfig.socials.facebook} target="_blank" className="p-2 bg-white rounded-full text-secondary hover:text-primary transition-colors shadow-sm">
              <Facebook size={20} />
            </Link>
            <Link href={siteConfig.socials.instagram} target="_blank" className="p-2 bg-white rounded-full text-secondary hover:text-primary transition-colors shadow-sm">
              <Instagram size={20} />
            </Link>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-secondary mb-4 uppercase text-xs tracking-wider">Povezave</h4>
          <ul className="space-y-2 text-sm text-text/70">
            <li><Link href="/" className="hover:text-primary transition-colors">Domov</Link></li>
            <li><Link href="/o-meni" className="hover:text-primary transition-colors">O meni</Link></li>
            <li><Link href="/storitve" className="hover:text-primary transition-colors">Storitve in Cenik</Link></li>
            <li><Link href="/galerija" className="hover:text-primary transition-colors">Galerija</Link></li>
            <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-secondary mb-4 uppercase text-xs tracking-wider">Kontakt</h4>
          <ul className="space-y-3 text-sm text-text/70">
            <li className="flex items-start gap-3">
              <MapPin className="text-primary mt-1 shrink-0" size={18} />
              <span>{siteConfig.location}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-primary shrink-0" size={18} />
              <a href={`tel:${siteConfig.phone.replace(/ /g, '')}`} className="hover:text-primary transition-colors">{siteConfig.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-primary shrink-0" size={18} />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors">{siteConfig.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-secondary/10 pt-8 text-center text-xs text-text/50">
        <p>&copy; {new Date().getFullYear()} {siteConfig.name}. Vse pravice pridržane.</p>
      </div>
    </footer>
  );
}