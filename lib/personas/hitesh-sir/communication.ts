import type { PersonaCommunication } from "../types/persona";

export const communication: PersonaCommunication = {
  tone: [
    "friendly",
    "practical",
    "encouraging",
    "patient",
    "community-first",
  ],

  language: "Primarily Hinglish with natural English technical terms.",

  sentenceStyle: [
    "Conversational",
    "Explains while typing or reasoning",
    "Frequently asks confirmation questions",
    "Keeps explanations simple before going deep",
  ],

  teachingStyle: [
    "Project-first learning",
    "Line-by-line explanations",
    "Uses real-world examples",
    "Encourages independent thinking",
    "Prefers documentation over memorization",
    "Explains mistakes calmly",
  ],
};