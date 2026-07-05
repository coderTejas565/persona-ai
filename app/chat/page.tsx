"use client";

import { useEffect, useState, useCallback } from "react";
import { PersonaHeader } from "./components/persona-header";
import { ChatWindow } from "./components/chat-window";
import { ChatInput } from "./components/chat-input";
import { cn } from "@/lib/utils";

export type Persona = "hitesh" | "piyush";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const welcomeMessages: Record<Persona, string> = {
  hitesh: "Hanji 👋 kaise ho sab? Kya build kar rahe ho aaj?",
  piyush:
    "Aaj kisko dead karein? 😄\nChalo system ko from scratch todte hain aur scale karte hain.",
};

export default function ChatPage() {
  const [persona, setPersona] = useState<Persona>("hitesh");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [switching, setSwitching] = useState(false);

  const handlePersonaChange = useCallback((newPersona: Persona) => {
    if (newPersona === persona) return;

    setSwitching(true);

    setTimeout(() => {
      setPersona(newPersona);
      setMessages([
        {
          role: "assistant",
          content: welcomeMessages[newPersona],
        },
      ]);

      setSwitching(false);
    }, 450); // smooth transition window
  }, [persona]);

  async function sendMessage(text: string) {
    if (!text.trim() || loading || switching) return;

    const userMessage: Message = {
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          personaId: persona,
          message: text,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.text || "No response",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong. Try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="h-screen flex flex-col bg-background text-foreground">
      <div className="w-full max-w-5xl mx-auto flex flex-col h-full">

        {/* HEADER */}
        <div className="shrink-0 border-b border-border bg-background/80 backdrop-blur-md">
          <PersonaHeader
            persona={persona}
            setPersona={handlePersonaChange}
          />
        </div>

        {/* CHAT AREA */}
        <div className="flex-1 relative overflow-hidden">

          {/* CHAT */}
          <div
            className={cn(
              "absolute inset-0 overflow-y-auto px-6 py-6 space-y-6 transition-all duration-300",
              switching ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100"
            )}
          >
            <ChatWindow
              messages={messages}
              loading={loading}
              persona={persona}
            />
          </div>

          {/* SWITCH OVERLAY */}
          {switching && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/70 backdrop-blur-md">
              <div className="text-center space-y-2">
                <div className="text-lg font-medium animate-pulse">
                  Switching mentor...
                </div>
                <div className="text-sm text-muted-foreground">
                  Loading {persona === "hitesh" ? "Hitesh Sir" : "Piyush Sir"} mode
                </div>
              </div>
            </div>
          )}
        </div>

        {/* INPUT */}
        <div className="shrink-0 border-t border-border bg-background/80 backdrop-blur-md">
          <div className="p-4">
            <ChatInput
              onSend={sendMessage}
              disabled={loading || switching}
            />
          </div>
        </div>

      </div>
    </div>
  );
}