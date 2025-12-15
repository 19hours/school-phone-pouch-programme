import Link from 'next/link';
import { whatsappLink } from './constants';

interface CTAButtonsProps {
  primaryHref?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  className?: string;
}

export function CTAButtons({
  primaryHref = '/contact',
  primaryLabel = 'Book a demo',
  secondaryLabel = 'WhatsApp us',
  className = '',
}: CTAButtonsProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Link href={primaryHref} className="btn-primary focus-ring">
        {primaryLabel}
      </Link>
      <a href={whatsappLink} className="btn-secondary focus-ring" rel="noopener noreferrer">
        {secondaryLabel}
      </a>
    </div>
  );
}
