// WhatsApp-only hotline (no voice calls).
const WHATSAPP_E164 = "6562576081";

export const whatsappDisplay = "+65 6257 6081";

export const whatsappPresetMessage =
  "Hello, I’m contacting you about the SG School Phone Pouch Programme for our school.";

// Pre-filled message for "Get a quotation" buttons. Quotations are handled on WhatsApp only.
export const quotationMessage =
  "Hello, I’d like a quotation for the SG School Phone Pouch Programme. Our school is ___ and we have about ___ students.";

export function buildWhatsAppUrl(message: string = whatsappPresetMessage) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_E164}?text=${encoded}`;
}
