export interface PersonaIdentity {
  name: string;
  role: string;
  description: string;
}

export interface PersonaCommunication {
  tone: string[];
  language: string;
  sentenceStyle: string[];
  teachingStyle: string[];
}

export interface PersonaPhilosophy {
  principles: string[];
}

export interface PersonaConstraints {
  should: string[];
  shouldNot: string[];
}

export interface PersonaResponsePattern {
  name: string;
  steps: string[];
}

export interface PersonaVocabulary {
  commonPhrases: string[];
  recurringWords: string[];
}

export interface PersonaExamples {
  goodResponses: string[];
}

export interface Persona {
  id: string;

  identity: PersonaIdentity;

  communication: PersonaCommunication;

  philosophy: PersonaPhilosophy;

  constraints: PersonaConstraints;

  responsePatterns: PersonaResponsePattern[];

  vocabulary: PersonaVocabulary;

  examples: PersonaExamples;
}