import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Car } from "lucide-react";

export const metadata: Metadata = {
  title: "Sign In | Traveny"
};

type Props = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <div className="min-h-svh flex font-dm" style={{ background: "#FAF7F2" }}>
      {/* ── Left panel — branding (hidden on mobile) ── */}
      <div
        className="hidden lg:flex lg:w-[45%] xl:w-[40%] flex-col justify-between p-12 relative overflow-hidden"
        style={{ background: "#0F2340" }}
      >
        {/* Background decorative rings */}
        <div className="absolute -bottom-32 -left-32 size-[420px] rounded-full border border-white/5" />
        <div className="absolute -bottom-16 -left-16 size-[300px] rounded-full border border-white/5" />
        <div className="absolute top-1/3 -right-20 size-[260px] rounded-full border border-white/5" />

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 z-10">
          <div className="size-10 rounded-xl bg-gold flex items-center justify-center shadow-lg">
            <Car className="size-5 text-white" />
          </div>
          <span className="font-playfair text-2xl font-bold text-white tracking-tight">
            Trave<span className="text-gold">ny</span>
          </span>
        </Link>

        {/* Tagline */}
        <div className="z-10">
          <blockquote className="text-white/80 text-lg font-light leading-relaxed mb-4 italic font-playfair">
            "First-class travel, every kilometre."
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-full bg-gold/20 flex items-center justify-center">
              <Car className="size-4 text-gold" />
            </div>
            <div>
              <p className="text-white text-sm font-medium">Traveny AB</p>
              <p className="text-white/40 text-xs">Sveriges Premiumtaxi</p>
            </div>
          </div>
        </div>

        {/* Gold accent line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
      </div>

      {/* ── Right panel — form ── */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12">
        {/* Mobile logo */}
        <Link href="/" className="flex items-center gap-2.5 mb-8 lg:hidden">
          <div className="size-9 rounded-xl bg-brand-navy flex items-center justify-center shadow">
            <Car className="size-4 text-gold" />
          </div>
          <span className="font-playfair text-xl font-bold text-brand-navy tracking-tight">
            Trave<span className="text-gold">ny</span>
          </span>
        </Link>

        <div className="w-full max-w-sm">
          {children}
        </div>
      </div>
    </div>
  );
}
