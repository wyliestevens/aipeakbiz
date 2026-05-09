"use client";

import { createContext, useContext } from "react";
import type { Dictionary } from "./dictionaries/en";
import type { Lang } from "./index";
import en from "./dictionaries/en";

interface I18nContextValue {
  dict: Dictionary;
  lang: Lang;
}

const I18nContext = createContext<I18nContextValue>({ dict: en, lang: "en" });

export function I18nProvider({
  dict,
  lang,
  children,
}: {
  dict: Dictionary;
  lang: Lang;
  children: React.ReactNode;
}) {
  return (
    <I18nContext.Provider value={{ dict, lang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useDict() {
  return useContext(I18nContext).dict;
}

export function useLang() {
  return useContext(I18nContext).lang;
}
