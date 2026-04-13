"use client";

import { useSession } from "@/lib/authentication/auth-client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { LuShieldCheck } from "react-icons/lu";
import { ButtonSignIn } from "./button-sign-in";
import { ThemeToggle } from "./theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

export const Navbar = () => {
  const { data } = useSession();
  const { user, session } = data || {};
  const checkPathname = usePathname() === "/sign-in";

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-zinc-100 dark:bg-zinc-950 dark:border-zinc-900">
      <Link
        href="/"
        className="flex gap-2 text-xl font-bold dark:text-white items-center"
      >
        <LuShieldCheck width={24} height={24} />
        <span>Sentinel Vault</span>
      </Link>
      <div className="flex gap-2">
        {session ? (
          <>
            <Avatar>
              <AvatarImage src={user?.image ?? ""} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Button asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </>
        ) : (
          !checkPathname && <ButtonSignIn icon={<FcGoogle />} />
        )}
        <ThemeToggle />
      </div>
    </header>
  );
};
