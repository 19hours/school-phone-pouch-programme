// app/resources/page.tsx
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { ArrowRightIcon } from "@/components/Icons";
import { guides } from "@/lib/guides";

export const metadata: Metadata = pageMetadata({
  title: "Resources for Phone-Free Schools in Singapore",
  description:
    "Practical guides for Singapore school leaders: MOE phone policy context, phone-free spaces, exams, CCAs and camps, and comparisons with lockers and Yondr.",
  path: "/resources",
});

export default function ResourcesIndexPage() {
  return (
    <>
      <PageHeader
        title="Guides for phone-free schools"
        lead="Practical reading for school leaders planning phone-free spaces and routines in Singapore."
      />

      <div className="row g-4">
        {guides.map((r) => (
          <div key={r.href} className="col-12 col-md-6">
            <Link href={r.href} className="tile link-tile d-flex flex-column">
              <h2 className="h5 fw-bold mb-2">{r.title}</h2>
              <p className="mb-4">{r.description}</p>
              <span className="link-arrow mt-auto">
                Read guide <ArrowRightIcon size={16} />
              </span>
            </Link>
          </div>
        ))}
      </div>

      <CtaBand className="page-block" />
    </>
  );
}
