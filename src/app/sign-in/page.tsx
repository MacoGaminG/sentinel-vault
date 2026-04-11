"use client";

import { authClient, signIn } from "@/lib/authentication/auth-client";
import { redirect } from "next/navigation";

export default function SignInPage() {
  const { data: session } = authClient.useSession();
  console.log(session);

  if (session === null) {
    signIn();
  } else {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">Sign in to Sentinel Vault</h1>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        Waiting for sign in to access your dashboard and manage your vault.
      </p>
    </div>
  );
}
