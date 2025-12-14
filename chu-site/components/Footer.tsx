import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-lg">
        <div>
          <h3 className="text-xl font-semibold mb-3">Chu Technologies Pte Ltd</h3>
          <p>UEN 201926755K</p>
          <p>Registered government vendor</p>
          <p>Local Singapore supplier</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick links</h4>
          <ul className="space-y-2">
            <li><Link href="/programme" className="hover:underline">Programme</Link></li>
            <li><Link href="/customisation" className="hover:underline">Customisation</Link></li>
            <li><Link href="/compare" className="hover:underline">Compare</Link></li>
            <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <p>Email: hello@chu-tech.sg</p>
          <p>WhatsApp: configured via button</p>
          <Link href="/contact" className="btn btn-secondary mt-3">Request a Quote</Link>
        </div>
      </div>
    </footer>
  )
}
