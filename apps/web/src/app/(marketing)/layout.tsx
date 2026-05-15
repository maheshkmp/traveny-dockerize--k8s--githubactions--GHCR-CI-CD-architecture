import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";
import { Toaster } from "sonner";

import { LangProvider } from "@/lib/LangContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"]
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  weight: ["300", "400", "500"]
});

export const metadata: Metadata = {
  title: "Traveny — Premium Swedish Taxi",
  description:
    "Sweden's premium taxi service. Luxury rides, punctual pickups and first-class comfort — 24/7, anywhere in the country.",
  metadataBase: new URL("https://traveny.com"),
  openGraph: {
    title: "Traveny — Premium Swedish Taxi",
    description: "Book Sweden's most trusted premium taxi at traveny.com",
    url: "https://traveny.com",
    siteName: "Traveny",
    locale: "sv_SE",
    alternateLocale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Traveny — Premium Swedish Taxi",
    description: "Luxury taxi service across Sweden. Book at traveny.com"
  },
  alternates: { canonical: "https://traveny.com" }
};

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <LangProvider>
      <main className={`${playfair.variable} ${dmSans.variable} bg-brand-black text-brand-snow`}>
        {children}
      </main>
      <Toaster richColors position="top-center" duration={4000} />
    </LangProvider>
  );
}
