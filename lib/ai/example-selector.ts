import type { ExampleCategory, PersonaExample } from "@/lib/personas/types/persona";

export function selectExamples(
  category: ExampleCategory,
  examples: PersonaExample[],
  limit = 2
) {
  return examples
    .filter((example) => example.category === category)
    .slice(0, limit);
}