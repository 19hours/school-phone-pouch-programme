'use client'

import Link from 'next/link'
import { useMemo } from 'react'

const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
const defaultMessage = encodeURIComponent(
  process.env.NEXT_PUBLIC_WHATSAPP_DEFAULT_MESSAGE || 'Hi, I would like to learn about the school phone pouch programme'
)

export default function WhatsAppFloatingButton() {
  const href = useMemo(() => {
    if (number) {
      return `https://wa.me/${number}?text=${defaultMessage}`
    }
    return '/contact'
  }, [])

  return (
    <Link
      href={href}
      aria-label="WhatsApp Us"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white rounded-full shadow-lg px-5 py-3 text-lg font-semibold hover:scale-105 transition transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1DA851] flex items-center gap-3"
    >
      <svg
        aria-hidden="true"
        focusable="false"
        className="w-6 h-6"
        viewBox="0 0 32 32"
        fill="currentColor"
      >
        <path d="M16 3C9.4 3 4 8.2 4 14.8c0 2.5.8 4.7 2.2 6.6L4 29l7-2.2c1.8 1 3.8 1.5 5.9 1.5 6.6 0 12-5.3 12-11.9C28 8.2 22.6 3 16 3zm5.6 15.6c-.2.6-1 1-1.6 1.1-.4 0-.9.1-2.9-.9-2.5-1.1-4.2-3.6-4.3-3.7-.1-.1-1-1.3-1-2.4s.6-1.7.9-2c.2-.2.5-.3.7-.3h.5c.1 0 .3-.1.5.4.2.5.7 1.7.8 1.8.1.1.1.2 0 .4-.1.2-.1.3-.3.5-.1.1-.3.3-.4.4-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1.1 2.1 1.4 2.4 1.6.3.1.5.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1.3.1 1.5.7 1.7.8.2.1.4.2.5.3.1.1.1.7-.1 1.3z" />
      </svg>
      WhatsApp Us
    </Link>
  )
}
