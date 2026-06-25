"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { useLang } from "@/lib/LangContext";
import type { Lang } from "@/lib/i18n";
import { authClient } from "@/lib/auth-client";
import { LogOut, LayoutDashboard, ShieldCheck } from "lucide-react";

const navItems = [
  { href: "#services", key: "services" },
  { href: "#fleet", key: "fleet" },
  { href: "#about", key: "about" },
  { href: "#contact", key: "contact" }
] as const;

type SessionUserWithRole = { role?: string | null };

export function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const chooseLang = (nextLang: Lang) => setLang(nextLang);

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        credentials: "include",
        onSuccess: () => { window.location.href = "/"; },
      },
    });
  };

  const isAdmin = (session?.user as SessionUserWithRole)?.role === "admin";
  const avatarLetter = session?.user?.name?.[0]?.toUpperCase() ?? session?.user?.email?.[0]?.toUpperCase() ?? "?";

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-brand-border bg-white/90 px-5 py-4 font-dm backdrop-blur-md transition-shadow md:px-16 ${
        scrolled ? "shadow-sm" : "shadow-none"
      }`}
    >
      <a
        href="#top"
        className="cursor-pointer font-playfair text-2xl font-bold tracking-normal text-brand-dark"
      >
        {t.common.brandStart}
        <span className="text-gold">{t.common.brandEnd}</span>
      </a>

      <div className="hidden items-center gap-10 md:flex">
        {navItems.map((item) => (
          <a
            key={item.key}
            href={item.href}
            className="cursor-pointer text-sm font-normal uppercase tracking-wide text-brand-mid transition-colors hover:text-gold"
          >
            {t.nav[item.key]}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-3 md:gap-4">
        {/* Language switcher */}
        <div className="flex items-center rounded-full border border-brand-border bg-brand-mist p-1">
          {(["sv", "en"] as const).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => chooseLang(item)}
              className={`cursor-pointer rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-wide transition-colors ${
                lang === item ? "bg-gold text-white" : "text-brand-mid hover:text-gold"
              }`}
            >
              {item === "sv" ? t.common.langSv : t.common.langEn}
            </button>
          ))}
        </div>

        {/* Auth section */}
        {!mounted || isPending ? (
          <div className="size-8 animate-pulse rounded-full bg-brand-mist" />
        ) : session ? (
          <div className="relative group flex items-center gap-2">
            {/* Avatar button */}
            <button
              className="size-9 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-white text-sm font-bold shadow-md ring-2 ring-transparent group-hover:ring-gold/50 transition-all duration-200 cursor-pointer select-none"
              aria-label="User menu"
            >
              {avatarLetter}
            </button>

            {/* Dropdown */}
            <div className="absolute right-0 top-full mt-3 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 ease-out translate-y-1 group-hover:translate-y-0 z-50">
              {/* Arrow */}
              <div className="absolute -top-1.5 right-3 size-3 rotate-45 bg-white border-l border-t border-brand-border rounded-sm" />
              <div className="rounded-xl border border-brand-border bg-white shadow-xl overflow-hidden py-1">
                {/* Name + email */}
                <div className="px-3 py-2.5 border-b border-brand-border">
                  <p className="text-xs font-semibold text-brand-dark truncate">{session.user.name}</p>
                  <p className="text-[11px] text-brand-mid truncate">{session.user.email}</p>
                </div>

                {/* Dashboard / Admin link */}
                {isAdmin ? (
                  <Link
                    href="/admin/users"
                    className="flex items-center gap-2.5 px-3 py-2.5 text-sm hover:bg-brand-mist transition-colors text-brand-dark"
                  >
                    <ShieldCheck className="size-4 text-gold" />
                    Admin Panel
                  </Link>
                ) : (
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-2.5 px-3 py-2.5 text-sm hover:bg-brand-mist transition-colors text-brand-dark"
                  >
                    <LayoutDashboard className="size-4 text-gold" />
                    Dashboard
                  </Link>
                )}

                {/* Sign Out */}
                <button
                  onClick={handleSignOut}
                  className="w-full flex items-center gap-2.5 px-3 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut className="size-4" />
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        ) : (
          <Link
            href="/signin"
            className="cursor-pointer rounded border border-gold px-4 py-2 text-xs font-medium uppercase tracking-wider text-gold transition hover:-translate-y-0.5 hover:bg-gold hover:text-white md:px-5"
          >
            Sign In
          </Link>
        )}

        {/* Book Now CTA */}
        <a
          href="#booking"
          className="cursor-pointer rounded bg-gold px-4 py-2 text-xs font-medium uppercase tracking-wider text-white transition hover:-translate-y-0.5 hover:bg-gold-dark md:px-6"
        >
          {t.nav.bookNow}
        </a>
      </div>
    </nav>
  );
}

