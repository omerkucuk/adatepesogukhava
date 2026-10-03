import "server-only";

import { siteConfig } from "@/lib/site-config";
import { normalizePhone, type QuoteFormValues } from "@/lib/validations/quote";

/**
 * Doğrulanmış teklif verisinden firmanın WhatsApp hattına gidecek
 * önceden doldurulmuş mesaj bağlantısını (wa.me) üretir.
 * Mesaj yalnızca sunucuda, doğrulamadan geçmiş veriyle oluşturulur.
 */
export function buildQuoteWhatsappUrl(data: QuoteFormValues) {
  const lines = [
    "*Yeni Teklif Talebi – adatepesogukzincir.com*",
    "",
    `*Ad Soyad:* ${data.fullName}`,
    data.company ? `*Firma:* ${data.company}` : null,
    `*Telefon:* ${normalizePhone(data.phone)}`,
    "",
    `*Hizmet:* ${data.service}`,
    `*Sıcaklık Rejimi:* ${data.regime}`,
    `*Lokasyon:* ${data.location}`,
    `*Süre:* ${data.duration}`,
    data.notes ? `\n*Notlar:* ${data.notes}` : null,
  ].filter((line): line is string => line !== null);

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${text}`;
}
