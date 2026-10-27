// app/privacy/page.tsx
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { pageMetadata } from "@/lib/seo";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Statement",
  description:
    "How enquiry data is collected and used when you contact us about the SG School Phone Pouch Programme.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHeader title="Privacy statement" />
      <div className="prose">
        <section>
          <h2>What we collect</h2>
          <p>
            When you contact us on WhatsApp or by email, we collect the information you choose to
            share (for example: your name, school, role, phone number, estimated number of students
            or pouches, and any notes).
          </p>
        </section>

        <section>
          <h2>How we use your information</h2>
          <p>
            We use the information to respond to your enquiry and discuss quantities,
            pricing, and rollout planning for the SG School Phone Pouch Programme.
          </p>
        </section>

        <CtaBand />
      </div>
    </>
  );
}
