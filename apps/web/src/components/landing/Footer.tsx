"use client";

import { useLang } from "@/lib/LangContext";

const footerLinks = [
  { href: "#top", key: "privacy" },
  { href: "#top", key: "terms" },
  { href: "#contact", key: "contact" }
] as const;

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="flex flex-col items-center justify-between gap-6 border-t border-brand-mid/30 bg-brand-dark px-5 py-10 text-center font-dm md:flex-row md:px-16 md:text-left">
      <div className="font-playfair text-xl font-bold text-white">
        {t.common.brandStart}
        <span className="text-gold">{t.common.brandEnd}</span>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {footerLinks.map((link) => (
          <a
            key={link.key}
            href={link.href}
            className="cursor-pointer text-xs uppercase tracking-widest text-brand-muted transition hover:text-gold"
          >
            {t.footer[link.key]}
          </a>
        ))}
      </div>
      <div className="text-xs text-brand-muted">{t.footer.copy}</div>
    </footer>
  );
}
