import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="font-display text-6xl md:text-8xl text-primary/30 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Stran ni bila najdena</h2>
      <p className="text-text/70 max-w-md mb-8">
        Opravičujemo se, vendar stran, ki jo iščete, ne obstaja, je bila premaknjena ali pa ni več na voljo.
      </p>
      <Link href="/">
        <Button className="h-12 px-8 text-base">Nazaj na domačo stran</Button>
      </Link>
    </div>
  );
}
