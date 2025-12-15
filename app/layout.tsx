import type { Metadata } from 'next';
import './globals.css';
import '../styles/global.css';
import { LayoutShell } from '../components/LayoutShell';
import { JsonLd } from '../components/JsonLd';
import { organisationJsonLd, websiteJsonLd } from '../lib/seo';

export const metadata: Metadata = {
  title: 'SG School Phone Pouch Programme',
  description: 'Lockable phone pouch programme to keep classrooms phone-free while staying student-friendly.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={organisationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
