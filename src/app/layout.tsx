import type { Metadata, Viewport } from "next";
import { Orbitron, Rajdhani, Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import ScrollProgress from "@/components/layout/ScrollProgress";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DEFAULT_TITLE,
  SITE_TITLE_TEMPLATE,
  SITE_DESCRIPTION,
  BRAND_COLOR_BG,
  BRAND_COLOR_ACCENT,
} from "@/lib/site";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_DEFAULT_TITLE,
    template: SITE_TITLE_TEMPLATE,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "G360",
    "Guru 360",
    "Prakash More",
    "Power Storm Nutrition",
    "whey protein India",
    "sports nutrition India",
    "fitness supplements India",
    "BCAA",
    "EAA",
    "pre-workout",
    "creatine monohydrate",
    "mass gainer",
    "Mumbai fitness",
    "Maharashtra bodybuilding",
    "IBBF athletes",
  ],
  authors: [{ name: "Prakash More" }],
  creator: "G360 - Guru 360",
  publisher: "G360 - Guru 360",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_DEFAULT_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "G360 - Guru 360 | Power Storm Nutrition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_DEFAULT_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: BRAND_COLOR_BG },
    { media: "(prefers-color-scheme: dark)", color: BRAND_COLOR_BG },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// Re-export unused brand accent so future gradients/metadata can reference it
export const BRAND_ACCENT = BRAND_COLOR_ACCENT;

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
        <OrganizationJsonLd />
        <GoogleAnalytics />
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
