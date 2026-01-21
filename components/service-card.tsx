import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
}

export function ServiceCard({ title, description, href }: ServiceCardProps) {
  return (
    <Link href={href} className="group block p-8 bg-white border border-accent rounded-xl shadow-sm hover:shadow-md transition-all hover:border-primary/30 h-full">
      <h3 className="font-display text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-text/70 text-sm mb-6 leading-relaxed">{description}</p>
      <div className="flex items-center text-primary font-medium text-xs uppercase tracking-wider mt-auto">
        <span>Več o tem</span>
        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
