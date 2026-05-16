import type { Metadata, Viewport } from "next";

import "./globals.css";
import {
  fontHeading, fontSans,
  fontInstrumentSerif, fontDmSans,
  fontDancingScript, fontPacifico, fontGreatVibes, fontSatisfy,
  fontSacramento, fontCaveat, fontAllura, fontPinyonScript, fontAlexBrush
} from "@/lib/fonts";

export const viewport: Viewport = {
  themeColor: "#C9A84C",
  width: "device-width",
  initialScale: 1
};

export const metadata: Metadata = {
  title: {
    default: "Traveny — Sveriges Premiumtaxi",
    template: "%s | Traveny"
  },
  description:
    "Boka Sveriges mest pålitliga premiumtaxi. Lyxiga fordon, punktliga hämtningar och förstklassig service — dygnet runt, var som helst i landet.",
  keywords: [
    "taxi",
    "premiumtaxi",
    "Sverige",
    "Stockholm",
    "Göteborg",
    "Malmö",
    "flygplatstransfer",
    "affärsresor",
    "traveny"
  ],
  authors: [{ name: "Traveny AB" }],
  creator: "Traveny AB",
  publisher: "Traveny AB",
  applicationName: "Traveny",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Traveny"
  },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    alternateLocale: ["en_US"],
    url: "https://traveny.com",
    siteName: "Traveny",
    title: "Traveny — Sveriges Premiumtaxi",
    description:
      "Lyxiga körningar, punktliga hämtningar och förstklassig komfort — dygnet runt, var som helst i landet.",
    images: [
      {
        url: "https://traveny.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Traveny — Sveriges Premiumtaxi"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Traveny — Sveriges Premiumtaxi",
    description: "Boka premiumtaxi i Sverige på traveny.com",
    images: ["https://traveny.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://traveny.com",
    languages: {
      "sv-SE": "https://traveny.com",
      "en-US": "https://traveny.com/en"
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large"
    }
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }]
  }
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
        {children}
      </body>
    </html>
  );
}
