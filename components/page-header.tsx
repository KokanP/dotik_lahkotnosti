import Image from "next/image";

interface PageHeaderProps {
  title: string;
  description?: string;
  imageSrc: string;
}

export function PageHeader({ title, description, imageSrc }: PageHeaderProps) {
  return (
    <div className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center overflow-hidden mb-12">
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-secondary/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <div className="container relative z-10 px-4 text-center">
        <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-md">
          {title}
        </h1>
        {description && (
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-light drop-shadow-sm">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
