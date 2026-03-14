import { ShieldCheck } from "lucide-react";
import { ButtonSignIn } from "./button-sign-in";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-zinc-100 dark:bg-zinc-950 dark:border-zinc-900">
      <Link href="/" className="flex gap-2 text-xl font-bold dark:text-white">
        <ShieldCheck width={24} height={24} />
        <span>Sentinel Vault</span>
      </Link>
      <div className="flex gap-2">
        <ButtonSignIn />
        <ThemeToggle />
      </div>
    </header>
  );
};
