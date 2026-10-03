import { SERVICES } from "@/content/services";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import type { BlogPost, FaqItem, Service } from "@/types/content";

/**
 * schema.org JSON-LD üreticileri.
 * Not: "LogisticsService" resmi bir schema.org tipi değildir; bu nedenle işletme
 * LocalBusiness olarak işaretlenir ve lojistik hizmetleri `hasOfferCatalog` içinde
 * `Service` öğeleri olarak tanımlanır (Google'ın desteklediği yapı).
 */

type JsonLd = Record<string, unknown>;

const ORG_ID = absoluteUrl("/#organization");
const BUSINESS_ID = absoluteUrl("/#localbusiness");
const WEBSITE_ID = absoluteUrl("/#website");

const areaServed = siteConfig.areaServed.map((name) => ({ "@type": "City", name }));

function postalAddress() {
  const { streetAddress, postalCode, ...rest } = siteConfig.address;
  return {
    "@type": "PostalAddress",
    ...(streetAddress ? { streetAddress } : {}),
    ...(postalCode ? { postalCode } : {}),
    ...rest,
  };
}

export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: absoluteUrl("/icon.svg"),
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phoneE164,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phoneE164,
      contactType: "customer service",
      areaServed: "TR",
      availableLanguage: ["Turkish"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    },
  };
}

export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: siteConfig.url,
    name: siteConfig.name,
    inLanguage: "tr-TR",
    publisher: { "@id": ORG_ID },
  };
}

export function localBusinessSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": BUSINESS_ID,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: absoluteUrl("/opengraph-image"),
    logo: absoluteUrl("/icon.svg"),
    telephone: siteConfig.contact.phoneE164,
    email: siteConfig.contact.email,
    priceRange: "₺₺",
    currenciesAccepted: "TRY",
    address: postalAddress(),
    areaServed,
    parentOrganization: { "@id": ORG_ID },
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
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    knowsAbout: [
      "Soğuk zincir lojistiği",
      "Mobil soğuk hava deposu",
      "Reefer konteyner",
      "Frigorifik taşımacılık",
      "HACCP",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Soğuk Zincir Hizmetleri",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          url: absoluteUrl(`/hizmetler/${service.slug}`),
        },
      })),
    },
    sameAs: [siteConfig.contact.whatsappHref],
  };
}

export function serviceSchema(service: Service): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": absoluteUrl(`/hizmetler/${service.slug}#service`),
    name: service.title,
    serviceType: service.shortTitle,
    description: service.seoDescription,
    url: absoluteUrl(`/hizmetler/${service.slug}`),
    provider: { "@id": BUSINESS_ID },
    areaServed,
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: { "@type": "ContactPoint", telephone: siteConfig.contact.phoneE164 },
      serviceUrl: absoluteUrl(`/hizmetler/${service.slug}`),
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.shortTitle} sıcaklık rejimleri`,
      itemListElement: service.regimes.map((regime) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: `${service.shortTitle} – ${regime}` },
      })),
    },
  };
}

export function faqSchema(faqs: readonly FaqItem[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleSchema(post: BlogPost): JsonLd {
  const url = absoluteUrl(`/blog/${post.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.excerpt,
    articleSection: post.category,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "tr-TR",
    mainEntityOfPage: url,
    image: absoluteUrl("/opengraph-image"),
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    timeRequired: `PT${post.readMinutes}M`,
  };
}
