// app/terms/page.tsx
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { pageMetadata } from "@/lib/seo";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = pageMetadata({
  title: "Terms",
  description:
    "Terms for using the SG School Phone Pouch Programme website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHeader title="Terms of use" />
      <div className="prose">
        <section>
          <h2>Informational site</h2>
          <p>
            This website provides information about the SG School Phone Pouch Programme.
          </p>
        </section>

        <section>
          <h2>Pricing and quotes</h2>
          <p>
            Pricing tiers are shown on the Pricing page. Final quotes confirm quantities and any
            selected options (for example, customisation).
          </p>
        </section>

        <CtaBand />
      </div>
    </>
  );
}
