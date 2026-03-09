import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen text-center items-center py-20 px-4 ">
      <section className="flex flex-col max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 bg-linear-to-b from-white to-zinc-500 bg-clip-text text-transparent">
          Sécurité maximale.
          <br />
          Simplicité totale.
        </h1>
        <p className="text-zinc-400 text-lg mb-12">
          Un coffre-fort numérique moderne conçu avec **Next.js**, **Bun** et un
          chiffrement **AES-256** de bout en bout.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" variant="default" asChild>
            <Link href="">Start</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="">See on Github</Link>
          </Button>
        </div>
      </section>
      <section></section>
    </main>
  );
}
