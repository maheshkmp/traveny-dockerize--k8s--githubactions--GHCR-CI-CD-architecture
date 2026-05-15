"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";

import type { Lang } from "./i18n";
import { translations } from "./i18n";

type LangCtx = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (typeof translations)[Lang];
};

const Ctx = createContext<LangCtx>({
  lang: "sv",
  setLang: () => undefined,
  t: translations.sv
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("sv");
  const value = useMemo(() => ({ lang, setLang, t: translations[lang] }), [lang]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);
