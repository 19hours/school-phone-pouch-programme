'use client';

import { WHATSAPP_LINK } from '@/lib/site';

export default function WhatsAppFloatingButton() {
  return (
    <div className="whatsapp-floating">
      <a
        className="govuk-button govuk-button--secondary"
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        Chat with us on WhatsApp
      </a>
    </div>
  );
}
