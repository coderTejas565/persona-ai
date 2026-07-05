"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-background px-6 py-14 overflow-hidden">

      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-10">

        {/* BRAND */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <h3 className="font-semibold text-lg tracking-tight">
            Persona AI
          </h3>

          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            Learn engineering thinking by switching between AI mentors who
            explain systems differently — clarity vs architecture.
          </p>
        </motion.div>

        {/* LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="grid grid-cols-2 gap-10 text-sm"
        >
          <div className="space-y-3">
            <p className="font-medium">Product</p>

            {["Sandbox", "Chat", "Features"].map((item) => (
              <p
                key={item}
                className="text-muted-foreground hover:text-foreground transition cursor-pointer"
              >
                {item}
              </p>
            ))}
          </div>

          <div className="space-y-3">
            <p className="font-medium">Learn</p>

            {["Docs", "System Design", "AI Basics"].map((item) => (
              <p
                key={item}
                className="text-muted-foreground hover:text-foreground transition cursor-pointer"
              >
                {item}
              </p>
            ))}
          </div>
        </motion.div>

        {/* BUILDER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-3"
        >
          <p className="font-medium">Built by</p>

          <p className="text-sm text-muted-foreground">
            Tejas (Builder Mode 🚀)
          </p>

          <div className="inline-flex items-center gap-2 text-xs text-muted-foreground mt-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Shipping ideas → products
          </div>
        </motion.div>
      </div>

      {/* DIVIDER GLOW LINE */}
      <div className="relative max-w-5xl mx-auto mt-12 pt-6 border-t border-border/40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="flex flex-col md:flex-row justify-between text-xs text-muted-foreground gap-2">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hover:text-foreground transition"
          >
            © {new Date().getFullYear()} Persona AI
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hover:text-foreground transition"
          >
            Built with Next.js + Gemini
          </motion.p>
        </div>
      </div>
    </footer>
  );
}