import { generateText, type ModelMessage} from "ai"
import { AIProviderError } from "@/lib/errors";
import { model } from "./provider"

interface GenerateResponseOptions{
    messages: ModelMessage[];
}
export interface generateResponseResult{
    text: string
}

export async function generateResponse({
    messages,
}: GenerateResponseOptions): Promise<generateResponseResult> {
    try {
        const { text } = await generateText({
            model,
            messages
        })
    
        return {
            text,
        }
    } catch {
        throw new AIProviderError()
    }
}
