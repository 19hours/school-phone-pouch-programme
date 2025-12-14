import './globals.css'
import type { Metadata } from 'next'
import { organizationSchema, productSchema } from '@/lib/schema'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton'

export const metadata: Metadata = {
  title: 'School Phone Pouch Programme',
  description: 'Singapore-made lockable phone pouch programme for schools with customisation and rapid local support.',
  alternates: { canonical: 'https://schoolphonepouch.sg' },
  openGraph: {
    title: 'School Phone Pouch Programme',
    description: 'Operationally proven, MOE-aligned phone pouch workflow with custom branding and local supplier.',
    url: 'https://schoolphonepouch.sg',
    siteName: 'School Phone Pouch Programme'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema(), productSchema()]) }}
        />
        <Header />
        <main className="max-w-6xl mx-auto px-6 py-10">
          {children}
        </main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  )
}
