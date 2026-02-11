import type { Metadata } from "next";
import { Orbitron, Rajdhani, Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import ScrollProgress from "@/components/layout/ScrollProgress";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "G360 - Guru 360 | Prakash More",
    template: "%s | G360 - Guru 360",
  },
  description:
    "G360 by Prakash More - Premium sports nutrition and fitness supplements. Trusted by 1000+ athletes with 20+ years of experience. Whey Protein, BCAAs, Pre-Workout, and more.",
  keywords: [
    "G360",
    "Guru 360",
    "Prakash More",
    "whey protein",
    "sports nutrition",
    "fitness supplements",
    "BCAA",
    "pre-workout",
    "creatine",
    "mass gainer",
    "India",
  ],
  authors: [{ name: "Prakash More" }],
  creator: "G360 - Guru 360",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "G360 - Guru 360",
    title: "G360 - Guru 360 | Prakash More",
    description:
      "Premium sports nutrition and fitness supplements by Prakash More. Trusted by 1000+ athletes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "G360 - Guru 360 | Prakash More",
    description:
      "Premium sports nutrition and fitness supplements by Prakash More.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${orbitron.variable} ${rajdhani.variable} ${cinzel.variable} antialiased`}
      >
        <ScrollProgress />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        {/* MobileBottomNav only visible on small screens via internal CSS */}
        <MobileBottomNav />
      </body>
    </html>
  );
}
