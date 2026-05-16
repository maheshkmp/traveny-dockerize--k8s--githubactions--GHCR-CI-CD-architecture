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
      className="relative z-20 -mt-8 mb-16 px-8 font-dm lg:px-20"
    >
      <div className="mx-auto max-w-5xl rounded-2xl border border-brand-border bg-white p-6 shadow-xl shadow-brand-dark/10 md:p-8">
        <form onSubmit={onSubmit}>
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mb-2 block text-xs uppercase tracking-widest text-brand-muted">
                {t.booking.label}
              </span>
              <h2 className="font-playfair text-3xl font-semibold text-brand-dark">
                {t.booking.title}
              </h2>
            </div>
            <a
              href={t.common.phoneHref}
              className="cursor-pointer text-sm font-medium uppercase tracking-widest text-gold transition hover:text-gold-dark"
            >
              {t.common.phone}
            </a>
          </div>

          <div className="grid grid-cols-1 items-end gap-4 lg:grid-cols-4">
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
                className="rounded border border-brand-border bg-white px-4 py-3.5 text-sm text-brand-dark outline-none transition placeholder:text-brand-muted focus:border-gold focus:ring-1 focus:ring-gold/30"
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
                className="rounded border border-brand-border bg-white px-4 py-3.5 text-sm text-brand-dark outline-none transition placeholder:text-brand-muted focus:border-gold focus:ring-1 focus:ring-gold/30"
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
                className="rounded border border-brand-border bg-white px-4 py-3.5 text-sm text-brand-dark outline-none transition focus:border-gold focus:ring-1 focus:ring-gold/30"
              />
            </div>

            <button
              type="submit"
              className="flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded bg-gold px-7 py-3.5 text-sm font-medium uppercase tracking-widest text-white transition hover:bg-gold-dark"
            >
              <Search className="size-4" aria-hidden="true" />
              {t.booking.search}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
