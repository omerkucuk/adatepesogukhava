/**
 * Sitenin tek doğruluk kaynağı: iletişim, marka ve SEO sabitleri.
 * Metadata, JSON-LD, Header/Footer ve WhatsApp yönlendirmesi buradan beslenir.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.adatepesogukzincir.com"
).replace(/\/$/, "");

export const siteConfig = {
  name: "Adatepe Soğuk Zincir",
  legalName: "Adatepe Soğuk Zincir",
  url: SITE_URL,
  locale: "tr_TR",
  titleTemplate: "%s | Adatepe Soğuk Zincir - Mobil Soğuk Depolama & Lojistik",
  homeTitle: "Adatepe Soğuk Zincir | Mobil Soğuk Depo & Frigorifik Lojistik Çözümleri",
  description:
    "Çanakkale, Balıkesir, Ezine ve Biga merkezli mobil soğuk hava deposu, reefer konteyner kiralama ve frigorifik donuk taşıma. Güney Marmara ve Ege hattında -20°C / +20°C, 7/24 IoT takipli soğuk zincir.",
  keywords: [
    "soğuk zincir",
    "mobil soğuk hava deposu",
    "soğuk depo kiralama",
    "reefer konteyner kiralama",
    "frigorifik taşımacılık",
    "donuk taşıma",
    "soğuk zincir lojistik",
    "Çanakkale soğuk hava deposu",
    "Balıkesir soğuk zincir",
    "Ezine soğuk depo",
    "Biga frigorifik araç",
    "Güney Marmara soğuk zincir",
    "Ege soğuk depolama",
  ],
  contact: {
    phone: "+90 545 567 71 17",
    phoneE164: "+905455677117",
    phoneHref: "tel:+905455677117",
    whatsappNumber: "905455677117",
    whatsappHref: "https://wa.me/905455677117",
    email: "ozayemre@gmail.com",
  },
  address: {
    // TODO: Açık adres netleşince streetAddress ve postalCode doldurulmalı (LocalBusiness şeması için önemlidir).
    streetAddress: "",
    postalCode: "",
    addressLocality: "Çanakkale",
    addressRegion: "Çanakkale",
    addressCountry: "TR",
  },
  /** Yerel SEO için hizmet verilen bölgeler (JSON-LD areaServed). */
  areaServed: [
    "Çanakkale",
    "Biga",
    "Ezine",
    "Lapseki",
    "Gelibolu",
    "Ayvacık",
    "Bozcaada",
    "Gökçeada",
    "Balıkesir",
    "Edremit",
    "Bandırma",
    "Gönen",
    "Ayvalık",
  ],
  openingHours: "7/24",
  stats: {
    vehicles: 12,
    mobileUnits: 18,
    reefers: 9,
  },
} as const;

export type SiteConfig = typeof siteConfig;

/** Mutlak URL üretir: absoluteUrl("/hizmetler") → https://www.../hizmetler */
export function absoluteUrl(path = "/") {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
