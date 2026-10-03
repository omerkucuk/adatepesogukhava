import { Logo } from "./logo";
import { siteConfig } from "@/lib/site-config";

const COLUMNS = [
  {
    title: "Çözümler",
    links: [
      { label: "Mobil Soğuk Depo", href: "#cozumler" },
      { label: "Frigorifik Taşıma", href: "#cozumler" },
      { label: "Reefer Konteyner", href: "#cozumler" },
      { label: "Acil Kiralama", href: "#cozumler" },
    ],
  },
  {
    title: "Kurumsal",
    links: [
      { label: "Hizmet Bölgeleri", href: "#bolgeler" },
      { label: "Sektörler", href: "#sektorler" },
      { label: "Hesaplayıcı", href: "#hesaplayici" },
      { label: "Teklif Al", href: "#teklif" },
    ],
  },
  {
    title: "Yasal",
    links: [
      { label: "KVKK Aydınlatma Metni", href: "#teklif" },
      { label: "Gizlilik Sözleşmesi", href: "#teklif" },
      { label: "Sertifikalar & HACCP", href: "#teklif" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-gradient-navy pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_repeat(3,0.8fr)]">
          <div>
            <Logo inverted />
            <p className="mt-5 max-w-xs text-sm text-primary-foreground/65">
              Çanakkale merkezli mobil soğuk hava deposu, frigorifik taşıma ve reefer konteyner
              çözümleri.
            </p>
            <div className="mt-5 space-y-1 text-sm text-primary-foreground/80">
              <p>{siteConfig.contact.phone}</p>
              <p>{siteConfig.contact.email}</p>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-bold tracking-[0.18em] text-accent uppercase">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Adatepe Soğuk Zincir. Tüm hakları saklıdır.</p>
          <p>Çanakkale · Balıkesir · Marmara & Ege hattı</p>
        </div>
      </div>
    </footer>
  );
}
