"use client";

import { motion } from "framer-motion";

import { useLang } from "@/lib/LangContext";

export function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-24 font-dm md:px-16 md:py-28">
      <div className="mb-16 text-center">
        <span className="mb-4 block text-xs uppercase tracking-[0.18em] text-gold">
          {t.services.tag}
        </span>
        <h2 className="font-playfair text-4xl font-semibold leading-tight text-brand-snow md:text-5xl">
          {t.services.titleBefore}{" "}
          <em className="italic text-gold">{t.services.titleHighlight}</em>{" "}
          {t.services.titleAfter}
        </h2>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ staggerChildren: 0.08 }}
        className="grid gap-6 md:grid-cols-3"
      >
        {t.services.items.map((service) => (
          <motion.article
            key={service.name}
            variants={{
              hidden: { opacity: 0, y: 28 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`group relative overflow-hidden rounded-lg border p-8 transition duration-300 hover:-translate-y-1 hover:border-gold/40 ${
              "featured" in service && service.featured
                ? "border-gold/35 bg-gold/10"
                : "border-gold/15 bg-brand-charcoal"
            }`}
          >
            <div className="mb-6 flex size-12 items-center justify-center rounded-lg border border-gold/20 bg-gold/10 text-2xl">
              {service.icon}
            </div>
            <h3 className="mb-3 font-playfair text-xl font-semibold text-brand-snow">
              {service.name}
            </h3>
            <p className="text-sm font-light leading-7 text-brand-muted">{service.desc}</p>
            <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-transparent via-gold to-transparent transition-transform duration-300 group-hover:scale-x-100" />
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
