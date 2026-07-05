import { generateText, ModelMessage} from "ai"
import { model } from "./provider"

interface GenerateResponseOptions{
    messages: ModelMessage[];
}

export async function generateResponse({
    messages,
}: GenerateResponseOptions) {
    const result = await generateText({
        model,
        messages
    })

    return result;
}
