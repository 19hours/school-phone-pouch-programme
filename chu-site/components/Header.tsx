'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/programme', label: 'Programme' },
  { href: '/customisation', label: 'Customisation' },
  { href: '/compare', label: 'Compare' },
  { href: '/guides', label: 'Guides' },
  { href: '/resources', label: 'Resources' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' }
]

export default function Header() {
  const pathname = usePathname()
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-brand-primary">Chu School Phone Pouch</Link>
        <nav className="flex items-center gap-4 text-lg">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-brand-primary ${pathname?.startsWith(link.href) ? 'font-semibold text-brand-primary' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
