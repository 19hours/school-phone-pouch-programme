import Breadcrumbs from '@/components/Breadcrumbs'
import LeadForm from '@/components/LeadForm'
import Link from 'next/link'

export const metadata = {
  title: 'Contact | School Phone Pouch Programme',
  description: 'Reach the Chu Technologies team for quotes, pilots, and procurement documents.',
  alternates: { canonical: 'https://schoolphonepouch.sg/contact' },
  openGraph: {
    title: 'Contact | School Phone Pouch Programme',
    description: 'Request a quote or arrange a consultation with the Singapore supplier.'
  }
}

type ContactPageProps = {
  searchParams: {
    topic?: string
    message?: string
  }
}

export default function ContactPage({ searchParams }: ContactPageProps) {
  const { topic, message } = searchParams
  const preset = topic || message ? `${topic ? `Topic: ${topic}\n` : ''}${message || ''}` : undefined

  return (
    <div className="space-y-8">
      <Breadcrumbs crumbs={[{ name: 'Home', href: '/' }, { name: 'Contact' }]} />
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Contact us</h1>
        <p className="text-xl">We respond within one working day with pricing, artwork mockups, and procurement details.</p>
        <p className="text-lg text-slate-700">
          Prefer email? Write to <Link href="mailto:hello@schoolphonepouch.sg" className="text-brand-primary underline">hello@schoolphonepouch.sg</Link>.
          You can also reach us via the green WhatsApp button on every page.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <LeadForm presetMessage={preset} />
        </div>
        <aside className="bg-white rounded-2xl shadow p-6 space-y-3" aria-label="Contact details">
          <h2 className="text-2xl font-semibold">Need help fast?</h2>
          <ul className="space-y-2 text-lg">
            <li>
              <span className="font-semibold">WhatsApp:</span> uses the quick message set in the green button.
            </li>
            <li>
              <span className="font-semibold">Email:</span> hello@schoolphonepouch.sg
            </li>
            <li>
              <span className="font-semibold">Company:</span> Chu Technologies Pte Ltd (UEN 201926755K)
            </li>
            <li>
              <span className="font-semibold">Local supplier:</span> Singapore-based manufacturing and next-day replacements.
            </li>
          </ul>
          <p className="text-slate-700 text-lg">
            Share your current phone policy, whether you need colour by level, and if you are comparing against phone lockers or Yondr.
          </p>
        </aside>
      </div>
    </div>
  )
}
