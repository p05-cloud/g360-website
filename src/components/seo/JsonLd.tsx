import Script from "next/script";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";

/**
 * JSON-LD structured data injected once at the site root.
 * This is the standard Next.js-recommended pattern for schema.org data:
 * https://nextjs.org/docs/app/building-your-application/optimizing/metadata#json-ld
 *
 * The data object below is hardcoded (no user input), so JSON.stringify
 * is safe here. Google/Bing use this to power rich results, knowledge
 * panels, sitelinks, and logo display in search.
 */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}#organization`,
        name: SITE_NAME,
        alternateName: ["G360", "Guru 360", "Power Storm Nutrition"],
        url: SITE_URL,
        logo: `${SITE_URL}/og-image.jpg`,
        image: `${SITE_URL}/og-image.jpg`,
        description: SITE_DESCRIPTION,
        founder: {
          "@type": "Person",
          name: "Prakash More",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
        sameAs: [
          "https://www.instagram.com/powerstormnutritionindia/",
          "https://www.instagram.com/guru360_prakashmore/",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-8655850932",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["en", "hi", "mr"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        publisher: { "@id": `${SITE_URL}#organization` },
        inLanguage: "en-IN",
      },
    ],
  };

  // Escape </script> to be safe even though content is hardcoded
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <Script
      id="organization-jsonld"
      type="application/ld+json"
      strategy="afterInteractive"
    >
      {json}
    </Script>
  );
}
