import { z } from "zod";

export const chatRequestSchema = z.object({
  personaId: z.string().min(1),
  message: z.string().trim().min(1).max(4000),
});