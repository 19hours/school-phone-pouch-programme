import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'Secondary school phone rules | School Phone Pouch Programme',
  description: 'Guidance for secondary schools managing daily phone use with magnetic clip pouches.',
  alternates: { canonical: 'https://schoolphonepouch.sg/singapore/secondary-school-phone-rules' },
  openGraph: {
    title: 'Secondary school phone rules',
    description: 'Arrival routines, CCAs, and hall checks for older cohorts.'
  }
}

export default function SecondaryRules() {
  return (
    <div className="space-y-6">
      <Breadcrumbs crumbs={[{ name: 'Home', href: '/' }, { name: 'Singapore', href: '/singapore' }, { name: 'Secondary school rules' }]} />
      <h1 className="text-3xl font-bold">Secondary school phone rules</h1>
      <p className="text-lg">Use colour-by-level pouches and multiple unlock points to keep transitions quick for larger cohorts.</p>
      <ul className="list-disc pl-5 space-y-2 text-lg">
        <li>Form teachers issue pouches during morning assembly lines.</li>
        <li>Unlock stations near gates and bus bays to prevent crowds.</li>
        <li>Provide CCAs with sling options for movement-heavy activities.</li>
      </ul>
    </div>
  )
}
