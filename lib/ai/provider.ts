import { createOpenAI } from "@ai-sdk/openai";

import { env } from "@/lib/env";

export const provider = createOpenAI({
  apiKey: env.OPENAI_API_KEY,
  baseURL: env.OPENAI_BASE_URL,
});

export const model = provider(env.OPENAI_MODEL);