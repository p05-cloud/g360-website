// ============================================
// Site-wide configuration
// ============================================

// Primary site URL — override via NEXT_PUBLIC_SITE_URL env var when you point
// a custom domain (e.g. https://g360.in) at the Vercel deployment.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://g360-website.vercel.app";

export const SITE_NAME = "G360 - Guru 360";
export const SITE_SHORT_NAME = "G360";
export const SITE_DEFAULT_TITLE = "G360 - Guru 360 | Prakash More";
export const SITE_TITLE_TEMPLATE = "%s | G360 - Guru 360";
export const SITE_DESCRIPTION =
  "G360 by Prakash More — Premium Power Storm sports nutrition, protein supplements, and fitness products. Trusted by 1000+ athletes across India with 20+ years of coaching experience.";

// Google Analytics 4 measurement ID. When you set this (either in .env or as
// a Vercel environment variable named NEXT_PUBLIC_GA_ID), analytics start
// tracking automatically. Until then, the analytics component no-ops.
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// Brand colors reused across metadata (manifest theme, Twitter card, etc.)
export const BRAND_COLOR_BG = "#050d18";
export const BRAND_COLOR_ACCENT = "#d4af37";
