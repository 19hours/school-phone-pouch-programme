// components/CtaBand.tsx
// Standard call to action used at the end of every page (Isomer-style infobar).
import { siteConfig } from "@/lib/seo";
import { QuoteButton } from "@/components/QuoteButton";

type Props = {
  title?: string;
  text?: string;
  label?: string;
  className?: string;
};

export function CtaBand({
  title = `Planning phone-free spaces for ${siteConfig.rolloutYear}?`,
  text = "WhatsApp us how many students you have and which levels you’d like to start with. We’ll send you a quotation.",
  label,
  className = "mt-5",
}: Props) {
  return (
    <section className={`cta-band ${className}`} aria-label="Get a quotation">
      <h2 className="mb-3">{title}</h2>
      <p className="text-muted mb-4">{text}</p>
      <QuoteButton label={label} />
    </section>
  );
}
