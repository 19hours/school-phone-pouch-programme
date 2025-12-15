import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-lg">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-wide text-slate-300">Local vendor</p>
          <h3 className="text-2xl font-semibold">Chu Technologies Pte Ltd</h3>
          <p className="font-semibold">UEN 201926755K</p>
          <p>Registered Singapore government vendor</p>
          <p>Schoolphonepouch.sg — local supplier</p>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Procurement ready</h4>
          <p className="text-slate-300">Vendor registration, tax invoices, and student-safe magnetic clip locking.</p>
          <p className="text-slate-300">Custom colours by level, logo, and name card window included.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick links</h4>
          <ul className="space-y-2">
            <li><Link href="/programme" className="hover:underline">Programme</Link></li>
            <li><Link href="/customisation" className="hover:underline">Customisation</Link></li>
            <li><Link href="/compare" className="hover:underline">Compare options</Link></li>
            <li><Link href="/resources" className="hover:underline">Resources & news</Link></li>
            <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="text-lg font-semibold">Contact</h4>
          <p>Email: <Link href="mailto:hello@schoolphonepouch.sg" className="hover:underline">hello@schoolphonepouch.sg</Link></p>
          <p>WhatsApp: via floating button</p>
          <Link href="/contact" className="btn btn-secondary mt-2">Request a Quote</Link>
        </div>
      </div>
    </footer>
  )
}
