import { hiteshPersona } from "@/lib/personas/hitesh-sir/index";
import type { Persona } from "@/lib/personas/types/persona";
import { PersonaNotFoundError } from "@/lib/errors/persona-not-found-error";

const personas: Record<string, Persona> = {
  hitesh: hiteshPersona,
};

export function loadPersona(personaId: string): Persona {
  const persona = personas[personaId];

  if (!persona) {
  throw new PersonaNotFoundError(personaId);
}

  return persona;
}