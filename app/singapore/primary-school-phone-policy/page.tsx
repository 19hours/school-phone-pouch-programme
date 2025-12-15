import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'Primary school phone policy | School Phone Pouch Programme',
  description: 'Age-appropriate workflows for primary schools using child-safe magnetic clips.',
  alternates: { canonical: 'https://schoolphonepouch.sg/singapore/primary-school-phone-policy' },
  openGraph: {
    title: 'Primary school phone policy',
    description: 'Simplified routines and safety-first messaging for younger students.'
  }
}

export default function PrimaryPolicy() {
  return (
    <div className="space-y-6">
      <Breadcrumbs crumbs={[{ name: 'Home', href: '/' }, { name: 'Singapore', href: '/singapore' }, { name: 'Primary school policy' }]} />
      <h1 className="text-3xl font-bold">Primary school phone policy</h1>
      <p className="text-lg">Use clear pictograms and teacher-led issuance. The magnetic clip avoids needles and is simple for staff to operate.</p>
      <ul className="list-disc pl-5 space-y-2 text-lg">
        <li>Issue pouches after arrival checks to keep routines calm.</li>
        <li>Use house or level colours for easy visual grouping.</li>
        <li>Keep spare pouches at the general office for ad-hoc needs.</li>
      </ul>
    </div>
  )
}
