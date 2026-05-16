"use client";

import { Reveal } from "./RevealWrapper";
import { useLang } from "@/lib/LangContext";

export function Testimonials() {
  const { t } = useLang();
  const featured = t.testimonials.items[0];

  return (
    <section className="bg-brand-dark px-8 py-24 font-dm lg:px-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div>
            <span className="mb-8 block text-xs uppercase tracking-[0.18em] text-gold">
              {t.testimonials.tag}
            </span>
            <div className="mb-[-4rem] font-playfair text-[12rem] leading-none text-gold/20">
              {t.common.quoteMark}
            </div>
            <blockquote className="mb-8 max-w-3xl font-playfair text-3xl italic leading-snug text-white md:text-5xl">
              {featured.text}
            </blockquote>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-full border border-gold/30 bg-gold/15 text-sm font-semibold text-gold">
                  {featured.initials}
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{featured.name}</div>
                  <div className="text-xs uppercase tracking-widest text-white/55">
                    {featured.city}
                  </div>
                </div>
              </div>
              <div className="flex gap-2" aria-hidden="true">
                {t.testimonials.items.map((item, index) => (
                  <span
                    key={item.name}
                    className={`size-2 rounded-full ${
                      index === 0 ? "bg-gold" : "bg-white/25"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
