import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { TrustBadge } from '../components/TrustBadge';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { buildMetadata, organizationJsonLd, websiteJsonLd } from '../lib/metadata';

const baseMetadata = buildMetadata({
  title: 'SG School Phone Pouch Programme | Simple, visible phone compliance for schools',
  description:
    'A simple, easy-to-audit phone management routine: students place phones into a personal locked pouch in phone-free spaces and unlock at approved times using an unlocking base.',
  path: '/',
});

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: 'SG School Phone Pouch Programme',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-slate-900">
        <a
          href="#main-content"
          className="focus-ring absolute left-4 top-4 z-50 inline-flex -translate-y-16 items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-lg focus:translate-y-0"
        >
          Skip to main content
        </a>
        <Header />
        <TrustBadge />
        <main id="main-content" className="min-h-screen pb-12">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Script
          id="website-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
