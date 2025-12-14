import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata = {
  title: 'Programme | Chu School Phone Pouch Programme',
  description: 'Operational details, workflow, and procurement-friendly process for the Chu phone pouch programme.',
  alternates: { canonical: 'https://chu-tech.sg/programme' },
  openGraph: {
    title: 'Programme | Chu School Phone Pouch Programme',
    description: 'Workflow and procurement details for the Singapore-made phone pouch programme.'
  }
}

export default function ProgrammePage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs crumbs={[{ name: 'Home', href: '/' }, { name: 'Programme' }]} />
      <h1 className="text-3xl font-bold">Programme overview</h1>
      <p className="text-xl">Built for Singapore schools with predictable lead times, simple classroom routines, and procurement documentation ready.</p>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">Workflow</h3>
          <p>Students lock phones at entry, teachers verify seals, and pouches stay sealed through curriculum hours.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">Local supplier</h3>
          <p>In-house manufacturing in Singapore keeps replacements and spare seals on standby.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">Procurement ready</h3>
          <p>Registered government vendor (UEN 201926755K) with past deployments and documentation templates.</p>
        </div>
      </div>
      <div className="flex gap-4">
        <Link href="/contact" className="btn btn-primary">Request a Quote</Link>
        <Link href="/faq" className="btn btn-secondary">Read FAQs</Link>
      </div>
    </div>
  )
}
