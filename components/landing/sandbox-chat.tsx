"use client";

import { useEffect, useRef, useState } from "react";
import { personaProfile } from "@/lib/personas/profile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

type Persona = "hitesh" | "piyush";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const fakeResponses: Record<Persona, string[]> = {
  hitesh: [
    "Start with fundamentals — warna system confuse karega later.",
    "Real learning tab hota hai jab tum khud build karte ho.",
    "Docs ignore mat karo… wahi tumhe engineer banate hain.",
  ],
  piyush: [
    "Let’s zoom out first — system level socho.",
    "Every design has tradeoffs, nothing is perfect.",
    "Scale ke liye you must rethink the architecture.",
  ],
};

export function SandboxChat() {
  const [persona, setPersona] = useState<Persona>("hitesh");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Ask anything see how each mentor thinks differently.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const profile = personaProfile[persona];

  function sleep(ms: number) {
    return new Promise((r) => setTimeout(r, ms));
  }

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function streamText(text: string) {
    let current = "";

    for (let i = 0; i < text.length; i++) {
      current += text[i];

      setMessages((prev) => {
        const copy = [...prev];
        copy[copy.length - 1] = {
          role: "assistant",
          content: current,
        };
        return copy;
      });

      await sleep(10);
    }
  }

  async function handleSend() {
    if (!input.trim() || loading) return;

    const userMessage: Message = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    await sleep(300);

    const response =
      fakeResponses[persona][
        Math.floor(Math.random() * fakeResponses[persona].length)
      ];

    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    await streamText(response);

    setLoading(false);
  }

  return (
    <section id="demo" className="max-w-5xl mx-auto px-6 py-28">

      {/* HEADER */}
      <div className="flex items-end justify-between mb-6">

        <div>
          <h2 className="text-3xl font-semibold tracking-tight">
            Interactive Mentor Sandbox
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Switch mindset - fundamentals vs system thinking
          </p>
        </div>

        {/* PERSONA SWITCH */}
        <div className="flex items-center gap-1 p-1 rounded-2xl border bg-background/30 backdrop-blur-xl shadow-md">
          {(["hitesh", "piyush"] as const).map((p) => (
            <button
              key={p}
              onClick={() => setPersona(p)}
              className={cn(
                "px-4 py-1.5 text-sm rounded-xl transition-all duration-300",
                persona === p
                  ? "bg-primary text-white shadow-lg scale-[1.03]"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {personaProfile[p].name}
            </button>
          ))}
        </div>
      </div>

      {/* CHAT CARD */}
      <motion.div
        layout
        className={cn(
          "relative rounded-3xl border shadow-2xl p-5 h-[500px] overflow-hidden backdrop-blur-2xl",
          "bg-gradient-to-b from-background/60 to-background/20"
        )}
      >
        {/* glow layer */}
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />

        {/* messages */}
        <div
          ref={scrollRef}
          className="relative h-full overflow-y-auto space-y-4 pr-2"
        >
          <AnimatePresence initial={false}>
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className={cn(
                  "flex w-full",
                  msg.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={cn(
                    "px-4 py-3 rounded-2xl text-sm max-w-[75%] leading-relaxed shadow-sm",
                    msg.role === "user"
                      ? "bg-primary text-white rounded-br-md"
                      : persona === "hitesh"
                      ? "bg-[#FFE6D2] text-[#1F1F1F]"
                      : "bg-[#ECE5D6] text-[#1F1F1F]"
                  )}
                >
                  {msg.content}
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* typing */}
          {loading && (
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce delay-75" />
              <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce delay-150" />
            </div>
          )}
        </div>
      </motion.div>

      {/* INPUT */}
      <div className="flex gap-3 mt-6">

        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Ask ${profile.name} something…`}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="
            h-12 rounded-xl
            bg-background/40 backdrop-blur-md
            border border-border/60
            focus-visible:ring-2 focus-visible:ring-primary/30
          "
        />

        <motion.div whileTap={{ scale: 0.95 }}>
          <Button
            onClick={handleSend}
            className="h-12 px-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            Send
          </Button>
        </motion.div>
      </div>
    </section>
  );
}