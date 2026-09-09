"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Language = "en" | "es";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("leba-language");
    if (savedLanguage === "en" || savedLanguage === "es") setLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("leba-language", language);
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
