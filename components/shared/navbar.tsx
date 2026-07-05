"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500"
      )}
    >
      {/* OUTER BLUR LAYER (Apple-style depth) */}
      <div
        className={cn(
          "backdrop-blur-2xl border-b transition-all duration-500",
          scrolled
            ? "bg-background/75 border-border/60 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
            : "bg-background/40 border-border/30"
        )}
      >
        <div
          className={cn(
            "max-w-6xl mx-auto flex items-center justify-between px-5 transition-all duration-500",
            scrolled ? "py-2.5" : "py-4"
          )}
        >
          {/* LEFT BRAND */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-10 h-10 rounded-2xl overflow-hidden border border-primary/20 bg-primary/5 flex items-center justify-center">

              {/* pulsing core */}
              <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />

              {/* soft glow hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-primary/20 to-transparent" />
            </div>

            <div className="flex flex-col leading-tight">
              <span className="text-[15px] font-semibold tracking-tight group-hover:text-primary transition">
                Mentor Studio
              </span>
              <span className="text-[11px] text-muted-foreground">
                AI mentors with different thinking styles
              </span>
            </div>
          </div>

          {/* CENTER NAV (floating style) */}
          <div className="hidden md:flex items-center gap-10 text-sm relative">
            {["Features", "Live Demo", "Personas"].map((item) => (
              <span
                key={item}
                className="
                  relative cursor-pointer
                  text-muted-foreground hover:text-foreground
                  transition-all duration-300
                  hover:scale-[1.05]
                "
              >
                {item}

                {/* underline glow */}
                <span className="
                  absolute left-0 -bottom-1 h-[2px] w-0
                  bg-primary transition-all duration-300
                  group-hover:w-full
                " />
              </span>
            ))}
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-3">

            {/* theme */}
            <div className="hover:scale-[1.05] transition">
              <ThemeToggle />
            </div>

            {/* CTA */}
            <Button
              className="
                relative overflow-hidden rounded-xl px-5
                bg-primary text-white
                shadow-md hover:shadow-xl
                transition-all duration-300
                hover:scale-[1.04]
                active:scale-[0.98]
              "
              onClick={() => (window.location.href = "/chat")}
            >
              {/* subtle shine effect */}
              <span className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-r from-white/10 to-transparent" />

              Launch Chat
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}