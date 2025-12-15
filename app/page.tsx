import Image from 'next/image'
import Link from 'next/link'
import { getAllGuides, getAllResources } from '@/lib/content'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'School Phone Pouch Programme | Singapore supplier',
  description: 'Lockable, customisable phone pouches with Singapore-based support, ready for MOE-aligned school deployment.',
  alternates: { canonical: 'https://schoolphonepouch.sg/' },
  openGraph: {
    title: 'School Phone Pouch Programme | Singapore supplier',
    description: 'Local Singapore supplier for secure phone pouches and school-ready workflows.'
  }
}

export default function HomePage() {
  const guides = getAllGuides().slice(0, 3)
  const resources = getAllResources().slice(0, 2)
  return (
    <div className="space-y-14">
      <Breadcrumbs crumbs={[{ name: 'Home' }]} />
      <section className="grid lg:grid-cols-2 gap-10 lg:items-start">
        <div className="space-y-6">
          <p className="text-brand-primary font-semibold">Singapore-made, procurement-ready</p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">School Phone Pouch Programme</h1>
          <p className="text-xl">Lockable, numbered pouches with local manufacturing, custom branding, and an MOE-aligned workflow that keeps classrooms focused while keeping phones secure.</p>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3">
            <h2 className="text-xl font-semibold">What schools get from day one</h2>
            <ul className="list-disc pl-5 space-y-2 text-lg">
              <li>Child-safe magnetic clip lock—no needles—plus durable sling and name card window.</li>
              <li>Colour by level and school logo options for rapid distribution and accountability.</li>
              <li>Procurement pack: specs, warranty, risk assessment, and deployment timeline.</li>
              <li>On-site demos and replacement support from a Singapore-based team.</li>
            </ul>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary w-full sm:w-auto text-center">Request a Quote</Link>
              <Link href="/programme" className="btn btn-secondary w-full sm:w-auto text-center">See programme details</Link>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200">
              <p className="font-semibold">Fits storage or carry policies</p>
              <p className="text-lg">Use as central collection at entry or let students carry locked pouches—the hardware and workflow cover both.</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200">
              <p className="font-semibold">Fast routines with accountability</p>
              <p className="text-lg">Numbering, colour by level, and a visible name card keep entry and dismissal under three minutes per class.</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 items-start">
          <div className="bg-white shadow rounded-2xl p-3">
            <Image
              src="/images/pouch-flat.svg"
              alt="Lockable phone pouch front"
              width={500}
              height={720}
              className="w-full h-auto"
              priority
            />
          </div>
          <div className="bg-white shadow rounded-2xl p-3">
            <Image
              src="/images/pouch-with-phone.svg"
              alt="Phone inserted into locked pouch"
              width={500}
              height={720}
              className="w-full h-auto"
            />
          </div>
          <div className="bg-white shadow rounded-2xl p-3 col-span-2">
            <Image
              src="/images/student-using.svg"
              alt="Student placing phone into pouch"
              width={900}
              height={1200}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white shadow rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Operational clarity from day one</h2>
          <p className="text-lg">We onboard subject leads, discipline teams, and operations managers with a simple homeroom routine, a secure magnetic clip, and ready-to-use parent and staff comms templates.</p>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200">
              <p className="font-semibold">Issue and collect in under 3 minutes</p>
              <p className="text-lg">Numbered pouches and name-card windows make accountability quick while keeping classes on schedule.</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200">
              <p className="font-semibold">Flexible for storage or carry policies</p>
              <p className="text-lg">Run a central collection point, or let students carry locked pouches with a sling—same hardware, no redesign needed.</p>
            </div>
          </div>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
          <h3 className="text-xl font-semibold">Fast next steps</h3>
          <ul className="list-disc pl-5 space-y-2 text-lg">
            <li>Ask for a demo set or schedule a school visit.</li>
            <li>Request procurement documents and government-vendor details.</li>
            <li>Choose colour by level, logo placement, and sling preferences.</li>
            <li>Receive delivery timelines and replacement SLA in writing.</li>
          </ul>
          <Link href="/contact" className="btn btn-primary w-full text-center">Speak to us</Link>
        </div>
      </section>

      <section className="grid lg:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-2xl p-6 space-y-3">
          <h3 className="text-2xl font-semibold">What a delivery includes</h3>
          <ul className="list-disc pl-5 space-y-2 text-lg">
            <li>Lockable pouches with magnetic clip, sling, and name-card window.</li>
            <li>Colour coding by level and numbered sets for every class.</li>
            <li>Unlock tools and accountability guide for staff.</li>
            <li>Parent letter, announcement slides, and entry/exit posters.</li>
          </ul>
        </div>
        <div className="bg-white shadow rounded-2xl p-6 space-y-3">
          <h3 className="text-2xl font-semibold">Procurement confidence</h3>
          <ul className="list-disc pl-5 space-y-2 text-lg">
            <li>Registered government vendor, UEN 201926755K.</li>
            <li>Local stock and replacements within days, not weeks.</li>
            <li>Risk assessment, warranty terms, and onboarding plan provided.</li>
            <li>References available from Singapore school deployments.</li>
          </ul>
        </div>
        <div className="bg-white shadow rounded-2xl p-6 space-y-3">
          <h3 className="text-2xl font-semibold">Customisation options</h3>
          <ul className="list-disc pl-5 space-y-2 text-lg">
            <li>School logo, name card, and colour by level for fast roll-out.</li>
            <li>Sling preference by cohort; labels for CCA or exam modes.</li>
            <li>Custom messaging cards inside pouches for reminders.</li>
            <li>Link directly to <Link className="text-brand-primary font-semibold" href="/customisation">customisation</Link> or <Link className="text-brand-primary font-semibold" href="/contact?topic=customisation">contact</Link> for samples.</li>
          </ul>
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
