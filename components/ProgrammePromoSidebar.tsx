// components/ProgrammePromoSidebar.tsx
import Link from "next/link";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type Props = {
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function ProgrammePromoSidebar({
  title = "SG School Phone Pouch Programme",
  description = "A simple, visible and easy-to-audit way to manage phones in phone-free spaces.",
  imageSrc = "/images/pouch.png",
  imageAlt = "Lockable phone pouch and unlocking base used for school phone management",
}: Props) {
  return (
    <div className="bg-light rounded p-4">
      <div className="fw-bold mb-2">{title}</div>
      <p className="text-muted mb-3">{description}</p>

      <div className="ratio ratio-4x3 rounded overflow-hidden mb-3 bg-white d-flex align-items-center justify-content-center">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="img-fluid"
          style={{ maxHeight: "100%", width: "auto" }}
        />
      </div>

      <ul className="m-0 text-muted">
        <li className="mb-2">
          <Link href="/programme" className="resource-secondary">
            Programme overview for principals →
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/implementation-guide" className="resource-secondary">
            Rollout planning guide for administrators →
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/pricing" className="resource-secondary">
            Pricing tiers and unlocking bases →
          </Link>
        </li>
        <li className="mb-0">
          <Link href="/samples-demo" className="resource-secondary">
            Request samples and a school demo →
          </Link>
        </li>
      </ul>

      <div className="d-grid gap-2 mt-3">
        <Link href="/contact" className="btn btn-primary" style={{ minHeight: 44 }}>
          Book a demo
        </Link>
        <a
          href={buildWhatsAppUrl()}
          className="btn btn-outline-primary"
          target="_blank"
          rel="noopener noreferrer"
          style={{ minHeight: 44 }}
        >
          Chat with us on WhatsApp
        </a>
      </div>
    </div>
  );
}
