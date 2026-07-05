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
    if (e.key === "Enter") {
      handleSend();
    }
  }

  return (
    <div className="border-t bg-background/80 backdrop-blur-md p-4">
      <div className="max-w-3xl mx-auto flex items-center gap-2">

        {/* INPUT */}
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything… (Enter to send)"
          disabled={disabled}
          className="h-12 bg-secondary/60 border border-border rounded-xl px-4 text-sm focus-visible:ring-2 focus-visible:ring-primary"
        />

        {/* SEND BUTTON */}
        <Button
          onClick={handleSend}
          disabled={disabled || !text.trim()}
          className="h-12 w-12 rounded-xl transition-all disabled:opacity-50"
        >
          <Send className="w-4 h-4" />
        </Button>

      </div>
    </div>
  );
}