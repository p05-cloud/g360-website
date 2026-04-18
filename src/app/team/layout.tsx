import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "The G360 Team — Coaches, Athletes & Zonal Heads",
  description:
    "Meet the G360 family — IBBF athletes, certified coaches, nutrition consultants, zonal heads, and fitness models dedicated to building champions across Maharashtra and India.",
  keywords: [
    "G360 team",
    "Prakash More team",
    "fitness coaches India",
    "IBBF athletes Maharashtra",
    "bodybuilding coaches India",
    "nutrition consultant",
    "zonal head fitness",
    "Power Storm team",
  ],
  alternates: {
    canonical: `${SITE_URL}/team`,
  },
  openGraph: {
    title: "The G360 Team — Coaches, Athletes & Zonal Heads",
    description:
      "Meet the coaches, athletes and zonal heads behind G360 and Power Storm nutrition.",
    url: `${SITE_URL}/team`,
    type: "website",
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
