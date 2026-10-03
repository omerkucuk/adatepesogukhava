import { NextResponse } from "next/server";
import { z } from "zod";

import { quoteSchema, type ContactApiResponse } from "@/lib/validations/quote";
import { siteConfig } from "@/lib/site-config";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1. Zod Doğrulaması
    const parsed = quoteSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json<ContactApiResponse>(
        {
          ok: false,
          message: "Lütfen formdaki hataları düzeltin.",
          fieldErrors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // 2. Honeypot kontrolü (Bot tuzağı)
    if (data.website) {
      // Bot tespit edildi, başarılı gibi dönüyoruz ama hiçbir şey yapmıyoruz.
      return NextResponse.json<ContactApiResponse>({
        ok: true,
        whatsappUrl: siteConfig.contact.whatsappHref,
      });
    }

    // 3. WhatsApp Mesajı Oluşturma
    const messageParts = [
      "🧊 *YENİ TEKLİF TALEBİ*",
      "",
      `*Yetkili:* ${data.fullName}`,
      data.company ? `*Firma:* ${data.company}` : null,
      `*Telefon:* ${data.phone}`,
      "",
      `*Hizmet:* ${data.service}`,
      `*Rejim:* ${data.regime}`,
      `*Lokasyon:* ${data.location}`,
      `*Süre:* ${data.duration}`,
    ];

    if (data.notes) {
      messageParts.push("", "*Notlar / Ek Bilgiler:*", data.notes);
    }

    const messageText = messageParts.filter((p) => p !== null).join("\n");
    const encodedText = encodeURIComponent(messageText);

    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodedText}`;

    // 4. İstemciye Başarılı Yanıt Dön
    return NextResponse.json<ContactApiResponse>({
      ok: true,
      whatsappUrl,
    });
  } catch (error) {
    console.error("API /contact error:", error);
    return NextResponse.json<ContactApiResponse>(
      {
        ok: false,
        message: "Beklenmeyen bir sunucu hatası oluştu.",
      },
      { status: 500 }
    );
  }
}
