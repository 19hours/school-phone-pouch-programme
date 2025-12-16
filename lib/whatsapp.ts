const WHATSAPP_E164 = "6598222723";

export const whatsappPresetMessage =
  "Hello Kevin, I’m contacting you about the SG School Phone Pouch Programme for our school.";

export function buildWhatsAppUrl(message: string = whatsappPresetMessage) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_E164}?text=${encoded}`;
}
