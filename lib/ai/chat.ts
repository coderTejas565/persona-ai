import { generateText, type ModelMessage} from "ai"
import { AIProviderError } from "@/lib/errors";
import { model } from "./provider"

interface GenerateResponseOptions {
  instructions: string;
  messages: ModelMessage[];
}
export interface generateResponseResult{
    text: string
}

export async function generateResponse({
    instructions,
    messages,
}: GenerateResponseOptions): Promise<generateResponseResult> {
    try {
        const { text } = await generateText({
            model,
            instructions,
            messages
        })
    
        return {
            text,
        }
    } catch(error) {
        console.error(error);
        throw new AIProviderError()
    }
}