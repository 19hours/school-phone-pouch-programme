// app/resources/layout.tsx
import type { Metadata } from "next";
import ProgrammePromoSidebar from "@/components/ProgrammePromoSidebar";

export const metadata: Metadata = {
  title: "Resources | SG School Phone Pouch Programme",
  description:
    "Practical resources for Singapore schools planning phone-free spaces, consistent routines, and implementation details.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-4">
      <div className="row g-4 align-items-start">
        <main className="col-12 col-lg-8">{children}</main>
        <aside className="col-12 col-lg-4">
          <ProgrammePromoSidebar />
        </aside>
      </div>
    </div>
  );
}
