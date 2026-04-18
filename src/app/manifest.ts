import type { MetadataRoute } from "next";
import {
  SITE_NAME,
  SITE_SHORT_NAME,
  SITE_DESCRIPTION,
  BRAND_COLOR_BG,
  BRAND_COLOR_ACCENT,
} from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_SHORT_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: BRAND_COLOR_BG,
    theme_color: BRAND_COLOR_ACCENT,
    orientation: "portrait",
    scope: "/",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/og-image.jpg",
        sizes: "1200x630",
        type: "image/jpeg",
      },
    ],
  };
}
