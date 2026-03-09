import { FeaturesGrid } from "@/components/features-grid";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen text-center items-center py-20 px-4 ">
      <section className="flex flex-col max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 bg-linear-to-b from-white to-zinc-500 bg-clip-text text-transparent">
          Maximum security.
          <br />
          Total simplicity.
        </h1>
        <p className="text-zinc-400 text-lg mb-12">
          A modern digital safe designed with **Next.js**, **Bun**, and
          end-to-end **AES-256** encryption.
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
      <section>
        <FeaturesGrid
          features={[
            {
              icon: <Lock className="w-12 h-12" />,
              title: "AES-256 encryption",
              description:
                "Your notes are encrypted from end to end before reaching the SQLite database.",
            },
          ]}
        />
      </section>
    </main>
  );
}
