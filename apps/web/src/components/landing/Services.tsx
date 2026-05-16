"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { useLang } from "@/lib/LangContext";

export function Services() {
  const { t } = useLang();
  const featuredService =
    t.services.items.find((service) => "featured" in service && service.featured) ??
    t.services.items[0];
  const standardServices = t.services.items
    .filter((service) => service.name !== featuredService.name)
    .slice(0, 4);

  return (
    <section id="services" className="bg-white px-5 py-24 font-dm md:px-16 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-4xl">
          <span className="mb-4 block text-xs uppercase tracking-[0.18em] text-gold">
            {t.services.tag}
          </span>
          <h2 className="font-playfair text-5xl font-semibold leading-[0.95] tracking-[-0.02em] text-brand-dark md:text-display">
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
          className="grid gap-6 lg:grid-cols-[1.08fr_1.42fr]"
        >
          <motion.article
            key={featuredService.name}
            variants={{
              hidden: { opacity: 0, y: 28 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex min-h-[28rem] overflow-hidden rounded-2xl border border-gold/40 bg-gold/5 p-8 transition duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-md md:p-10"
          >
            <div className="absolute right-8 top-6 font-playfair text-9xl font-semibold leading-none text-gold/10">
              01
            </div>
            <div className="relative z-10 mt-auto">
              <div className="mb-8 flex size-14 items-center justify-center rounded-lg border border-gold/20 bg-gold/10 text-3xl">
                {featuredService.icon}
              </div>
              <h3 className="mb-4 font-playfair text-4xl font-semibold leading-tight text-brand-dark">
                {featuredService.name}
              </h3>
              <p className="mb-8 max-w-md text-base font-light leading-8 text-brand-mid">
                {featuredService.desc}
              </p>
              <a
                href="#booking"
                className="inline-flex cursor-pointer items-center gap-2 border-b border-brand-border pb-1 text-sm font-medium uppercase tracking-widest text-brand-dark transition hover:border-gold hover:text-gold"
              >
                {t.services.readMore}
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </div>
            <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-transparent via-gold to-transparent transition-transform duration-300 group-hover:scale-x-100" />
          </motion.article>

          <div className="grid gap-6 sm:grid-cols-2">
            {standardServices.map((service) => (
              <motion.article
                key={service.name}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-2xl border border-brand-border bg-brand-snow p-7 transition duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-md"
              >
                <div className="mb-6 flex size-12 items-center justify-center rounded-lg border border-gold/20 bg-gold/10 text-2xl">
                  {service.icon}
                </div>
                <h3 className="mb-3 font-playfair text-2xl font-semibold text-brand-dark">
                  {service.name}
                </h3>
                <p className="text-sm font-light leading-7 text-brand-mid">{service.desc}</p>
                <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-transparent via-gold to-transparent transition-transform duration-300 group-hover:scale-x-100" />
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
