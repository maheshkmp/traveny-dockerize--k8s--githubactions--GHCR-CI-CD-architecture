"use client";

import { Phone } from "lucide-react";

import { Reveal } from "./RevealWrapper";
import { useLang } from "@/lib/LangContext";

export function CtaSection() {
  const { t } = useLang();

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-5 py-28 text-center font-dm before:absolute before:left-1/2 before:top-1/2 before:size-[38rem] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-[radial-gradient(circle,rgba(201,168,76,0.08)_0%,transparent_70%)] md:px-16 md:py-32"
    >
      <Reveal>
        <div className="relative mx-auto max-w-3xl">
          <span className="mb-4 block text-xs uppercase tracking-[0.18em] text-gold">
            {t.cta.tag}
          </span>
          <h2 className="mb-6 font-playfair text-5xl font-bold leading-tight text-brand-snow md:text-6xl">
            {t.cta.titleBefore} <em className="italic text-gold">{t.cta.titleHighlight}</em>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-base font-light leading-8 text-brand-muted">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#booking"
              className="cursor-pointer rounded bg-gold px-8 py-4 text-sm font-medium uppercase tracking-wide text-brand-black transition hover:-translate-y-0.5 hover:bg-gold-light"
            >
              {t.cta.bookNow}
            </a>
            <a
              href={t.common.phoneHref}
              className="flex cursor-pointer items-center justify-center gap-2 rounded border border-gold/40 px-8 py-4 text-sm font-normal uppercase tracking-wide text-gold-light transition hover:border-gold hover:bg-gold/10"
            >
              <Phone className="size-4" aria-hidden="true" />
              {t.common.phone}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
