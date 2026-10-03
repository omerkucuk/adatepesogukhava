import type { LucideIcon } from "lucide-react";

/** Hizmet / sektör kartlarında kullanılan, serileştirilebilir ikon anahtarları. */
export type IconKey =
  | "snowflake"
  | "truck"
  | "container"
  | "zap"
  | "fish"
  | "apple"
  | "milk"
  | "beef"
  | "pill"
  | "utensils"
  | "ship"
  | "sprout"
  | "thermometer"
  | "door"
  | "bell"
  | "file-check";

export type IconMap = Record<IconKey, LucideIcon>;

export type FaqItem = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  /** Kart ve menülerde kullanılan kısa ad */
  shortTitle: string;
  /** Sayfa H1 başlığı */
  title: string;
  /** <title> için SEO başlığı (şablon ekini içermez) */
  seoTitle: string;
  /** Meta description (150-160 karakter hedeflenir) */
  seoDescription: string;
  keywords: string[];
  icon: IconKey;
  /** Ana sayfa bento kartı metni */
  summary: string;
  specs: string[];
  /** Detay sayfası giriş paragrafları */
  intro: string[];
  features: { title: string; description: string }[];
  useCases: string[];
  regimes: string[];
  faqs: FaqItem[];
  /** Ana sayfa bento ızgarasında geniş kart */
  featured?: boolean;
};

export type Sector = {
  icon: IconKey;
  title: string;
  description: string;
};

export type CoverageHub = {
  city: string;
  icon: IconKey;
  areas: string[];
};

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  /** ISO tarih (YYYY-MM-DD) */
  date: string;
  readMinutes: number;
  sections: BlogSection[];
};
