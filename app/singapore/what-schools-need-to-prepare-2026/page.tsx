import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata = {
  title: 'What schools need to prepare for 2026 | School Phone Pouch Programme',
  description: 'Preparation checklist for upcoming phone management expectations in Singapore.',
  alternates: { canonical: 'https://schoolphonepouch.sg/singapore/what-schools-need-to-prepare-2026' },
  openGraph: {
    title: 'What schools need to prepare for 2026',
    description: 'Procurement, training, and communication steps ahead of policy changes.'
  }
}

export default function Prepare2026() {
  return (
    <div className="space-y-6">
      <Breadcrumbs crumbs={[{ name: 'Home', href: '/' }, { name: 'Singapore', href: '/singapore' }, { name: 'Prepare for 2026' }]} />
      <h1 className="text-3xl font-bold">What schools need to prepare for 2026</h1>
      <p className="text-lg">Plan procurement, training, and parent comms early. Local supply and in-house manufacturing keep lead times short.</p>
      <ul className="list-disc pl-5 space-y-2 text-lg">
        <li>Confirm quantities per level and buffer stock for new admissions.</li>
        <li>Schedule pilot weeks and unlock-station rehearsals.</li>
        <li>Prepare parent FAQ sheets and consent forms.</li>
        <li>Set up maintenance and replacement processes with our team.</li>
      </ul>
      <Link href="/contact?topic=planning" className="btn btn-primary">Plan with us</Link>
    </div>
  )
}
