"use client";

import { motion } from "framer-motion";

import { useLang } from "@/lib/LangContext";

export function WhyUs() {
  const { t } = useLang();

  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24 font-dm md:px-16 md:py-28">
      <div className="grid gap-14 md:grid-cols-2 md:items-center md:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="flex h-80 items-center justify-center rounded-lg border border-gold/20 bg-brand-dark text-8xl md:h-[30rem]">
            {t.why.trophy}
          </div>
          <div className="absolute -bottom-6 right-4 rounded-lg bg-gold px-6 py-5 text-center text-brand-black md:-right-6">
            <span className="block font-playfair text-3xl font-bold">{t.common.ratingValue}</span>
            <span className="text-xs uppercase tracking-widest">{t.why.rating}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
        >
          <span className="mb-4 block text-xs uppercase tracking-[0.18em] text-gold">
            {t.why.tag}
          </span>
          <h2 className="font-playfair text-4xl font-semibold leading-tight text-brand-snow md:text-5xl">
            {t.why.titleBefore} <em className="italic text-gold">{t.why.titleHighlight}</em>
          </h2>

          <div className="mt-10 flex flex-col gap-8">
            {t.why.points.map((point) => (
              <div key={point.num} className="flex items-start gap-5">
                <span className="min-w-9 font-playfair text-2xl font-semibold text-gold/30">
                  {point.num}
                </span>
                <div>
                  <h3 className="mb-2 font-playfair text-lg font-semibold text-brand-snow">
                    {point.title}
                  </h3>
                  <p className="text-sm font-light leading-7 text-brand-muted">{point.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
