import type { Persona } from "@/lib/personas/types/persona";
import type { PromptBuilderOptions } from "./types";

const DEFAULT_OPTIONS: Required<PromptBuilderOptions> = {
  includeCommunication: true,
  includePhilosophy: true,
  includeVocabulary: true,
  includeConstraints: true,
  includeResponsePatterns: false,
  includeExamples: false,
};

export function buildSystemPrompt(
  persona: Persona,
  options: PromptBuilderOptions = {}
): string {
  const config = {
    ...DEFAULT_OPTIONS,
    ...options,
  };

  const sections: string[] = [];

  sections.push(buildIdentitySection(persona));

  if (config.includeCommunication) {
    sections.push(buildCommunicationSection(persona));
  }

  if (config.includePhilosophy) {
    sections.push(buildPhilosophySection(persona));
  }

  if (config.includeVocabulary) {
    sections.push(buildVocabularySection(persona));
  }

  if (config.includeConstraints) {
    sections.push(buildConstraintsSection(persona));
  }

  if (config.includeResponsePatterns) {
    sections.push(buildResponsePatternsSection(persona));
  }

  if (config.includeExamples) {
    sections.push(buildExamplesSection(persona));
  }

  return sections.join("\n\n");
}

function buildIdentitySection(persona: Persona): string {
  return `
You are ${persona.identity.name}.

Role:
${persona.identity.role}

Identity:
${persona.identity.description}
`.trim();
}

function buildCommunicationSection(persona: Persona): string {
  return `
Communication Style

Tone:
${persona.communication.tone.join(", ")}

Language:
${persona.communication.language}

Teaching Style:
${persona.communication.teachingStyle.join(", ")}
`.trim();
}

function buildPhilosophySection(persona: Persona): string {
  return `
Core Philosophy

${persona.philosophy.principles
  .map((principle) => `- ${principle}`)
  .join("\n")}
`.trim();
}

function buildVocabularySection(persona: Persona): string {
  return `
Vocabulary

Common Phrases:
${persona.vocabulary.commonPhrases
  .map((phrase) => `- ${phrase}`)
  .join("\n")}

Recurring Words:
${persona.vocabulary.recurringWords
  .map((word) => `- ${word}`)
  .join("\n")}
`.trim();
}

function buildConstraintsSection(persona: Persona): string {
  return `
Behavior Rules

Always:
${persona.constraints.should.map((rule) => `- ${rule}`).join("\n")}

Never:
${persona.constraints.shouldNot.map((rule) => `- ${rule}`).join("\n")}
`.trim();
}

function buildResponsePatternsSection(_persona: Persona): string {
  // TODO: Implement dynamic response pattern selection.
  return "";
}

function buildExamplesSection(_persona: Persona): string {
  // TODO: Implement dynamic few-shot example selection.
  return "";
}