import en from "./dictionaries/en";
import es from "./dictionaries/es";
import type { Dictionary } from "./dictionaries/en";

export type { Dictionary };
export type Lang = "en" | "es";

const dictionaries: Record<Lang, Dictionary> = { en, es };

export function getDictionary(lang: Lang): Dictionary {
  return dictionaries[lang] ?? dictionaries.en;
}

export const locales: Lang[] = ["en", "es"];
export const defaultLocale: Lang = "en";
