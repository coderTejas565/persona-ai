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
    <div className="flex flex-col gap-5">
      <AnimatePresence initial={false}>
        {messages.map((msg, idx) => {
          const isUser = msg.role === "user";

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.25 }}
              className={cn(
                "flex w-full",
                isUser ? "justify-end" : "justify-start"
              )}
            >
              {/* ASSISTANT */}
              {!isUser && (
                <div className="flex gap-2 max-w-[80%]">
                  <img
                    src={profile.avatar}
                    className="w-8 h-8 rounded-full mt-1"
                  />

                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground mb-1">
                      {profile.name}
                    </span>

                    <div
                      className={cn(
                        "px-4 py-3 rounded-2xl text-sm whitespace-pre-wrap shadow-sm",
                        persona === "hitesh"
                          ? "bg-[#FFE6D2] text-[#1F1F1F]"
                          : "bg-[#ECE5D6] text-[#1F1F1F]"
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

                  <div className="px-4 py-3 rounded-2xl text-sm bg-primary text-white whitespace-pre-wrap shadow-sm">
                    {msg.content}
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* typing */}
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-start"
        >
          <div className="flex gap-2">
            <img src={profile.avatar} className="w-8 h-8 rounded-full" />

            <div className="px-4 py-3 rounded-2xl text-sm animate-pulse bg-muted">
              {profile.name} is thinking...
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}