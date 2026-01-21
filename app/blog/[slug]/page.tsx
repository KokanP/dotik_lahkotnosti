import { blogPosts } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import ReactMarkdown from "react-markdown";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pb-20">
      <PageHeader 
        title={post.title}
        imageSrc={(post as any).featuredImage}
      />
      
      <div className="container mx-auto px-4 max-w-3xl pt-12">
        <Link href="/blog" className="inline-flex items-center text-sm text-text/60 hover:text-primary mb-8 transition-colors group">
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Nazaj na blog
        </Link>
        
        <article>
          <header className="mb-10 border-b border-accent pb-8">
            <div className="flex items-center gap-2 text-sm text-primary font-medium mb-2 uppercase tracking-wider">
               <Calendar size={16} />
               <time>{post.date}</time>
            </div>
          </header>
          
          <div className="prose prose-lg prose-stone max-w-none text-text/80 leading-relaxed font-light prose-headings:font-display prose-headings:text-secondary prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:font-bold prose-strong:text-secondary">
             <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
}
