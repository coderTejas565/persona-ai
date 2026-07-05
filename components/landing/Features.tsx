"use client";

import { personaProfile } from "@/lib/personas/profile";
import { cn } from "@/lib/utils";

export function Features() {
  return (
    <section className="relative max-w-6xl mx-auto px-5 py-24 space-y-16">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-120px] right-[-80px] w-[400px] h-[400px] bg-orange-400/10 blur-[120px] rounded-full" />
      </div>

      {/* SECTION TITLE */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Two ways of thinking. One learning experience.
        </h2>

        <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          One mentor breaks things down simply. The other builds systems from scratch.
          You learn both clarity and scale.
        </p>
      </div>

      {/* PERSONA CARDS */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* HITESH CARD */}
        <div className="
          group relative p-6 rounded-2xl
          border border-border/60
          bg-background/40 backdrop-blur-xl
          shadow-sm hover:shadow-xl
          transition-all duration-300
          hover:-translate-y-1
        ">
          {/* glow edge */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-orange-400/10 to-transparent" />

          <div className="relative flex items-center gap-4 mb-5">
            <img
              src={personaProfile.hitesh.avatar}
              className="w-12 h-12 rounded-full ring-2 ring-orange-200/40"
            />

            <div>
              <h3 className="font-semibold text-lg">
                {personaProfile.hitesh.name}
              </h3>
              <p className="text-xs text-muted-foreground">
                Fundamentals • Clarity • Step-by-step thinking
              </p>
            </div>
          </div>

          <ul className="relative text-sm text-muted-foreground space-y-2">
            <li>• Explains complex topics in simple language</li>
            <li>• Focuses on strong fundamentals</li>
            <li>• Builds intuition before code</li>
            <li>• Beginner-friendly engineering mindset</li>
          </ul>
        </div>

        {/* PIYUSH CARD */}
        <div className="
          group relative p-6 rounded-2xl
          border border-border/60
          bg-background/40 backdrop-blur-xl
          shadow-sm hover:shadow-xl
          transition-all duration-300
          hover:-translate-y-1
        ">
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-blue-400/10 to-transparent" />

          <div className="relative flex items-center gap-4 mb-5">
            <img
              src={personaProfile.piyush.avatar}
              className="w-12 h-12 rounded-full ring-2 ring-blue-200/40"
            />

            <div>
              <h3 className="font-semibold text-lg">
                {personaProfile.piyush.name}
              </h3>
              <p className="text-xs text-muted-foreground">
                Systems • Architecture • Tradeoffs
              </p>
            </div>
          </div>

          <ul className="relative text-sm text-muted-foreground space-y-2">
            <li>• Breaks systems into scalable components</li>
            <li>• Focus on real-world architecture</li>
            <li>• Always explains tradeoffs</li>
            <li>• Production-level engineering mindset</li>
          </ul>
        </div>
      </div>

      {/* FEATURE GRID */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">

        {[
          {
            title: "Interactive Learning",
            desc: "Talk to AI instead of reading passive content.",
          },
          {
            title: "Dual Thinking System",
            desc: "Switch between fundamentals and system design instantly.",
          },
          {
            title: "Real Engineering Insight",
            desc: "Understand how real-world systems are built.",
          },
        ].map((f, i) => (
          <div
            key={i}
            className="
              p-6 rounded-xl
              border border-border/60
              bg-background/30 backdrop-blur-md
              hover:bg-background/50
              transition-all duration-300
              hover:-translate-y-1
            "
          >
            <h4 className="font-medium mb-2">{f.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {f.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}