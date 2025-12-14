import Link from 'next/link'
import { getAllGuides, getAllResources } from '@/lib/content'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'School Phone Pouch Programme | Chu Technologies',
  description: 'Lockable, customisable phone pouches with Singapore-based support, ready for MOE-aligned school deployment.',
  alternates: { canonical: 'https://chu-tech.sg/' },
  openGraph: {
    title: 'School Phone Pouch Programme | Chu Technologies',
    description: 'Local Singapore supplier for secure phone pouches and school-ready workflows.'
  }
}

export default function HomePage() {
  const guides = getAllGuides().slice(0, 2)
  const resources = getAllResources().slice(0, 1)
  return (
    <div className="space-y-12">
      <Breadcrumbs crumbs={[{ name: 'Home' }]} />
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight">School Phone Pouch Programme</h1>
          <p className="text-xl">Lockable, numbered pouches with local Singapore manufacturing, customisation, and an MOE-aligned workflow.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn btn-primary">Request a Quote</Link>
            <Link href="/programme" className="btn btn-secondary">See Programme</Link>
          </div>
          <ul className="list-disc pl-5 text-lg">
            <li>Registered government vendor (UEN 201926755K)</li>
            <li>Custom colours, school logo, name card, and sling options</li>
            <li>Local supplier with in-house manufacturing</li>
          </ul>
        </div>
        <div className="bg-white shadow rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-4">How it works</h2>
          <ol className="space-y-3 list-decimal pl-5 text-lg">
            <li>Students place phones in lockable pouches during entry.</li>
            <li>Teachers verify seals; pouches stored or carried locked.</li>
            <li>Spare seals and replacements dispatched from Singapore.</li>
          </ol>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-semibold mb-3">Featured guides</h3>
          <div className="space-y-3">
            {guides.map(guide => (
              <div key={guide.slug} className="p-4 bg-white shadow rounded-lg">
                <h4 className="text-xl font-semibold">{guide.title}</h4>
                <p>{guide.description}</p>
                <Link href={`/guides/${guide.slug}`} className="text-brand-primary font-semibold">Read guide</Link>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-3">Latest resource</h3>
          {resources.map(res => (
            <div key={res.slug} className="p-4 bg-white shadow rounded-lg">
              <h4 className="text-xl font-semibold">{res.title}</h4>
              <p>{res.description}</p>
              <Link href={`/resources/${res.slug}`} className="text-brand-primary font-semibold">Read more</Link>
            </div>
          ))}
          <div className="mt-4">
            <Link href="/resources" className="btn btn-secondary">View resources</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
