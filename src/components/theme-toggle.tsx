"use client";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { LuMoon, LuSun } from "react-icons/lu";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      className="cursor-pointer"
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      <LuSun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <LuMoon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    </Button>
  );
}
