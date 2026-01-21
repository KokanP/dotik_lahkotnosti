import { siteConfig } from "@/lib/data";

export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": siteConfig.name,
    "image": "https://dotik-lahkotnosti.si/hero.jpg",
    "@id": "https://dotik-lahkotnosti.si",
    "url": "https://dotik-lahkotnosti.si",
    "telephone": siteConfig.phone,
    "email": siteConfig.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Aškrčeva ulica 14",
      "addressLocality": "Celje",
      "postalCode": "3000",
      "addressCountry": "SI"
    },
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      siteConfig.socials.facebook,
      siteConfig.socials.instagram
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
