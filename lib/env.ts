import { z } from "zod";

const envSchema = z.object({
  GOOGLE_GENERATIVE_AI_API_KEY: z.string().min(1),
  OPENAI_BASE_URL: z.string().url(),
  GOOGLE_GENERATIVE_AI_MODEL: z.string().min(1),
});

export const env = envSchema.parse({
  GOOGLE_GENERATIVE_AI_API_KEY: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
  OPENAI_BASE_URL: process.env.OPENAI_BASE_URL,
  GOOGLE_GENERATIVE_AI_MODEL: process.env.GOOGLE_GENERATIVE_AI_MODEL,
});