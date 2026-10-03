import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

import "@/app/globals.css";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { QuoteProvider } from "@/components/interactive/quote-provider";
import { MotionProvider } from "@/components/interactive/motion/motion-provider";
import { DynamicContactModal } from "@/components/interactive/dynamic-contact-modal";
import { WhatsappFab } from "@/components/site/whatsapp-fab";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.homeTitle,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.homeTitle,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.homeTitle,
    description: siteConfig.description,
    creator: "@adatepesogukzincir",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0F172A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-accent selection:text-white">
        <MotionProvider>
          <QuoteProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <DynamicContactModal />
            <WhatsappFab />
            <Toaster position="bottom-right" />
          </QuoteProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
