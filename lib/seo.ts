import type { Metadata } from "next";

type Customer = {
  name: string;
  initials: string;
  // Crest under public/images/schools/, with its pixel size. Without one, a monogram of `initials` is shown.
  logo?: { src: string; width: number; height: number };
  // Show the name beside the crest when the crest itself doesn't include it.
  showName?: boolean;
};

// Schools and institutions that have purchased. Shown as social proof across the site.
// Crests were taken from each school's official website.
const customers: Customer[] = [
  {
    name: "Pei Hwa Secondary School",
    initials: "PHSS",
    logo: { src: "/images/schools/pei-hwa.webp", width: 163, height: 176 },
    showName: true,
  },
  {
    name: "Changkat Changi Secondary School",
    initials: "CCSS",
    logo: { src: "/images/schools/changkat-changi.webp", width: 466, height: 176 },
  },
  {
    name: "Ahmad Ibrahim Secondary School",
    initials: "AISS",
    logo: { src: "/images/schools/ahmad-ibrahim.png", width: 265, height: 80 },
  },
  {
    name: "Nanyang Academy of Fine Arts",
    initials: "NAFA",
    logo: { src: "/images/schools/nafa.svg", width: 500, height: 99 },
  },
];

export const siteConfig = {
  brandName: "SG School Phone Pouch Programme",
  companyName: "Chu Technologies Pte Ltd",
  uen: "201926755K",
  siteUrl: "https://www.schoolphonepouch.sg",

  // The school year schools are currently planning for. Update each year.
  rolloutYear: 2027,

  contact: {
    name: "Kevin Chu",
    email: "kevin.chu@ct.com.sg",
  },

  customers,

  defaultTitle:
    "Lockable Phone Pouches for Singapore Schools | SG School Phone Pouch Programme",
  defaultDescription:
    "Lockable phone pouches used by Pei Hwa, Changkat Changi and Ahmad Ibrahim Secondary schools and NAFA. No needles, fits all phones, a free unlocking base per 100 pouches.",
};

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  // Use the title as-is, without the " | brand" suffix.
  absoluteTitle?: boolean;
  type?: "website" | "article";
};

// Builds consistent per-page metadata: title, description, canonical, Open Graph and Twitter.
// Without this, pages inherit the homepage's og:title and og:url when shared.
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle,
  type = "website",
}: PageMetaInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${siteConfig.brandName}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: "en_SG",
      siteName: siteConfig.brandName,
      title: fullTitle,
      description,
      url: path,
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Lockable phone pouch for Singapore schools" }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/og.jpg"],
    },
  };
}
