import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata = {
  title: 'Sitemap | School Phone Pouch Programme',
  description: 'Human-readable sitemap linking to all hubs and key pages.',
  alternates: { canonical: 'https://schoolphonepouch.sg/sitemap' },
  openGraph: {
    title: 'Sitemap | School Phone Pouch Programme',
    description: 'Quick links to hubs, static pages, and dynamic resources.'
  }
}

const staticLinks = [
  '/', '/programme', '/customisation', '/pricing', '/about', '/contact', '/compare', '/guides', '/faq', '/resources',
  '/privacy', '/terms', '/singapore', '/singapore/school-phone-policy', '/singapore/secondary-school-phone-rules',
  '/singapore/primary-school-phone-policy', '/singapore/phone-ban-vs-phone-management', '/singapore/what-schools-need-to-prepare-2026',
  '/customisation/school-logo', '/customisation/colour-options', '/customisation/name-card', '/customisation/sling',
  '/resources/singapore-phone-rules'
]

export default function SitemapPage() {
  return (
    <div className="space-y-6">
      <Breadcrumbs crumbs={[{ name: 'Home', href: '/' }, { name: 'Sitemap' }]} />
      <h1 className="text-3xl font-bold">Sitemap</h1>
      <p className="text-lg">Use these links to navigate directly to programme details, FAQs, and resources.</p>
      <div className="grid md:grid-cols-2 gap-4">
        {staticLinks.map(link => (
          <Link key={link} href={link} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
            {link}
          </Link>
        ))}
      </div>
      <p className="text-lg">Dynamic comparison, guide, FAQ, and news pages are linked from their hubs.</p>
    </div>
  )
}
