import { z } from "zod";

export const chatRequestSchema = z.object({
    messages: z.array(
        z.object({
            role: z.enum(["system","user","assistant"]),
            Content: z.string().min(1)
        })
    )
})