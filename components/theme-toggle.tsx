"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const current = theme === "system" ? resolvedTheme : theme;

  const isDark = current === "dark";

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        relative flex items-center justify-center
        w-10 h-10 rounded-xl
        bg-muted/60 border border-border
        backdrop-blur-md
        transition-all
        hover:bg-muted
      "
    >
      {/* ICON WRAPPER */}
      <motion.div
        key={isDark ? "dark" : "light"}
        initial={{ rotate: -30, opacity: 0, scale: 0.8 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-foreground" />
        ) : (
          <Sun className="w-4 h-4 text-foreground" />
        )}
      </motion.div>

      {/* subtle glow */}
      <span
        className={`
          absolute inset-0 rounded-xl
          ${isDark ? "shadow-[0_0_20px_rgba(255,255,255,0.08)]" : "shadow-[0_0_20px_rgba(226,109,58,0.15)]"}
        `}
      />
    </motion.button>
  );
}