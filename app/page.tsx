// app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { pageMetadata, siteConfig } from "@/lib/seo";
import { CtaBand } from "@/components/CtaBand";
import { CustomerLogos } from "@/components/Customers";
import { QuoteButton } from "@/components/QuoteButton";
import {
  ArrowRightIcon,
  BookIcon,
  BuildingIcon,
  CheckIcon,
  ClipboardIcon,
  HeartIcon,
  PaletteIcon,
  TagIcon,
  UserIcon,
} from "@/components/Icons";

export const metadata: Metadata = pageMetadata({
  title: siteConfig.defaultTitle,
  description: siteConfig.defaultDescription,
  path: "/",
  absoluteTitle: true,
});

const stats = [
  { value: "Free", label: "Unlocking base for every 100 pouches purchased" },
  { value: "All", label: "Phone models supported" },
  { value: "3", label: "Customisation options: colour, school logo and name holder" },
  { value: "Since 2019", label: "Registered on Vendors@Gov" },
];

const steps = [
  {
    title: "Lock it",
    text: "Students put their phone in their own pouch and clip it shut as they walk into class.",
  },
  {
    title: "Keep it",
    text: "The pouch stays with the student. Teachers can see at a glance that it’s closed.",
  },
  {
    title: "Unlock it",
    text: "When phones are allowed, students tap the pouch on an unlocking base to open it.",
  },
];

const stakeholders = [
  {
    icon: <BuildingIcon />,
    who: "School leaders",
    text: "One clear routine for every class, and an easy way to see it’s working.",
    href: "/programme",
  },
  {
    icon: <BookIcon />,
    who: "Teachers",
    text: "No confiscating, storing or handing back phones. Just a quick look.",
    href: "/how-it-works",
  },
  {
    icon: <HeartIcon />,
    who: "Parents",
    text: "Their child keeps their phone all day, and staff can unlock it in an emergency.",
    href: "/resources/parents-guide",
  },
  {
    icon: <UserIcon />,
    who: "Students",
    text: "No keys to lose, and the same simple rule in every room.",
    href: "/how-it-works",
  },
];

const safety = [
  "No needles or sharp pins, just a child-safe clip",
  "Admin staff can unlock any pouch in an emergency",
  "Works with every phone model",
  "A free unlocking base for every 100 pouches",
];

const planning = [
  {
    icon: <TagIcon />,
    title: "Pricing",
    text: "Priced by quantity, with a free unlocking base for every 100 pouches.",
    href: "/pricing",
  },
  {
    icon: <ClipboardIcon />,
    title: "Getting started",
    text: "Five simple steps to get your school up and running.",
    href: "/implementation-guide",
  },
  {
    icon: <PaletteIcon />,
    title: "Customisation",
    text: "Colours for each level, your school logo and name holders.",
    href: "/customisation",
  },
];

const customerNames = siteConfig.customers
  .map((c) => c.name)
  .join(", ")
  .replace(/, ([^,]*)$/, " and $1");

