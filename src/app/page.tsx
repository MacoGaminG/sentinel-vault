import { ButtonSignIn } from "@/components/button-sign-in";
import { FeaturesGrid } from "@/components/features-grid";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LuLock, LuShieldCheck, LuZap } from "react-icons/lu";

export default function Home() {
  return (
    <div className="flex flex-col text-center items-center py-20 px-4">
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
          <ButtonSignIn label="Start" size="lg" variant="default" />
          <Button variant="outline" size="lg" asChild>
            <Link
              href="https://github.com/MacoGaminG/sentinel-vault"
              target="_blank"
              rel="noopener noreferrer"
            >
              See on Github
            </Link>
          </Button>
        </div>
      </section>
      <section className="flex flex-col w-full mt-12">
        <FeaturesGrid
          features={[
            {
              icon: <LuLock className="w-12 h-12" />,
              title: "AES-256 encryption",
              description:
                "Your notes are encrypted from end to end before reaching the SQLite database.",
            },
            {
              icon: <LuShieldCheck className="w-12 h-12" />,
              title: "Argon2id",
              description:
                "Strong authentication using the latest secure hash standards.",
            },
            {
              icon: <LuZap className="w-12 h-12" />,
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
