import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "H2H Leisure | Motorhome Repairs Northern Ireland",
  description:
    "Motorhome, caravan and campervan repairs across Craigavon and Northern Ireland. Mobile service, habitation checks, pre-purchase inspections and more.",
  icons: {
    icon: "/logo.jpg",
  },
  openGraph: {
    title: "H2H Leisure | Motorhome Repairs Northern Ireland",
    description:
      "Professional motorhome, caravan and campervan repairs across Craigavon and Northern Ireland. Mobile callouts, habitation checks, pre-purchase inspections and more.",
    url: "https://www.h2hleisure.co.uk",
    siteName: "H2H Leisure",
    images: [
      {
        url: "/logo.jpg",
        width: 512,
        height: 512,
        alt: "H2H Leisure",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}