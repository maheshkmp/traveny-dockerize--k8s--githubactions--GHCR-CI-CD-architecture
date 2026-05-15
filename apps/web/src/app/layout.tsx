import type { Metadata } from "next";

import "./globals.css";
import {
  fontHeading, fontSans,
  fontInstrumentSerif, fontDmSans,
  fontDancingScript, fontPacifico, fontGreatVibes, fontSatisfy,
  fontSacramento, fontCaveat, fontAllura, fontPinyonScript, fontAlexBrush
} from "@/lib/fonts";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: {
    default: "SaaS Boilerplate",
    template: "%s | SaaS Boilerplate"
  },
  description: "A solid foundation for your next big idea.",
  keywords: ["SaaS", "Boilerplate", "Next.js", "Hono"],
  authors: [{ name: "SaaS Boilerplate" }],
  creator: "SaaS Boilerplate",
  publisher: "SaaS Boilerplate",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://example.com",
    siteName: "SaaS Boilerplate",
    title: "SaaS Boilerplate",
    description: "A solid foundation for your next big idea.",
    images: []
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Boilerplate",
    description: "A solid foundation for your next big idea.",
    images: []
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg"
  },
  manifest: "/site.webmanifest"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontHeading.variable} ${fontSans.variable} ${fontInstrumentSerif.variable} ${fontDmSans.variable} ${fontDancingScript.variable} ${fontPacifico.variable} ${fontGreatVibes.variable} ${fontSatisfy.variable} ${fontSacramento.variable} ${fontCaveat.variable} ${fontAllura.variable} ${fontPinyonScript.variable} ${fontAlexBrush.variable} font-sans antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <Toaster richColors position="top-center" duration={4000} />
      </body>
    </html>
  );
}