const faqs = [
  {
    q: "Which schools use the pouches?",
    a: `Schools and institutions that have purchased include ${customerNames}.`,
  },
  {
    q: "What happens in an emergency?",
    a: "Admin staff can unlock pouches during emergencies, so students can reach their phones when it matters.",
  },
  {
    q: "Is it safe for younger students?",
    a: "Yes. There are no needles or sharp pins. The pouch uses a child-safe clip that opens only on an unlocking base.",
  },
  {
    q: "Do teachers have to collect phones?",
    a: "No. Each student keeps their own pouch. Teachers just check that pouches are closed.",
  },
  {
    q: "How much does it cost?",
    a: "The price per pouch depends on how many you order, and you get one free unlocking base for every 100 pouches. WhatsApp us your student numbers for a quotation.",
  },
  {
    q: "Can we start with one level first?",
    a: "Yes. Start school-wide, one level at a time, or with a smaller pilot group.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Schools first */}
      <section className="logos" aria-labelledby="trusted-heading">
        <div className="container">
          <h2 id="trusted-heading" className="logos__label">
            Trusted by schools across Singapore
          </h2>
          <CustomerLogos />
        </div>
      </section>

      {/* Banner with floating box */}
      <section className="hero-banner">
        <div className="hero-banner__image">
          <Image
            src="/images/hero-1.jpg"
            alt="Lockable phone pouches in a school classroom"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero-banner__overlay">
          <div className="container">
            <div className="hero-banner__box">
              <h1>Lockable phone pouches for phone-free lessons</h1>
              <p>
                Each student locks their phone in their own pouch at the start of class and keeps
                it with them. It opens again only when the school allows.
              </p>
              <QuoteButton />
              <ul className="hero-checks">
                <li>
                  <CheckIcon size={18} /> No needles
                </li>
                <li>
                  <CheckIcon size={18} /> Works with every phone
                </li>
                <li>
                  <CheckIcon size={18} /> No confiscating
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key figures */}
      <section className="stats" aria-labelledby="stats-heading">
        <div className="container">
          <h2 id="stats-heading">At a glance</h2>
          <div className="row g-4">
            {stats.map((s) => (
              <div key={s.label} className="col-6 col-lg-3">
                <div className="stat__value">{s.value}</div>
                <div className="stat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">How it works</h2>
            <p className="section-lead">
              The same three steps in classrooms, the hall, exams and CCAs.
            </p>
          </div>

          <ol className="row g-5 list-unstyled m-0">
            {steps.map((s, i) => (
              <li key={s.title} className="col-12 col-md-4 step">
                <span className="step-num" aria-hidden="true">
                  {i + 1}
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-5">
            <Link href="/how-it-works" className="link-arrow">
              Read more about how it works <ArrowRightIcon size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* For each stakeholder */}
      <section className="section section-muted">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">For your whole school community</h2>
            <p className="section-lead">What the programme means for each group.</p>
          </div>
          <div className="row g-4">
            {stakeholders.map((s) => (
              <div key={s.who} className="col-12 col-sm-6 col-lg-3">
                <Link href={s.href} className="tile link-tile d-flex flex-column">
                  <span className="icon-tile">{s.icon}</span>
                  <h3 className="mt-4">{s.who}</h3>
                  <p className="mb-4">{s.text}</p>
                  <span className="link-arrow mt-auto">
                    Learn more <ArrowRightIcon size={16} />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="section">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-12 col-lg-5">
              <div className="media-frame" style={{ maxWidth: 440 }}>
                <Image
                  src="/images/pouch.png"
                  alt="Lockable phone pouch with a phone inside"
                  width={1024}
                  height={1024}
                  sizes="(min-width: 992px) 440px, 100vw"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>
            <div className="col-12 col-lg-7">
              <h2 className="section-title">Designed with students’ safety first</h2>
              <p className="section-lead mb-4">
                Easy for students to use, and easy for staff to manage.
              </p>
              <ul className="checklist mb-4" style={{ fontSize: "1.1rem" }}>
                {safety.map((s) => (
                  <li key={s}>
                    <CheckIcon size={20} />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <Link href="/programme" className="btn btn-outline-primary">
                About the programme
              </Link>
            </div>
          </div>

          <div className="policy-note mt-5">
            <p>
              From January 2026, MOE restrictions on smartphone use for secondary students extend
              to recess and CCAs.
            </p>
            <Link href="/resources/singapore-school-phone-policy" className="link-arrow flex-shrink-0">
              What it means for schools <ArrowRightIcon size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Planning links */}
      <section className="section section-muted">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Planning for your school</h2>
            <p className="section-lead">Everything you need to decide and get started.</p>
          </div>
          <div className="row g-4">
            {planning.map((c) => (
              <div key={c.title} className="col-12 col-md-4">
                <Link href={c.href} className="tile link-tile d-flex flex-column">
                  <span className="icon-tile">{c.icon}</span>
                  <h3 className="mt-4">{c.title}</h3>
                  <p className="mb-4">{c.text}</p>
                  <span className="link-arrow mt-auto">
                    Read more <ArrowRightIcon size={16} />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="section-head">
            <h2 className="section-title">Frequently asked questions</h2>
          </div>
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-4">
            <Link href="/resources" className="link-arrow">
              More guides for school leaders <ArrowRightIcon size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-5 mb-lg-5">
        <div className="container">
          <CtaBand className="" />
        </div>
      </section>
    </>
  );
}
