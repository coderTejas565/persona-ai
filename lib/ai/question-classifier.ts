import type { ExampleCategory } from "@/lib/personas/types/persona";

export function classifyQuestion(question: string): ExampleCategory {

  const q = question.toLowerCase();

  if (q.includes("error")) return "debugging";

  if (q.includes("bug")) return "debugging";

  if (q.includes("project")) return "project";

  if (q.includes("career")) return "career";

  if (q.includes("roadmap")) return "career";

  if (q.includes("backend")) return "backend";

  if (q.includes("system design")) return "system-design";

  if (q.includes("ai")) return "genai";

  return "concept";
}