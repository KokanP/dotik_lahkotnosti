import { blogPosts } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Blog",
  description: "Nasveti in razmišljanja o zdravju, sprostitvi in energiji.",
};

export default function BlogPage() {
  return (
    <div className="pb-20">
      <PageHeader 
        title="Blog" 
        description="Nasveti, razmišljanja in navdih za vaše dobro počutje." 
        imageSrc="/images/headers/header-blog.jpg" 
      />

      <div className="container mx-auto px-4 max-w-4xl section-padding-sm">
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block bg-white border border-accent rounded-xl overflow-hidden hover:shadow-lg transition-all hover:border-primary/30">
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-2/5 aspect-video md:aspect-auto min-h-[250px] md:min-h-0">
                   <Image 
                     src={(post as any).featuredImage} 
                     alt={post.title}
                     fill
                     sizes="(max-width: 768px) 100vw, 40vw"
                     className="object-cover group-hover:scale-105 transition-transform duration-500"
                   />
                </div>
                <div className="p-8 md:w-3/5 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-xs text-text/50 mb-3 uppercase tracking-wider font-medium">
                    <Calendar size={14} />
                    <time>{post.date}</time>
                  </div>
                  <h2 className="font-display text-2xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-text/70 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-primary font-medium text-sm mt-auto">
                    <span>Preberi več</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
