import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata = {
  title: 'About | Chu Technologies Pte Ltd',
  description: 'Local Singapore supplier manufacturing lockable phone pouches with UEN 201926755K and government vendor status.',
  alternates: { canonical: 'https://chu-tech.sg/about' },
  openGraph: {
    title: 'About | Chu Technologies Pte Ltd',
    description: 'Registered government vendor manufacturing school phone pouches locally.'
  }
}

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs crumbs={[{ name: 'Home', href: '/' }, { name: 'About' }]} />
      <h1 className="text-3xl font-bold">About Chu Technologies Pte Ltd</h1>
      <p className="text-xl">We manufacture and support the School Phone Pouch Programme from Singapore, ensuring schools have a reliable local partner.</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold">Credibility</h3>
          <p>UEN 201926755K, registered government vendor, and experienced in education deployments.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold">Local manufacturing</h3>
          <p>In-house sewing and QC allow faster replenishment and custom runs without overseas delays.</p>
        </div>
      </div>
      <div className="flex gap-4">
        <Link href="/contact" className="btn btn-primary">Request a Quote</Link>
        <Link href="/resources" className="btn btn-secondary">Read resources</Link>
      </div>
    </div>
  )
}
