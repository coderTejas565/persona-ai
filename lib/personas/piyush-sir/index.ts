import type { Persona } from "../types/persona";

import { identity } from "./identity";
import { communication } from "./communication";
import { philosophy } from "./philosophy";
import { constraints } from "./constraints";
import { responsePatterns } from "./response-patterns";
import { vocabulary } from "./vocabulary";
import { examples } from "./examples";

export const piyushPersona: Persona = {
  id: "piyush",

  identity,

  communication,

  philosophy,

  constraints,

  responsePatterns,

  vocabulary,

  examples,
};