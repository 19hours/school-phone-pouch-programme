// Guides under /resources. Shared by the guides index and the side menu on each guide.
export type Guide = {
  href: string;
  title: string;
  // Short label for the side menu.
  short: string;
  description: string;
};

export const guides: Guide[] = [
  {
    href: "/resources/singapore-school-phone-policy",
    title: "Singapore schools: phone policies and phone-free spaces",
    short: "Singapore school phone policy",
    description:
      "A concise overview of public guidance and examples, and how schools turn policy into routines.",
  },
  {
    href: "/resources/phone-free-spaces-in-schools",
    title: "Phone-free spaces in schools: classrooms, halls and assemblies",
    short: "Phone-free spaces in schools",
    description: "How to decide where phones are put away, and keep the routine simple everywhere.",
  },
  {
    href: "/resources/phone-pouches-for-ccas-camps",
    title: "CCAs and camps: managing phones with pouches",
    short: "CCAs and camps",
    description: "Using the same routine beyond the classroom, including CCAs, camps and trips.",
  },
  {
    href: "/resources/exams-phone-compliance",
    title: "Exams: keeping phones put away",
    short: "Exams",
    description: "Planning notes for exam venues, where expectations must be clear and easy to check.",
  },
  {
    href: "/resources/phone-pouches-vs-phone-lockers",
    title: "Phone pouches vs phone lockers",
    short: "Pouches vs lockers",
    description: "A side-by-side comparison for school leaders deciding between the two.",
  },
  {
    href: "/resources/phone-pouches-vs-yondr",
    title: "Phone pouches vs Yondr",
    short: "Pouches vs Yondr",
    description: "What to compare on safety, procurement, customisation and day-to-day use.",
  },
  {
    href: "/resources/parents-guide",
    title: "Parents’ guide",
    short: "Parents’ guide",
    description: "A simple explanation of the daily pouch routine to share with parents.",
  },
  {
    href: "/resources/updates",
    title: "Updates",
    short: "Updates",
    description: "Dated news on Singapore school phone and smartwatch guidance.",
  },
];
