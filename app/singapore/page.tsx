import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata = {
  title: 'Singapore phone policy hub | School Phone Pouch Programme',
  description: 'Guidance for Singapore schools implementing phone-free workflows.',
  alternates: { canonical: 'https://schoolphonepouch.sg/singapore' },
  openGraph: {
    title: 'Singapore phone policy hub',
    description: 'Workflows, policy considerations, and MOE-aligned resources.'
  }
}

export default function SingaporeHub() {
  const links = [
    { href: '/singapore/school-phone-policy', label: 'School phone policy overview' },
    { href: '/singapore/secondary-school-phone-rules', label: 'Secondary school phone rules' },
    { href: '/singapore/primary-school-phone-policy', label: 'Primary school phone policy' },
    { href: '/singapore/phone-ban-vs-phone-management', label: 'Phone ban vs phone management' },
    { href: '/singapore/what-schools-need-to-prepare-2026', label: 'What schools need to prepare for 2026' },
  ]
  return (
    <div className="space-y-6">
      <Breadcrumbs crumbs={[{ name: 'Home', href: '/' }, { name: 'Singapore' }]} />
      <h1 className="text-3xl font-bold">Singapore phone policy hub</h1>
      <p className="text-lg">Guidance written for local schools, emphasising safe magnetic clips, local supply, and procurement readiness.</p>
      <div className="grid md:grid-cols-2 gap-4">
        {links.map(link => (
          <Link key={link.href} href={link.href} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
            {link.label}
          </Link>
        ))}
      </div>
      <p className="text-lg">Need help? <Link href="/contact" className="text-blue-700 underline">Request a quote</Link> and we will share templates.</p>
    </div>
  )
}
