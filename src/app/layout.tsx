import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

import "./globals.css";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sg-school-phone-pouch-programme.com"),
  title: {
    default: "SG School Phone Pouch Programme",
    template: "%s | SG School Phone Pouch Programme",
  },
  description:
    "Lockable phone pouches with unlocking bases for Singapore schools. Visible phone compliance without lockers, with rollout support from Chu Technologies Pte Ltd (UEN: 201926755K).",
  openGraph: {
    title: "SG School Phone Pouch Programme",
    description:
      "Lockable phone pouches with unlocking bases for Singapore schools. Visible phone compliance without lockers, with rollout support from Chu Technologies Pte Ltd (UEN: 201926755K).",
    url: "https://sg-school-phone-pouch-programme.com",
    siteName: "SG School Phone Pouch Programme",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SG School Phone Pouch Programme",
    description:
      "Lockable phone pouches with unlocking bases for Singapore schools. Visible phone compliance without lockers, with rollout support from Chu Technologies Pte Ltd (UEN: 201926755K).",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-slate-50 antialiased`}>
        <StructuredData />
        <div className="min-h-screen">
          <SiteHeader />
          <main className="pb-24">{children}</main>
          <div className="bg-brand-light py-4 text-center text-sm font-semibold text-brand-blue">
            Government registered vendor on vendors@gov, since 2019. {" "}
            <Link href="/programme" className="font-semibold">
              Learn about the programme
            </Link>
          </div>
          <SiteFooter />
        </div>
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
