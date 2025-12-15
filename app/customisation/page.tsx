import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata = {
  title: 'Customisation | School Phone Pouch Programme',
  description: 'Colour, name card, sling, and logo options for your school phone pouch programme.',
  alternates: { canonical: 'https://schoolphonepouch.sg/customisation' },
  openGraph: {
    title: 'Customisation | School Phone Pouch Programme',
    description: 'Custom colours, logo prints, name card windows, and sling configurations for the locally produced pouch.'
  }
}

export default function CustomisationPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs crumbs={[{ name: 'Home', href: '/' }, { name: 'Customisation' }]} />
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Customisation options</h1>
          <p className="text-xl">Match school colours, add logos, choose sling lengths, and include name cards for easy issuance.</p>
          <div className="grid sm:grid-cols-2 gap-4">
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
              <p>Manufactured locally to shorten lead times and support quick replacements from Singapore.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact?topic=customisation&message=I%20want%20custom%20pouch%20branding" className="btn btn-primary w-full sm:w-auto text-center">Request a Quote</Link>
            <Link href="/compare/lockable-pouch-vs-standard-bags" className="btn btn-secondary w-full sm:w-auto text-center">Compare options</Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-3 rounded-2xl shadow">
            <Image src="/images/pouch-flat.svg" alt="Front view of lockable pouch" width={500} height={720} className="w-full h-auto" />
          </div>
          <div className="bg-white p-3 rounded-2xl shadow">
            <Image src="/images/pouch-with-phone.svg" alt="Phone partially inserted into pouch" width={500} height={720} className="w-full h-auto" />
          </div>
          <div className="bg-white p-3 rounded-2xl shadow col-span-2">
            <Image src="/images/student-using.svg" alt="Student demonstration of pouch workflow" width={900} height={1200} className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}
