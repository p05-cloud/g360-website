import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Brand Partnerships & Collaborations",
  description:
    "G360 partners with top brands in sports nutrition, fitness apparel and wellness. Explore partnership opportunities with Power Storm Nutrition and the G360 athlete network.",
  keywords: [
    "G360 partnerships",
    "fitness brand collaboration India",
    "Power Storm partners",
    "sports nutrition partnerships",
  ],
  alternates: {
    canonical: `${SITE_URL}/brands`,
  },
  openGraph: {
    title: "Brand Partnerships & Collaborations | G360",
    description:
      "Partner with G360 and Power Storm Nutrition. Reach athletes across India.",
    url: `${SITE_URL}/brands`,
    type: "website",
  },
};

export default function BrandsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
