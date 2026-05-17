"use client";

import { Plane, Briefcase, Wine, Users, Heart, Globe, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/LangContext";

export function Services() {
  const { t } = useLang();
  
  const services = [
    {
      icon: Briefcase,
      number: '01',
      name: t.services?.items?.[0]?.name || "Affärsresor",
      desc: t.services?.items?.[0]?.desc || "Förstklassig transport för företagskunder",
      featured: true,
    },
    {
      icon: Plane,
      number: '02',
      name: t.services?.items?.[1]?.name || "Flygplatstransfer",
      desc: t.services?.items?.[1]?.desc || "Pålitlig hämtning och lämning",
      featured: false,
    },
    {
      icon: Wine,
      number: '03',
      name: t.services?.items?.[2]?.name || "Event & Fest",
      desc: t.services?.items?.[2]?.desc || "När du vill anlända i stil",
      featured: false,
    },
    {
      icon: Users,
      number: '04',
      name: t.services?.items?.[3]?.name || "Gruppresor",
      desc: t.services?.items?.[3]?.desc || "Bekvämt för hela sällskapet",
      featured: false,
    },
    {
      icon: Heart,
      number: '05',
      name: t.services?.items?.[4]?.name || "Bröllop",
      desc: t.services?.items?.[4]?.desc || "Den perfekta bilen för er stora dag",
      featured: false,
    }
  ];

  const featured = services[0];
  const remainingServices = services.slice(1);

  return (
    <section className="bg-brand-cream py-28" id="services">
      <div className="max-w-6xl mx-auto px-8 lg:px-24">

        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold" />
              <span className="text-xs tracking-[0.25em]
                uppercase text-gold">{t.services?.tag || "Tjänster"}</span>
            </div>
            <h2 className="font-playfair text-5xl
              text-brand-navy font-bold">
              {t.services?.titleBefore || "Allt du"} <em className="text-gold not-italic">{t.services?.titleHighlight || "behöver"}</em><br />
              {t.services?.titleAfter || "för din resa"}
            </h2>
          </div>
          <p className="hidden lg:block text-brand-muted
            max-w-xs text-sm leading-relaxed">
            {t.services?.subtitle || "Specialiserade tjänster designade för varje typ av resenär."}
          </p>
        </div>

        {/* Featured card — full width top */}
        <div className="bg-brand-navy text-white p-10
          mb-4 relative overflow-hidden group
          hover:bg-brand-navyMid transition-colors">
          <span className="absolute top-6 right-8
            font-playfair text-8xl text-white/5
            font-bold select-none">{featured.number}</span>
          <featured.icon className="w-8 h-8 text-gold mb-6" />
          <h3 className="font-playfair text-2xl mb-3">
            {featured.name}
          </h3>
          <p className="text-white/60 max-w-xl leading-relaxed">
            {featured.desc}
          </p>
          <div className="mt-8 flex items-center gap-2
            text-gold text-xs tracking-widest uppercase">
            {t.services?.readMore || "Läs mer"}
            <ArrowRight className="w-3 h-3" />
          </div>
        </div>

        {/* 2x2 grid below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {remainingServices.map((s, i) => (
            <div key={s.number} className="bg-white border border-brand-warm
              p-8 group hover:border-gold
              hover:shadow-lg transition-all duration-300">
              <s.icon className="w-6 h-6 text-gold mb-5" />
              <h3 className="font-playfair text-xl
                text-brand-navy mb-3">{s.name}</h3>
              <p className="text-brand-muted text-sm
                leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
