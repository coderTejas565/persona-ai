"use client";

import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const current = theme === "system" ? resolvedTheme : theme;

  return (
    <button
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
      className="px-3 py-1 rounded-lg bg-secondary text-sm transition hover:scale-105"
    >
      {current === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}