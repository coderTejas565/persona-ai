"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="relative py-28 px-6 overflow-hidden bg-background">

      {/* ANIMATED GLOW BACKGROUND */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-[140px] rounded-full"
        />

        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-orange-400/10 blur-[120px] rounded-full"
        />
      </motion.div>

      {/* CONTENT */}
      <div className="relative max-w-4xl mx-auto text-center space-y-8">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight"
        >
          Stop watching demos.
          <br />
          Start{" "}
          <span className="text-primary">thinking like engineers.</span>
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
        >
          Switch between Hitesh Sir and Piyush Sir instantly.
          Learn fundamentals, system design, and real-world engineering thinking
          through conversation — not theory.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="flex items-center justify-center gap-4 pt-2"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Button size="lg" className="rounded-xl px-7 py-6 shadow-md">
              Start Free Chat
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Button
              size="lg"
              variant="outline"
              className="rounded-xl px-7 py-6 bg-background/40 backdrop-blur-md"
            >
              View Sandbox Demo
            </Button>
          </motion.div>
        </motion.div>

        {/* TRUST LINE */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xs text-muted-foreground pt-4"
        >
          No signup required • Built for learners who want real engineering clarity
        </motion.p>

      </div>
    </section>
  );
}