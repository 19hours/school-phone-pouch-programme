import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata = {
  title: 'About | Chu Technologies Pte Ltd',
  description: 'Local Singapore supplier manufacturing lockable phone pouches with UEN 201926755K and government vendor status.',
  alternates: { canonical: 'https://schoolphonepouch.sg/about' },
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
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3">
        <h3 className="text-xl font-semibold">Contact details</h3>
        <p className="text-lg">Person in charge: Kevin Chu</p>
        <p className="text-lg">Email: <Link className="text-brand-primary font-semibold" href="mailto:kevin.chu@ct.com.sg">kevin.chu@ct.com.sg</Link></p>
        <p className="text-lg">WhatsApp: <Link className="text-brand-primary font-semibold" href="https://wa.me/6598222723">98222723</Link></p>
        <p className="text-lg">Local supplier, registered government vendor (UEN 201926755K), and in-house manufacturer for school phone pouches.</p>
      </div>
      <div className="flex gap-4">
        <Link href="/contact" className="btn btn-primary">Request a Quote</Link>
        <Link href="/resources" className="btn btn-secondary">Read resources</Link>
      </div>
    </div>
  )
}
