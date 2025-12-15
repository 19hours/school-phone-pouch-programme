import './globals.css';
import '@/styles/govuk.scss';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';
import JsonLd from '@/components/JsonLd';
import { Metadata } from 'next';
import { getSiteUrl, SITE_NAME, COMPANY_NAME, COMPANY_UEN, CONTACT_EMAIL, CONTACT_WHATSAPP } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${SITE_NAME} | Simple, visible phone compliance for schools`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'A simple, easy-to-audit phone management routine: students place phones into a personal locked pouch in phone-free spaces and unlock at approved times using an unlocking base.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_NAME,
    identifier: COMPANY_UEN,
    email: CONTACT_EMAIL,
    telephone: CONTACT_WHATSAPP,
    url: getSiteUrl(),
  };

  const siteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: getSiteUrl(),
  };

  return (
    <html lang="en" className="govuk-template">
      <head>
        <JsonLd data={orgJsonLd} />
        <JsonLd data={siteJsonLd} />
      </head>
      <body className="govuk-template__body">
        <a className="govuk-skip-link" href="#main-content">
          Skip to main content
        </a>
        <Header />
        <main className="govuk-main-wrapper main-content" id="main-content">
          <div className="govuk-width-container">{children}</div>
        </main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
