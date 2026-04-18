import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Prakash More & the G360 Mission",
  description:
    "The story of Prakash More — 20+ years in fitness, founder of G360 and Power Storm Nutrition. Learn about the mission to transform lives through premium supplements and expert coaching.",
  keywords: [
    "Prakash More",
    "G360 founder",
    "Power Storm Nutrition story",
    "Indian bodybuilder",
    "Maharashtra fitness coach",
  ],
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About Prakash More & the G360 Mission",
    description:
      "20+ years of fitness expertise. The story behind G360 and Power Storm Nutrition.",
    url: `${SITE_URL}/about`,
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
