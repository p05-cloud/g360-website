import Script from "next/script";
import { GA_MEASUREMENT_ID } from "@/lib/site";

/**
 * Google Analytics 4 integration.
 *
 * To enable: create a GA4 property at https://analytics.google.com,
 * then set the measurement ID (looks like "G-XXXXXXXXXX") as an
 * environment variable on Vercel:
 *
 *   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
 *
 * Without that variable set, this component renders nothing.
 */
export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
