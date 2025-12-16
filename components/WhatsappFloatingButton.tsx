// components/WhatsappFloatingButton.tsx
"use client";

import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppFloatingButton() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab d-inline-flex align-items-center gap-2"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="whatsapp-fab__icon" aria-hidden="true">
        {/* Simple chat bubble icon */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
        >
          <path
            d="M4 5.5C4 4.12 5.12 3 6.5 3h11C19.88 3 21 4.12 21 5.5v8C21 14.88 19.88 16 18.5 16H10l-4.5 4V16H6.5C5.12 16 4 14.88 4 13.5v-8Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M8 8h9M8 11h6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="whatsapp-fab__text">Chat with us on WhatsApp</span>
    </a>
  );
}