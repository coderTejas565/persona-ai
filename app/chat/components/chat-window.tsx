"use client";

import { cn } from "@/lib/utils";
import { personaProfile } from "@/lib/personas/profile";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  role: "user" | "assistant";
  content: string;
};

type ChatWindowProps = {
  messages: Message[];
  loading?: boolean;
  persona: "hitesh" | "piyush";
};

export function ChatWindow({
  messages,
  loading,
  persona,
}: ChatWindowProps) {
  const profile = personaProfile[persona];

  return (
    <div className="flex flex-col gap-6">
      <AnimatePresence initial={false}>
        {messages.map((msg, idx) => {
          const isUser = msg.role === "user";

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className={cn(
                "flex w-full",
                isUser ? "justify-end" : "justify-start"
              )}
            >
              {/* ASSISTANT */}
              {!isUser && (
                <div className="flex gap-3 max-w-[80%]">
                  <img
                    src={profile.avatar}
                    className="w-9 h-9 rounded-full mt-1 shadow-sm"
                  />

                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground mb-1">
                      {profile.name}
                    </span>

                    <div
                      className={cn(
                        "px-4 py-3 rounded-2xl text-[15px] leading-relaxed whitespace-pre-wrap shadow-sm transition-all hover:shadow-md",
                        "bg-gradient-to-br from-[#FFE6D2] to-[#FFF3E6] text-[#1F1F1F]",
                        persona === "piyush" &&
                          "from-[#ECE5D6] to-[#F5F1E8]"
                      )}
                    >
                      {msg.content}
                    </div>
                  </div>
                </div>
              )}

              {/* USER */}
              {isUser && (
                <div className="flex flex-col items-end max-w-[80%]">
                  <span className="text-xs text-muted-foreground mb-1">
                    You
                  </span>

                  <div className="px-4 py-3 rounded-2xl text-[15px] leading-relaxed bg-primary text-white shadow-md hover:shadow-lg transition-all">
                    {msg.content}
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* TYPING INDICATOR (UPGRADED) */}
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-start"
        >
          <div className="flex gap-3">
            <img
              src={profile.avatar}
              className="w-9 h-9 rounded-full shadow-sm"
            />

            <div className="px-4 py-3 rounded-2xl bg-muted flex items-center gap-1">
              <span className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" />
              <span className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce delay-150" />
              <span className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce delay-300" />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}