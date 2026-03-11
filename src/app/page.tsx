import { FeaturesGrid } from "@/components/features-grid";
import { Button } from "@/components/ui/button";
import { Lock, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-center items-center py-20 px-4 ">
      <section className="flex flex-col max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 bg-linear-to-b from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-500 bg-clip-text text-transparent">
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
      <section className="flex flex-col w-full">
        <FeaturesGrid
          features={[
            {
              icon: <Lock className="w-12 h-12" />,
              title: "AES-256 encryption",
              description:
                "Your notes are encrypted from end to end before reaching the SQLite database.",
            },
            {
              icon: <ShieldCheck className="w-12 h-12" />,
              title: "Argon2id",
              description:
                "Strong authentication using the latest secure hash standards.",
            },
            {
              icon: <Zap className="w-12 h-12" />,
              title: "Bun Runtime",
              description:
                "Ultra-fast performance optimized for modern applications.",
            },
          ]}
        />
      </section>
    </div>
  );
}
