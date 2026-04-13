"use client";

import { ButtonSignIn } from "@/components/button-sign-in";
import { useSession } from "@/lib/authentication/auth-client";
import { FcGoogle } from "react-icons/fc";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SignInPage() {
  const { data } = useSession();
  const { session } = data || {};

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full p-8 sm:p-0">
      <h1 className="text-2xl font-bold">Sign in to Sentinel Vault</h1>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        Waiting for sign in to access your dashboard and manage your vault.
      </p>
      <div className="flex flex-col gap-4">
        <ButtonSignIn icon={<FcGoogle />} />
        <Button className="w-fit" asChild variant="secondary">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
