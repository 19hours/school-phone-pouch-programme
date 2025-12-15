'use client';

import { whatsappLink } from './constants';

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink}
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
      aria-label="Chat with us on WhatsApp"
      rel="noopener noreferrer"
    >
      <span aria-hidden>💬</span>
      <span>Chat with us on WhatsApp</span>
    </a>
  );
}
