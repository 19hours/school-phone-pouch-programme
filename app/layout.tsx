// app/layout.tsx
import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloatingButton } from "@/components/WhatsappFloatingButton";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { siteConfig } from "@/lib/seo";
import { BootstrapClient } from "@/components/BootstrapClient";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.defaultTitle,
    template: `%s | ${siteConfig.brandName}`,
  },
  description: siteConfig.defaultDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: siteConfig.brandName,
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    url: siteConfig.siteUrl,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    images: ["/og.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body className="bg-white">
        <BootstrapClient />
        <SeoJsonLd />
        <SiteHeader />
        <main className="container py-4">{children}</main>
        <SiteFooter />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
