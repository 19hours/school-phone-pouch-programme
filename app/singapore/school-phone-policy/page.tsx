import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata = {
  title: 'Singapore school phone policy | School Phone Pouch Programme',
  description: 'Practical guidance for drafting a Singapore-focused phone policy with lockable pouches.',
  alternates: { canonical: 'https://schoolphonepouch.sg/singapore/school-phone-policy' },
  openGraph: {
    title: 'Singapore school phone policy',
    description: 'Policy wording, enforcement, and communication tips for local schools.'
  }
}

export default function SingaporePolicy() {
  return (
    <div className="space-y-6">
      <Breadcrumbs crumbs={[{ name: 'Home', href: '/' }, { name: 'Singapore', href: '/singapore' }, { name: 'School phone policy' }]} />
      <h1 className="text-3xl font-bold">Singapore school phone policy</h1>
      <p className="text-lg">Outline scope, storage, exceptions, and enforcement. Pair the policy with the magnetic clip pouch to make compliance visible.</p>
      <ul className="list-disc pl-5 space-y-2 text-lg">
        <li>Scope: curriculum hours, CCAs, excursions.</li>
        <li>Storage: daily issuance, numbered seals, and spare pouches.</li>
        <li>Exceptions: SEN or medical needs with teacher sign-off.</li>
        <li>Communication: parent letters and hall posters.</li>
      </ul>
      <Link href="/contact?topic=policy" className="btn btn-primary">Request policy templates</Link>
    </div>
  )
}
