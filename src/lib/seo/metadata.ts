import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-config";

type BuildMetadataOptions = {
  /** Şablona eklenecek sayfa başlığı. `absoluteTitle` verilirse şablon uygulanmaz. */
  title?: string;
  absoluteTitle?: string;
  description: string;
  /** Kök göreli yol, ör. "/hizmetler/reefer-konteyner-kiralama" */
  path: string;
  keywords?: readonly string[];
  type?: "website" | "article";
  publishedTime?: string;
  noIndex?: boolean;
};

/**
 * Sayfa bazlı Metadata üreticisi: canonical, Open Graph ve Twitter alanlarını
 * tutarlı şekilde doldurur. OG görseli app/opengraph-image.tsx'ten otomatik gelir.
 */
export function buildMetadata({
  title,
  absoluteTitle,
  description,
  path,
  keywords,
  type = "website",
  publishedTime,
  noIndex = false,
}: BuildMetadataOptions): Metadata {
  const ogTitle = absoluteTitle ?? (title ? `${title} | ${siteConfig.name}` : siteConfig.homeTitle);

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    keywords: keywords ? [...keywords] : undefined,
    alternates: {
      canonical: path,
      languages: { "tr-TR": path },
    },
    openGraph: {
      type,
      locale: siteConfig.locale,
      url: path,
      siteName: siteConfig.name,
      title: ogTitle,
      description,
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
    robots: noIndex ? { index: false, follow: true } : undefined,
  };
}
