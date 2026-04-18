import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Premium Sports Nutrition & Supplements",
  description:
    "Shop Power Storm by G360 — Whey Protein (Isolate, Blend, Nitro, Diet), BCAA, EAA, Pre-Workout, Creatine, Mass Gainer, Omega-3, Multivitamins and more. Premium quality supplements for Indian athletes.",
  keywords: [
    "whey protein India",
    "isolate whey",
    "mass gainer",
    "BCAA India",
    "EAA supplement",
    "pre-workout India",
    "creatine monohydrate",
    "Power Storm nutrition",
    "G360 supplements",
    "sports nutrition India",
  ],
  alternates: {
    canonical: `${SITE_URL}/products`,
  },
  openGraph: {
    title: "Premium Sports Nutrition & Supplements | G360",
    description:
      "Shop Power Storm by G360 — Premium whey protein, BCAA, pre-workout and more for Indian athletes.",
    url: `${SITE_URL}/products`,
    type: "website",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
