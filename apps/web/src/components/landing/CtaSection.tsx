"use client";

import { Phone } from "lucide-react";

import { Reveal } from "./RevealWrapper";
import { useLang } from "@/lib/LangContext";

export function CtaSection() {
  const { t } = useLang();

  return (
    <section
      id="contact"
      className="bg-gold px-5 py-28 text-center font-dm md:px-16 md:py-32"
    >
      <Reveal>
        <div className="mx-auto max-w-3xl">
          <span className="mb-4 block text-xs uppercase tracking-[0.18em] text-white/70">
            {t.cta.tag}
          </span>
          <h2 className="mb-6 font-playfair text-5xl font-bold leading-[0.95] tracking-[-0.02em] text-white md:text-display">
            {t.cta.titleBefore}{" "}
            <em className="italic text-white underline decoration-white/50 underline-offset-8">
              {t.cta.titleHighlight}
            </em>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-base font-light leading-8 text-white/80">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#booking"
              className="cursor-pointer rounded bg-white px-8 py-4 text-sm font-medium uppercase tracking-wide text-gold transition hover:-translate-y-0.5 hover:bg-brand-cream"
            >
              {t.cta.bookNow}
            </a>
            <a
              href={t.common.phoneHref}
              className="flex cursor-pointer items-center justify-center gap-2 rounded border border-white/40 px-8 py-4 text-sm font-normal uppercase tracking-wide text-white transition hover:border-white hover:bg-white/10"
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
