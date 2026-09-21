"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { LANGUAGE_COOKIE, type Language } from "./language";

export type { Language };

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

// The root layout resolves the first language on the server (saved choice, then the
// browser's Accept-Language) and hands it down here so the HTML is already in the right language.
const InitialLanguageContext = createContext<Language>("en");

export function InitialLanguage({ language, children }: { language: Language; children: React.ReactNode }) {
  return <InitialLanguageContext.Provider value={language}>{children}</InitialLanguageContext.Provider>;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const initial = useContext(InitialLanguageContext);
  const [language, setLanguageState] = useState<Language>(initial);

  // Only an explicit choice is remembered; the automatic guess never is.
  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
    document.cookie = `${LANGUAGE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dataset.language = language;
  }, [language]);

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
