"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  DEFAULT_LANG,
  translations,
  type Lang,
  type Translation,
} from "@/lib/translations";

type LanguageContextValue = {
  lang: Lang;
  t: Translation;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  // Lang is derived from the URL — /en/* is English, everything else is Dutch
  const lang: Lang = pathname?.startsWith("/en") ? "en" : "nl";

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback(
    (next: Lang) => {
      if (next === lang) return;
      if (next === "en") {
        // Add /en prefix — /  → /en,  /privacy → /en/privacy
        router.push(`/en${pathname === "/" ? "" : pathname}`);
      } else {
        // Remove /en prefix — /en → /,  /en/privacy → /privacy
        const newPath = pathname.replace(/^\/en/, "") || "/";
        router.push(newPath);
      }
    },
    [lang, pathname, router]
  );

  const toggleLang = useCallback(() => {
    setLang(lang === "nl" ? "en" : "nl");
  }, [lang, setLang]);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, t: translations[lang], setLang, toggleLang }),
    [lang, setLang, toggleLang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLang must be used inside <LanguageProvider>");
  }
  return ctx;
}

export function useT() {
  return useLang().t;
}

// Unused — kept so nothing breaks if imported elsewhere
export const DEFAULT_LANG_EXPORT = DEFAULT_LANG;
