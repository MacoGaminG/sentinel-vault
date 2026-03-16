"use client";

import { signIn } from "@/lib/authentication/auth-client";
import { Button } from "./ui/button";

export const ButtonSignIn = ({
  label = "Sign in",
  size,
  variant = "default",
}: {
  label?: string;
  size?:
    | "default"
    | "xs"
    | "sm"
    | "lg"
    | "icon"
    | "icon-xs"
    | "icon-sm"
    | "icon-lg"
    | null;
  variant?:
    | "default"
    | "link"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null;
}) => {
  return (
    <Button
      className="cursor-pointer"
      size={size}
      variant={variant}
      onClick={signIn}
    >
      {label}
    </Button>
  );
};
