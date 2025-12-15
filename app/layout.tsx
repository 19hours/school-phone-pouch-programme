import './globals.css';
import type { Metadata } from 'next';
import { LayoutShell } from '@/components/LayoutShell';
import { JsonLd } from '@/components/JsonLd';
import { organizationJsonLd, websiteJsonLd, getSiteUrl } from '@/lib/seo';

const baseTitle = 'SG School Phone Pouch Programme';
const baseDescription = 'Simple, visible phone compliance for schools with lockable pouches and unlocking bases.';

export const metadata: Metadata = {
  title: baseTitle,
  description: baseDescription,
  metadataBase: new URL(getSiteUrl()),
  openGraph: {
    siteName: baseTitle,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd('')} />
      </head>
      <body>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
