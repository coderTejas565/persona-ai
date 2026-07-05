import type { ModelMessage } from "ai"
import { generateResponse } from "./chat"
import { loadPersona } from "./persona-loader"
import { buildSystemPrompt } from "../prompts/prompt-builder"

interface ChatServiceOptions {
  personaId: string;
  message: string;
}

export interface ChatServiceResult{
    text: string;
}

export async function chatService(
    {
        personaId,
        message
    }: ChatServiceOptions): Promise<ChatServiceResult> {
    const persona = loadPersona(personaId)

    const systemPrompt = buildSystemPrompt(persona)

    const messages: ModelMessage[] = [
        {
            role: "user",
            content: message
        },
    ];

    const { text } = await generateResponse({
        instructions: systemPrompt,
        messages
    })

    return{
        text,
    }
}