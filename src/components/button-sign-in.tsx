"use client";

import { signIn } from "@/lib/authentication/auth-client";
import { ReactNode } from "react";
import { Button } from "./ui/button";

export const ButtonSignIn = ({
  label = "Sign in with Google",
  icon,
  size,
  variant = "default",
}: {
  label?: string;
  icon?: ReactNode;
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
      // asChild
    >
      {/*<Link href="/sign-in">{label}</Link>*/}
      {icon}
      {label}
    </Button>
  );
};
