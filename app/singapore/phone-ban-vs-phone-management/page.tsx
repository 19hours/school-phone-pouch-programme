import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'Phone ban vs phone management | School Phone Pouch Programme',
  description: 'Compare strict bans with managed access using lockable pouches.',
  alternates: { canonical: 'https://schoolphonepouch.sg/singapore/phone-ban-vs-phone-management' },
  openGraph: {
    title: 'Phone ban vs phone management',
    description: 'Balance safety, enforcement effort, and student accountability.'
  }
}

export default function BanVsManage() {
  return (
    <div className="space-y-6">
      <Breadcrumbs crumbs={[{ name: 'Home', href: '/' }, { name: 'Singapore', href: '/singapore' }, { name: 'Phone ban vs management' }]} />
      <h1 className="text-3xl font-bold">Phone ban vs phone management</h1>
      <p className="text-lg">A ban without hardware is hard to enforce. Pouches provide visible compliance while keeping phones accessible for emergencies.</p>
      <ul className="list-disc pl-5 space-y-2 text-lg">
        <li>Policy-only bans rely on constant reminders.</li>
        <li>Pouches reduce disputes and support spot checks.</li>
        <li>Phones stay powered for alerts; magnetic clip opens quickly when required.</li>
      </ul>
    </div>
  )
}
