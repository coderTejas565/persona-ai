"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden">

      {/* BACKGROUND GLOW (Apple-style soft depth) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-orange-400/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto text-center px-6">

        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border bg-background/60 backdrop-blur-md text-xs text-muted-foreground shadow-sm"
        >
          ⚡ Two AI mentors. Two ways of thinking.
        </motion.div>

        {/* MAIN HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]"
        >
          Stop learning from{" "}
          <span className="text-muted-foreground">one perspective</span>
          <br />
          Start thinking like{" "}
          <span className="text-primary">engineers</span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          One mentor breaks concepts into fundamentals.
          <br />
          The other shows how real systems scale, fail, and evolve.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <Button
            className="rounded-xl px-7 py-6 text-base shadow-md hover:scale-[1.03] transition"
            onClick={() => (window.location.href = "/chat")}
          >
            Start Learning
          </Button>

          <Button
            variant="outline"
            className="rounded-xl px-7 py-6 text-base bg-background/40 backdrop-blur-md hover:scale-[1.03] transition"
            onClick={() => {
              document.getElementById("demo")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Try Live Demo
          </Button>
        </motion.div>

        {/* MICRO LINE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-xs text-muted-foreground"
        >
          Learn systems, not syntax. Think deeply, not quickly.
        </motion.p>

      </div>
    </section>
  );
}