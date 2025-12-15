import './globals.css';
import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const siteUrl = 'https://www.sg-school-phone-pouch-programme.example';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'SG School Phone Pouch Programme',
    template: '%s | SG School Phone Pouch Programme'
  },
  description:
    'Lockable phone pouch programme for schools in Singapore: visible compliance, student safety and consistent routines.',
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    title: 'SG School Phone Pouch Programme',
    description:
      'Lockable phone pouch programme for schools in Singapore: visible compliance, student safety and consistent routines.',
    url: siteUrl,
    siteName: 'SG School Phone Pouch Programme',
    locale: 'en_GB',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SG School Phone Pouch Programme',
    description:
      'Lockable phone pouch programme for schools in Singapore: visible compliance, student safety and consistent routines.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Chu Technologies Pte Ltd',
    legalName: 'Chu Technologies Pte Ltd',
    url: siteUrl,
    telephone: '+65 9822 2723',
    email: 'kevin.chu@ct.com.sg',
    identifier: '201926755K'
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
