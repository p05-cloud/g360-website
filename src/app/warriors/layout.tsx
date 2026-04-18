import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "G360 Warriors — Real Transformations, Real Results",
  description:
    "500+ transformation stories powered by G360 nutrition and coaching. Read reviews and watch warrior journeys from athletes across India who trusted Prakash More and Power Storm.",
  keywords: [
    "G360 transformations",
    "fitness transformation India",
    "Power Storm reviews",
    "Prakash More testimonials",
    "body transformation stories",
    "bodybuilding success stories India",
  ],
  alternates: {
    canonical: `${SITE_URL}/warriors`,
  },
  openGraph: {
    title: "G360 Warriors — Real Transformations, Real Results",
    description:
      "500+ athletes trusted G360 for their transformation. Read their stories.",
    url: `${SITE_URL}/warriors`,
    type: "website",
  },
};

export default function WarriorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
