import { z } from "zod";

import {
  QUOTE_DURATIONS,
  QUOTE_REGIMES,
  QUOTE_REGIONS,
  QUOTE_SERVICES,
} from "@/content/quote-options";

/** Türkiye sabit / mobil numarası: +90 5xx..., 05xx..., 0 2xx... vb. Boşluk, tire, parantez serbest. */
const TR_PHONE_REGEX = /^(?:\+?90|0)?[2-5]\d{9}$/;

export function normalizePhone(value: string) {
  return value.replace(/[\s()\-.]/g, "");
}

/**
 * Hızlı teklif formu şeması.
 * İstemcide React Hook Form (zodResolver) ve sunucuda /api/contact tarafından
 * birebir aynı kurallarla kullanılır.
 */
export const quoteSchema = z.object({
  fullName: z
    .string({ error: "Ad soyad zorunludur." })
    .trim()
    .min(3, { error: "Ad soyad en az 3 karakter olmalıdır." })
    .max(80, { error: "Ad soyad en fazla 80 karakter olabilir." }),
  company: z
    .string()
    .trim()
    .max(120, { error: "Firma adı en fazla 120 karakter olabilir." })
    .optional()
    .or(z.literal("")),
  phone: z
    .string({ error: "Telefon numarası zorunludur." })
    .trim()
    .min(1, { error: "Telefon numarası zorunludur." })
    .refine((v) => TR_PHONE_REGEX.test(normalizePhone(v)), {
      error: "Geçerli bir telefon numarası girin (ör. 0545 567 71 17).",
    }),
  service: z.enum(QUOTE_SERVICES, { error: "Lütfen bir hizmet türü seçin." }),
  regime: z.enum(QUOTE_REGIMES, { error: "Lütfen bir sıcaklık rejimi seçin." }),
  location: z.enum(QUOTE_REGIONS, { error: "Lütfen bir lokasyon seçin." }),
  duration: z.enum(QUOTE_DURATIONS, { error: "Lütfen kiralama süresini seçin." }),
  notes: z
    .string()
    .trim()
    .max(1000, { error: "Notlar en fazla 1000 karakter olabilir." })
    .optional()
    .or(z.literal("")),
  kvkk: z.boolean().refine((v) => v, {
    error: "Devam etmek için KVKK aydınlatma metnini onaylamalısınız.",
  }),
  /** Bot tuzağı (honeypot) — gerçek kullanıcılar bu alanı görmez ve boş bırakır. */
  website: z.string().optional(),
});

export type QuoteFormValues = z.infer<typeof quoteSchema>;
export type QuoteFormInput = z.input<typeof quoteSchema>;

export type QuotePrefill = Partial<
  Pick<QuoteFormValues, "service" | "regime" | "location" | "duration">
> & {
  /** Hesaplayıcıdan gelen ön hesap özeti notlara eklenir. */
  notes?: string;
};

export type ContactApiSuccess = { ok: true; whatsappUrl: string };
export type ContactApiError = {
  ok: false;
  message: string;
  fieldErrors?: Partial<Record<keyof QuoteFormValues, string[]>>;
};
export type ContactApiResponse = ContactApiSuccess | ContactApiError;
