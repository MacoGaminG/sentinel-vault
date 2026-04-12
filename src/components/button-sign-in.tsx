"use client";

import { signIn, useSession } from "@/lib/authentication/auth-client";
import { ReactNode } from "react";
import { toast } from "sonner";
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
  const { refetch } = useSession();

  const handleSignIn = async () => {
    const success = await signIn();
    if (success) {
      await refetch();
      toast.success("Authentication completed successfully!");
    } else {
      toast.error("Authentication failed.");
    }
  };

  return (
    <Button
      className="cursor-pointer"
      size={size}
      variant={variant}
      onClick={handleSignIn}
    >
      {icon}
      {label}
    </Button>
  );
};
