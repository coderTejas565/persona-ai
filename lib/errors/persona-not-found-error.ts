export class PersonaNotFoundError extends Error {
  constructor(personaId: string) {
    super(`Persona "${personaId}" not found.`);

    this.name = "PersonaNotFoundError";
  }
}