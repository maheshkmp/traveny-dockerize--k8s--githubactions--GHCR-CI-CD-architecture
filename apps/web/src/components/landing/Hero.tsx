"use client";

import { motion } from "framer-motion";

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
      className="relative grid min-h-screen overflow-hidden bg-brand-black px-5 pb-16 pt-32 md:grid-cols-2 md:items-center md:px-16 md:pb-20 md:pt-32"
    >
      <div className="absolute right-0 top-0 hidden h-full w-[55%] bg-[linear-gradient(135deg,#1a1508_0%,#0A0A0B_60%)] md:block" />
      <div className="absolute right-0 top-0 hidden h-full w-[55%] bg-[radial-gradient(circle_at_50%_30%,rgba(201,168,76,0.16),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.05),transparent_48%)] opacity-80 md:block" />

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
        className="relative z-10 max-w-xl"
      >
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs font-medium uppercase tracking-widest text-gold-light"
        >
          <span className="size-1.5 rounded-full bg-[#FECC02]" />
          <span>{t.common.swedishFlag}</span>
          <span>{t.hero.badge}</span>
          <span className="size-1.5 rounded-full bg-[#006AA7]" />
        </motion.div>

        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 font-playfair text-5xl font-bold leading-tight tracking-normal text-brand-snow md:text-7xl"
        >
          {t.hero.titleBefore}{" "}
          <em className="font-playfair italic text-gold">{t.hero.titleHighlight}</em>
          <br />
          {t.hero.titleAfter}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 max-w-md text-lg font-light leading-8 text-brand-light"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#booking"
            className="cursor-pointer rounded bg-gold px-8 py-4 text-center text-sm font-medium uppercase tracking-wide text-brand-black transition hover:-translate-y-0.5 hover:bg-gold-light"
          >
            {t.hero.bookRide}
          </a>
          <a
            href="#fleet"
            className="cursor-pointer rounded border border-gold/40 px-8 py-4 text-center text-sm font-normal uppercase tracking-wide text-gold-light transition hover:border-gold hover:bg-gold/10"
          >
            {t.hero.ourFleet}
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1, delayChildren: 0.35 }}
        className="relative z-10 mt-14 flex flex-wrap gap-5 md:mt-0 md:flex-col md:items-end md:gap-8 md:pl-16"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="min-w-48 rounded-lg border border-gold/20 bg-brand-dark/85 p-6 text-left backdrop-blur md:text-right"
          >
            <div className="font-playfair text-4xl font-semibold leading-none text-gold">
              {stat.value}
            </div>
            <div className="mt-2 text-xs uppercase tracking-widest text-brand-muted">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
