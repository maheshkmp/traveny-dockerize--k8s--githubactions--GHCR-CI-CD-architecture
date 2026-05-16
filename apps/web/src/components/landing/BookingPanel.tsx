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
      className="relative z-20 -mt-6 mb-20 px-8 font-dm lg:px-24"
    >
      <div className="mx-auto max-w-5xl rounded-none border border-brand-warm bg-white p-8 shadow-2xl shadow-brand-navy/10">
        <form onSubmit={onSubmit}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-gold" />
            <span className="text-xs tracking-[0.2em] uppercase text-brand-muted">
              {t.booking.label}
            </span>
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
                className="rounded-none border border-brand-warm bg-brand-cream px-4 py-3.5 text-sm text-brand-dark outline-none transition placeholder:text-brand-muted focus:border-brand-navy"
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
                className="rounded-none border border-brand-warm bg-brand-cream px-4 py-3.5 text-sm text-brand-dark outline-none transition placeholder:text-brand-muted focus:border-brand-navy"
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
                className="rounded-none border border-brand-warm bg-brand-cream px-4 py-3.5 text-sm text-brand-dark outline-none transition focus:border-brand-navy"
              />
            </div>

            <button
              type="submit"
              className="flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-none bg-brand-navy px-7 py-3.5 text-sm font-medium uppercase tracking-widest text-white transition hover:bg-brand-navyMid"
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
