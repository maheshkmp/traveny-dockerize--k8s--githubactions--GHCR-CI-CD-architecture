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

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <LangProvider>
      <main className={`${playfair.variable} ${dmSans.variable} bg-brand-snow text-brand-dark`}>
        {children}
      </main>
      <Toaster richColors position="top-center" duration={4000} />
    </LangProvider>
  );
}
