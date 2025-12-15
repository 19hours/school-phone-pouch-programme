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
      <body className="antialiased">
        <Header />
        <TrustBadge />
        <main>{children}</main>
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
