"use client";

import { signIn } from "@/lib/authentication/auth-client";
import { Button } from "./ui/button";

export const ButtonSignIn = () => {
  return (
    <Button className="cursor-pointer" variant="default" onClick={signIn}>
      Sign In
    </Button>
  );
};
