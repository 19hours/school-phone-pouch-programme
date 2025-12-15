'use client';

import { whatsappLink } from './constants';

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink}
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-emerald-200 transition hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
      aria-label="Chat with us on WhatsApp"
      rel="noopener noreferrer"
    >
      <span aria-hidden>💬</span>
      <span>Chat with us on WhatsApp</span>
    </a>
  );
}
