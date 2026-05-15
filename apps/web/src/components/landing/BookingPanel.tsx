"use client";

import { Search } from "lucide-react";
import type { FormEvent } from "react";
import { toast } from "sonner";

import { useLang } from "@/lib/LangContext";

export function BookingPanel() {
  const { t } = useLang();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success(t.common.bookingSuccess);
  };

  return (
    <section
      id="booking"
      className="overflow-hidden border-y border-gold/15 bg-brand-charcoal font-dm"
    >
      <div className="mx-auto grid max-w-6xl items-stretch md:grid-cols-[1fr_auto]">
        <form onSubmit={onSubmit} className="px-5 py-10 md:px-12 md:py-12">
          <span className="mb-2 block text-xs uppercase tracking-widest text-brand-muted">
            {t.booking.label}
          </span>
          <h2 className="mb-8 font-playfair text-3xl font-semibold text-brand-snow">
            {t.booking.title}
          </h2>

          <div className="grid gap-4 md:grid-cols-[1fr_1fr_1fr_auto] md:items-end">
            <div className="flex flex-col">
              <label
                htmlFor="pickup"
                className="mb-2 text-xs uppercase tracking-widest text-brand-muted"
              >
                {t.booking.pickup}
              </label>
              <input
                id="pickup"
                name="pickup"
                type="text"
                placeholder={t.common.pickupPlaceholder}
                className="rounded border border-gold/20 bg-brand-dark px-4 py-3.5 text-sm text-brand-snow outline-none transition placeholder:text-brand-muted focus:border-gold focus:ring-2 focus:ring-gold/30"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="destination"
                className="mb-2 text-xs uppercase tracking-widest text-brand-muted"
              >
                {t.booking.destination}
              </label>
              <input
                id="destination"
                name="destination"
                type="text"
                placeholder={t.common.destinationPlaceholder}
                className="rounded border border-gold/20 bg-brand-dark px-4 py-3.5 text-sm text-brand-snow outline-none transition placeholder:text-brand-muted focus:border-gold focus:ring-2 focus:ring-gold/30"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="datetime"
                className="mb-2 text-xs uppercase tracking-widest text-brand-muted"
              >
                {t.booking.datetime}
              </label>
              <input
                id="datetime"
                name="datetime"
                type="datetime-local"
                className="rounded border border-gold/20 bg-brand-dark px-4 py-3.5 text-sm text-brand-snow outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
              />
            </div>

            <button
              type="submit"
              className="flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded bg-gold px-7 py-3.5 text-sm font-medium uppercase tracking-widest text-brand-black transition hover:bg-gold-light"
            >
              <Search className="size-4" aria-hidden="true" />
              {t.booking.search}
            </button>
          </div>
        </form>

        <aside className="hidden min-w-56 flex-col items-center justify-center bg-gold px-10 py-12 text-center md:flex">
          <div className="mb-2 text-xs uppercase tracking-widest text-brand-black/60">
            {t.booking.callDirect}
          </div>
          <a
            href={t.common.phoneHref}
            className="cursor-pointer font-playfair text-2xl font-bold text-brand-black"
          >
            {t.common.phone}
          </a>
          <div className="mt-2 text-xs text-brand-black/55">{t.common.directAvailability}</div>
        </aside>
      </div>
    </section>
  );
}
