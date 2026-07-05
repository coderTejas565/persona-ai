"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

type ChatInputProps = {
  onSend: (text: string) => void;
  disabled?: boolean;
};

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [text, setText] = useState("");

  function handleSend() {
    if (!text.trim() || disabled) return;
    onSend(text);
    setText("");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div className="border-t bg-background/70 backdrop-blur-xl">
      <div className="max-w-3xl mx-auto px-4 py-3 flex items-end gap-2">

        {/* INPUT WRAPPER */}
        <div className="flex-1 relative group">

          {/* glow border effect */}
          <div className="absolute inset-0 rounded-2xl bg-primary/10 opacity-0 group-focus-within:opacity-100 transition" />

          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything…"
            disabled={disabled}
            className="
              relative h-12
              bg-secondary/40
              border border-border/50
              rounded-2xl px-4
              text-sm
              shadow-sm
              focus-visible:ring-0
              focus-visible:border-primary
              transition-all
            "
          />
        </div>

        {/* SEND BUTTON */}
        <Button
          onClick={handleSend}
          disabled={disabled || !text.trim()}
          className="
            h-12 w-12 rounded-2xl
            bg-primary hover:bg-primary/90
            transition-all duration-200
            shadow-md hover:shadow-lg
            active:scale-95
            disabled:opacity-40
          "
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}