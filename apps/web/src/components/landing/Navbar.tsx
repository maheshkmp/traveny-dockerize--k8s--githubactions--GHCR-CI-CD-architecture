"use client";

import { useEffect, useState } from "react";

import { useLang } from "@/lib/LangContext";
import type { Lang } from "@/lib/i18n";

const navItems = [
  { href: "#services", key: "services" },
  { href: "#fleet", key: "fleet" },
  { href: "#about", key: "about" },
  { href: "#contact", key: "contact" }
] as const;

export function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const chooseLang = (nextLang: Lang) => setLang(nextLang);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-brand-border bg-white/90 px-5 py-4 font-dm backdrop-blur-md transition-shadow md:px-16 ${
        scrolled ? "shadow-sm" : "shadow-none"
      }`}
    >
      <a
        href="#top"
        className="cursor-pointer font-playfair text-2xl font-bold tracking-normal text-brand-dark"
      >
        {t.common.brandStart}
        <span className="text-gold">{t.common.brandEnd}</span>
      </a>

      <div className="hidden items-center gap-10 md:flex">
        {navItems.map((item) => (
          <a
            key={item.key}
            href={item.href}
            className="cursor-pointer text-sm font-normal uppercase tracking-wide text-brand-mid transition-colors hover:text-gold"
          >
            {t.nav[item.key]}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-3 md:gap-4">
        <div className="flex items-center rounded-full border border-brand-border bg-brand-mist p-1">
          {(["sv", "en"] as const).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => chooseLang(item)}
              className={`cursor-pointer rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-wide transition-colors ${
                lang === item ? "bg-gold text-white" : "text-brand-mid hover:text-gold"
              }`}
            >
              {item === "sv" ? t.common.langSv : t.common.langEn}
            </button>
          ))}
        </div>
        <a
          href="#booking"
          className="cursor-pointer rounded bg-gold px-4 py-2 text-xs font-medium uppercase tracking-wider text-white transition hover:-translate-y-0.5 hover:bg-gold-dark md:px-6"
        >
          {t.nav.bookNow}
        </a>
      </div>
    </nav>
  );
}
