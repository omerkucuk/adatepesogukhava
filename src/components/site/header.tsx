"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { siteConfig } from "@/lib/site-config";
import { useQuote } from "@/components/interactive/quote-provider";

const NAV = [
  { label: "Çözümlerimiz", href: "/#cozumler" },
  { label: "Filo & Ekipmanlar", href: "/#filo" },
  { label: "Hizmet Bölgeleri", href: "/#bolgeler" },
  { label: "Sektörler", href: "/#sektorler" },
  { label: "Blog", href: "/blog" },
];

export function Header() {
  const { openQuote } = useQuote();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "glass shadow-card" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 py-3 lg:px-8">
        <Logo inverted={!scrolled} />

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.contact.phoneHref}
            className="hidden items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-accent md:inline-flex"
          >
            <Phone className="size-3.5 text-accent" />
            {siteConfig.contact.phone}
          </a>
          <Button variant="ice" className="hidden sm:inline-flex" onClick={() => openQuote()}>
            Hızlı Teklif Al
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label="Menü"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div className="glass border-t border-border lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
              >
                {item.label}
              </a>
            ))}
            <Button
              variant="ice"
              className="mt-2"
              onClick={() => {
                setMobileOpen(false);
                openQuote();
              }}
            >
              Hızlı Teklif Al
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
