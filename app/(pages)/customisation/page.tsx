// app/customisation/page.tsx
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { ArrowRightIcon, PaletteIcon, ShieldIcon, TagIcon } from "@/components/Icons";

export const metadata: Metadata = pageMetadata({
  title: "Phone Pouch Customisation: Colours, Logo Printing, Name Holders",
  description:
    "Customise school phone pouches with 9 colours by level, single-colour school logo printing and name card holders. Options, costs and minimum quantities.",
  path: "/customisation",
});

const colours = [
  ["Red", "#d92d20"],
  ["Orange", "#f27b1a"],
  ["Yellow", "#facc15"],
  ["Green", "#16a34a"],
  ["Blue", "#2563eb"],
  ["Indigo", "#4338ca"],
  ["Purple", "#7c3aed"],
  ["Black", "#111827"],
  ["Grey", "#9ca3af"],
];

export default function CustomisationPage() {
  return (
    <>
      <PageHeader
        title="Phone pouch customisation"
        lead="Make the pouches your school’s own. Choose the options that suit your school."
      />

      <div className="row g-4">
        <div className="col-12 col-lg-4">
          <div className="tile">
            <span className="icon-tile">
              <PaletteIcon />
            </span>
            <h2 className="h4 fw-bold mt-4">Pouch colour</h2>
            <p className="mb-3">Tell levels apart at a glance, e.g. P1 green, P2 yellow.</p>
            <div className="swatches mb-4" role="list" aria-label="Available colours">
              {colours.map(([name, hex]) => (
                <span key={name} role="listitem" title={name} aria-label={name} style={{ background: hex }} />
              ))}
            </div>
            <div className="price-tag">Free</div>
            <p>For quantities above 1,000.</p>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="tile">
            <span className="icon-tile">
              <ShieldIcon />
            </span>
            <h2 className="h4 fw-bold mt-4">School logo printing</h2>
            <p className="mb-4">Your school logo on every pouch, in a single-colour print.</p>
            <div className="price-tag">
              +$0.50 <small>per pouch</small>
            </div>
            <p>Minimum quantity 1,000.</p>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="tile">
            <span className="icon-tile">
              <TagIcon />
            </span>
            <h2 className="h4 fw-bold mt-4">Name card holder</h2>
            <p className="mb-4">Everyone can see whose pouch is whose.</p>
            <div className="price-tag">
              +$0.50 <small>per pouch</small>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-wrap gap-4 mt-5">
        <Link href="/pricing" className="link-arrow">
          How pricing works <ArrowRightIcon size={16} />
        </Link>
        <Link href="/implementation-guide" className="link-arrow">
          Getting started <ArrowRightIcon size={16} />
        </Link>
      </div>

      <CtaBand className="page-block" />
    </>
  );
}
