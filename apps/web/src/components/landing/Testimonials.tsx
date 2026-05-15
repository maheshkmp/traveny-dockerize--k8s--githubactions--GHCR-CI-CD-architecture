"use client";

import { Reveal } from "./RevealWrapper";
import { useLang } from "@/lib/LangContext";

export function Testimonials() {
  const { t } = useLang();

  return (
    <section className="border-t border-gold/10 bg-brand-charcoal px-5 py-24 font-dm md:px-16 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center">
            <span className="mb-4 block text-xs uppercase tracking-[0.18em] text-gold">
              {t.testimonials.tag}
            </span>
            <h2 className="font-playfair text-4xl font-semibold leading-tight text-brand-snow md:text-5xl">
              {t.testimonials.titleBefore}{" "}
              <em className="italic text-gold">{t.testimonials.titleHighlight}</em>{" "}
              {t.testimonials.titleAfter}
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {t.testimonials.items.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08}>
              <article className="rounded-lg border border-gold/10 bg-brand-dark p-8">
                <div className="mb-5 text-sm tracking-widest text-gold">{t.common.stars}</div>
                <p className="mb-7 text-sm italic leading-7 text-brand-light">{item.text}</p>
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full border border-gold/30 bg-gold/20 text-sm font-semibold text-gold">
                    {item.initials}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-brand-snow">{item.name}</div>
                    <div className="text-xs text-brand-muted">{item.city}</div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
