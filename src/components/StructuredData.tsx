import { SITE_URL, site } from "@/lib/site";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}#organization`,
        name: site.name,
        url: SITE_URL,
        logo: `${SITE_URL}/images/tild3537-3633-4531-b938-646266346431__logo.svg`,
        sameAs: [site.social.facebook, site.social.instagram, site.social.youtube],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}#localbusiness`,
        name: site.name,
        url: SITE_URL,
        telephone: site.phone.nl,
        email: site.email,
        priceRange: "€€",
        areaServed: { "@type": "Country", name: "Netherlands" },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "09:00",
            closes: "19:00",
          },
        ],
        address: {
          "@type": "PostalAddress",
          addressCountry: "NL",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}#website`,
        url: SITE_URL,
        name: site.name,
        inLanguage: "nl-NL",
        publisher: { "@id": `${SITE_URL}#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
