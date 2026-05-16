"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { useLang } from "@/lib/LangContext";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
} as const;

export function Hero() {
  const { t } = useLang();
  const stats = [
    { value: t.common.statExperienceValue, label: t.stats.experience },
    { value: t.common.statSatisfiedValue, label: t.stats.satisfied },
    { value: t.common.statAvailabilityValue, label: t.stats.availability }
  ];

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col overflow-hidden bg-brand-snow"
    >
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-car.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-snow/92 via-brand-snow/75 to-brand-snow md:bg-gradient-to-r md:from-brand-snow md:via-brand-snow/85 md:to-brand-snow/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-snow via-transparent to-transparent" />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
        className="relative z-10 flex flex-1 flex-col justify-center px-8 pb-16 pt-32 lg:max-w-3xl lg:px-20"
      >
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex items-center gap-3"
        >
          <div className="h-px w-8 bg-gold" />
          <span className="font-dm text-xs font-medium uppercase tracking-[0.25em] text-brand-muted">
            {t.hero.eyebrow}
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 font-playfair text-6xl font-bold leading-[0.95] text-brand-dark sm:text-display lg:text-display-lg"
        >
          {t.hero.titleBefore}
          <br />
          <em className="font-playfair not-italic text-gold">{t.hero.titleHighlight}</em> &
          <br />
          {t.hero.titleAfter}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 max-w-md font-dm text-lg font-light leading-relaxed text-brand-mid"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start gap-5 sm:flex-row sm:items-center"
        >
          <a
            href="#booking"
            className="group flex cursor-pointer items-center gap-3 bg-gold px-8 py-4 text-sm font-medium uppercase tracking-widest text-white transition-all duration-300 hover:gap-5 hover:bg-gold-dark"
          >
            {t.hero.bookRide}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <a
            href="#fleet"
            className="cursor-pointer border-b border-brand-border pb-1 text-sm font-medium uppercase tracking-widest text-brand-dark transition-colors hover:border-gold hover:text-gold"
          >
            {t.hero.ourFleet}
          </a>
        </motion.div>
      </motion.div>

      <div className="relative z-10 border-t border-brand-border bg-white/80 backdrop-blur-sm">
        <div className="mx-auto grid max-w-5xl grid-cols-3 divide-x divide-brand-border px-4 sm:px-8 lg:px-20">
          {stats.map((stat) => (
            <div key={stat.value} className="px-3 py-6 text-center sm:px-8">
              <div className="font-playfair text-3xl font-semibold text-gold">{stat.value}</div>
              <div className="mt-1 text-[0.65rem] uppercase tracking-[0.15em] text-brand-muted sm:text-xs">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
