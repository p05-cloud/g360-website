import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact G360 — Get in Touch",
  description:
    "Get in touch with the G360 team for fitness consultations, partnerships, bulk inquiries and product availability. Reach us in Mumbai, Maharashtra, India.",
  keywords: [
    "contact G360",
    "Prakash More contact",
    "Power Storm Nutrition contact",
    "fitness consultation Mumbai",
  ],
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact G360 — Get in Touch",
    description:
      "Reach out for fitness consultations, product inquiries and partnerships.",
    url: `${SITE_URL}/contact`,
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
