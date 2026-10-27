// components/QuoteButton.tsx
// "Get a quotation" opens WhatsApp with a pre-filled message; quotations are handled there only.
import { buildWhatsAppUrl, quotationMessage } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/Icons";

type Props = {
  label?: string;
  size?: "md" | "lg";
  className?: string;
};

export function QuoteButton({ label = "Get a quotation", size = "lg", className = "" }: Props) {
  return (
    <a
      href={buildWhatsAppUrl(quotationMessage)}
      className={`btn btn-whatsapp${size === "lg" ? " btn-lg" : ""} ${className}`.trim()}
      target="_blank"
      rel="noopener noreferrer"
    >
      <WhatsAppIcon size={size === "lg" ? 20 : 18} /> {label}
    </a>
  );
}
