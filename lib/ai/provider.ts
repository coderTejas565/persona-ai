import { createGoogleGenerativeAI } from "@ai-sdk/google";

import { env } from "@/lib/env";

export const provider = createGoogleGenerativeAI({
  apiKey: env.GOOGLE_GENERATIVE_AI_API_KEY,
});

export const model = provider(env.GOOGLE_GENERATIVE_AI_MODEL);