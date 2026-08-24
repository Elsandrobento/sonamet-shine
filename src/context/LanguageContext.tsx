import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "pt" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>("pt");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("sonamet_lang") as Language;
      if (saved === "pt" || saved === "en") {
        setLangState(saved);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("sonamet_lang", newLang);
    } catch (e) {
      // ignore
    }
  };

  const toggleLang = () => {
    setLang(lang === "pt" ? "en" : "pt");
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
