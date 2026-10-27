// components/WhatsappFloatingButton.tsx
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/Icons";

export function WhatsAppFloatingButton() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsAppIcon size={24} />
      <span className="whatsapp-fab__text">WhatsApp us</span>
    </a>
  );
}
