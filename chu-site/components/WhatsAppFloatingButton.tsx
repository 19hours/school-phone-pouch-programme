'use client'

import Link from 'next/link'
import { useMemo } from 'react'

const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
const defaultMessage = encodeURIComponent(process.env.NEXT_PUBLIC_WHATSAPP_DEFAULT_MESSAGE || 'Hi, I would like to learn about the school phone pouch programme')

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
      className="fixed bottom-6 right-6 bg-brand-accent text-white rounded-full shadow-lg px-5 py-3 text-lg font-semibold hover:scale-105 transition transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent"
    >
      WhatsApp Us
    </Link>
  )
}
