"use client";

import { Reveal } from "./RevealWrapper";
import { useLang } from "@/lib/LangContext";

export function Fleet() {
  const { t } = useLang();

  return (
    <section
      id="fleet"
      className="border-t border-gold/10 bg-brand-charcoal px-5 py-24 font-dm md:px-16 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-16 grid gap-6 md:grid-cols-2 md:items-end md:gap-16">
            <div>
              <span className="mb-4 block text-xs uppercase tracking-[0.18em] text-gold">
                {t.fleet.tag}
              </span>
              <h2 className="font-playfair text-4xl font-semibold leading-tight text-brand-snow md:text-5xl">
                {t.fleet.titleBefore}{" "}
                <em className="italic text-gold">{t.fleet.titleHighlight}</em>
              </h2>
            </div>
            <p className="max-w-md text-sm font-light leading-7 text-brand-muted md:justify-self-end">
              {t.fleet.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {t.fleet.items.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08}>
              <article className="overflow-hidden rounded-lg border border-gold/10 bg-brand-dark transition duration-300 hover:-translate-y-1.5 hover:border-gold/35">
                <div className="flex h-44 items-center justify-center bg-brand-mid text-6xl">
                  {item.emoji}
                </div>
                <div className="p-6">
                  <div className="mb-2 text-xs uppercase tracking-widest text-gold">{item.cls}</div>
                  <h3 className="mb-2 font-playfair text-xl font-semibold text-brand-snow">
                    {item.name}
                  </h3>
                  <p className="text-sm leading-6 text-brand-muted">{item.spec}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-gold/10 pt-5">
                    <span className="text-xs uppercase tracking-widest text-brand-muted">
                      {t.fleet.from}
                    </span>
                    <span className="font-playfair text-lg font-semibold text-gold">{item.price}</span>
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
