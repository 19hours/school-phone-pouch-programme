'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

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
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="/" className="text-2xl font-bold text-brand-primary whitespace-nowrap">
            School Phone Pouch
          </Link>
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary"
            aria-label="Toggle navigation"
            onClick={() => setOpen(prev => !prev)}
          >
            <span className="sr-only">Open menu</span>
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <nav
          className={`w-full md:w-auto md:flex items-center gap-2 text-lg transition-all ${open ? 'block' : 'hidden md:block'}`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:gap-2 divide-y divide-slate-200 md:divide-y-0 bg-white rounded-xl md:rounded-none">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-brand-primary flex-1 md:flex-none ${pathname?.startsWith(link.href) ? 'font-semibold text-brand-primary' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
