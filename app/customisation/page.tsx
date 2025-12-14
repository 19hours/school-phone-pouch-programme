import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata = {
  title: 'Customisation | School Phone Pouch Programme',
  description: 'Colour, name card, sling, and logo options for your school phone pouch programme.',
  alternates: { canonical: 'https://schoolphonepouch.sg/customisation' },
  openGraph: {
    title: 'Customisation | School Phone Pouch Programme',
    description: 'Custom colours, logo prints, name card windows, and sling configurations for the Chu pouch.'
  }
}

export default function CustomisationPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs crumbs={[{ name: 'Home', href: '/' }, { name: 'Customisation' }]} />
      <h1 className="text-3xl font-bold">Customisation options</h1>
      <p className="text-xl">Match school colours, add logos, choose sling lengths, and include name cards for easy issuance.</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold">Colour & branding</h3>
          <p>Choose from navy, charcoal, or custom Pantone matches. Add school crests with heat-transfer printing.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold">Name card & numbering</h3>
          <p>Front-facing card slots with serial numbers keep issuance traceable. Pouches can be assigned per class.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold">Sling and attachments</h3>
          <p>Adjustable sling or belt loop options keep hands free while moving between venues.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold">In-house production</h3>
          <p>Manufactured locally by Chu Technologies Pte Ltd to shorten lead times and support quick replacements.</p>
        </div>
      </div>
      <div className="flex gap-4">
        <Link href="/contact?topic=customisation&message=I%20want%20custom%20pouch%20branding" className="btn btn-primary">Request a Quote</Link>
        <Link href="/compare/lockable-pouch-vs-standard-bags" className="btn btn-secondary">Compare options</Link>
      </div>
    </div>
  )
}
