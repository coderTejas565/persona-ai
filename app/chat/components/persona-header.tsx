"use client";

import { Persona } from "../page";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function PersonaHeader({
  persona,
  setPersona,
}: {
  persona: Persona;
  setPersona: (p: Persona) => void;
}) {
  return (
    <div className="border-b bg-background/80 backdrop-blur-md px-5 py-4 flex items-center justify-between">

      {/* LEFT SIDE */}
      <div className="flex flex-col">
        <div className="flex items-center gap-3">
          <h1 className="font-semibold text-lg tracking-tight">
            Persona
          </h1>

          <Badge
            className="text-xs"
            variant="secondary"
          >
            {persona === "hitesh" ? "Hitesh Sir" : "Piyush Sir"}
          </Badge>
        </div>

        <p className="text-xs text-muted-foreground mt-1">
          Switch mentors to see different thinking styles: fundamentals vs system design
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">

        {/* SEGMENTED PERSONA SWITCH */}
        <div className="flex items-center p-1 bg-muted rounded-xl border">

          <button
            onClick={() => setPersona("hitesh")}
            className={`px-3 py-1.5 text-sm rounded-lg transition-all ${
              persona === "hitesh"
                ? "bg-primary text-white shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Hitesh Sir
          </button>

          <button
            onClick={() => setPersona("piyush")}
            className={`px-3 py-1.5 text-sm rounded-lg transition-all ${
              persona === "piyush"
                ? "bg-primary text-white shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Piyush Sir
          </button>
        </div>

        <ThemeToggle />
      </div>
    </div>
  );
}