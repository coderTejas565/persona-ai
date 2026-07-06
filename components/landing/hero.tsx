"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative pt-40 pb-28 overflow-hidden">

      {/* BACKGROUND DEPTH SYSTEM */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-160px] left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-primary/20 blur-[160px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-220px] right-[-120px] w-[520px] h-[520px] bg-orange-400/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto text-center px-6">

        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border bg-background/50 backdrop-blur-xl text-xs text-muted-foreground shadow-sm"
        >
           Two AI mentors • Two ways of thinking
        </motion.div>

        {/* MAIN HEADING (split reveal for premium feel) */}
        <div className="mt-7 space-y-2">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]"
          >
            Stop learning from{" "}
            <span className="text-muted-foreground">one perspective</span>
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]"
          >
            Start thinking like{" "}
            <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
              engineers
            </span>
          </motion.h1>
        </div>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          One mentor builds fundamentals. The other breaks real-world systems,
          tradeoffs, and scale decisions just like production engineering.
        </motion.p>

        {/* CTA (premium stagger feel) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <Button
            className="
              rounded-xl px-8 py-6 text-base
              shadow-md hover:shadow-xl
              hover:scale-[1.04] active:scale-[0.98]
              transition-all duration-300
            "
            onClick={() => (window.location.href = "/chat")}
          >
            Start Learning
          </Button>

          <Button
            variant="outline"
            className="
              rounded-xl px-8 py-6 text-base
              bg-background/40 backdrop-blur-xl
              hover:scale-[1.04] transition
            "
            onClick={() => {
              document.getElementById("demo")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Try Live Demo
          </Button>
        </motion.div>

        {/* MICRO LINE (calm Apple-style footer note) */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-10 text-xs text-muted-foreground tracking-wide"
        >
          Learn systems, not syntax. Think deeply, not quickly.
        </motion.p>

      </div>
    </section>
  );
}