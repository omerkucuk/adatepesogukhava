/**
 * Teklif formu ve hesaplayıcının seçenek listeleri.
 * Hem istemci (form) hem sunucu (API Zod doğrulaması) tarafından kullanılır;
 * bu yüzden React veya sunucuya özel hiçbir şey import etmemelidir.
 */
export const QUOTE_SERVICES = [
  "Mobil Soğuk Depo (Konteyner)",
  "Frigorifik Araçla Taşıma",
  "Reefer Konteyner Kiralama",
  "Etkinlik & Acil Depolama",
] as const;

export const QUOTE_REGIMES = [
  "Dondurulmuş (-18°C / -20°C)",
  "Taze & Soğuk (+2°C / +4°C)",
  "İklimlendirme (+10°C / +15°C)",
] as const;

export const QUOTE_REGIONS = [
  "Çanakkale Merkez",
  "Biga",
  "Ezine",
  "Lapseki",
  "Gelibolu",
  "Ayvacık",
  "Edremit",
  "Ayvalık",
  "Bandırma",
  "Balıkesir",
  "Diğer",
] as const;

export const QUOTE_DURATIONS = ["Günlük", "Haftalık", "Aylık", "Yıllık"] as const;

export type QuoteService = (typeof QUOTE_SERVICES)[number];
export type QuoteRegime = (typeof QUOTE_REGIMES)[number];
export type QuoteRegion = (typeof QUOTE_REGIONS)[number];
export type QuoteDuration = (typeof QUOTE_DURATIONS)[number];

/** Hizmet detay sayfasından modal açılırken ön seçim için slug → form değeri eşlemesi. */
export const SERVICE_SLUG_TO_QUOTE: Record<string, QuoteService> = {
  "mobil-soguk-hava-deposu": "Mobil Soğuk Depo (Konteyner)",
  "frigorifik-tasimacilik": "Frigorifik Araçla Taşıma",
  "reefer-konteyner-kiralama": "Reefer Konteyner Kiralama",
  "acil-ve-sezonluk-soguk-depo-kiralama": "Etkinlik & Acil Depolama",
};
