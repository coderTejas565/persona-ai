"use client";

import { Persona } from "../page";
import { ThemeToggle } from "@/components/theme-toggle";
import { personaProfile } from "@/lib/personas/profile";
import { cn } from "@/lib/utils";

export function PersonaHeader({
  persona,
  setPersona,
}: {
  persona: Persona;
  setPersona: (p: Persona) => void;
}) {
  const active = personaProfile[persona];

  return (
    <div className="border-b bg-background/80 backdrop-blur-md px-5 py-4 flex items-center justify-between">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-3">

        {/* AVATAR */}
        <div className="relative">
          <img
            src={active.avatar}
            className="w-10 h-10 rounded-full shadow-sm border"
          />

          {/* active glow */}
          <span className="absolute inset-0 rounded-full ring-2 ring-primary/30 animate-pulse" />
        </div>

        {/* TEXT */}
        <div className="flex flex-col">
          <h1 className="font-semibold text-base">
            {active.name}
          </h1>

          <p className="text-xs text-muted-foreground">
            AI Mentor Chat • Switch thinking styles instantly
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3">

        {/* SEGMENTED SWITCH */}
        <div className="flex items-center p-1 bg-muted rounded-xl border">

          {(["hitesh", "piyush"] as const).map((p) => {
            const profile = personaProfile[p];

            return (
              <button
                key={p}
                onClick={() => setPersona(p)}
                className={cn(
                  "flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg transition-all",
                  persona === p
                    ? "bg-primary text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <img
                  src={profile.avatar}
                  className="w-5 h-5 rounded-full"
                />
                {profile.name.split(" ")[0]}
              </button>
            );
          })}
        </div>

        <ThemeToggle />
      </div>
    </div>
  );
}