import { Clock, Mail, MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { QuoteForm } from "@/components/interactive/quote-form";
import { siteConfig } from "@/lib/site-config";

export function Contact() {
  return (
    <section id="teklif" className="section-pad">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase">İletişim</span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Teklif alın, aynı gün planlayalım</h2>
          <p className="mt-4 text-muted-foreground">
            Sahada kurulum, araç planlaması ve acil destek için ekibimiz 7/24 ulaşılabilir.
          </p>

          <div className="mt-8 grid gap-3">
            <a
              href={siteConfig.contact.phoneHref}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-card transition-colors hover:border-accent/50"
            >
              <Phone className="size-5 text-accent" />
              <span>
                <span className="block text-xs text-muted-foreground">Hemen arayın</span>
                <span className="text-sm font-bold">{siteConfig.contact.phone}</span>
              </span>
            </a>
            <a
              href={siteConfig.contact.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-card transition-colors hover:border-accent/50"
            >
              <MessageCircle className="size-5 text-accent" />
              <span>
                <span className="block text-xs text-muted-foreground">WhatsApp hattı</span>
                <span className="text-sm font-bold">Anında yazışma</span>
              </span>
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-card transition-colors hover:border-accent/50"
            >
              <Mail className="size-5 text-accent" />
              <span>
                <span className="block text-xs text-muted-foreground">E-posta</span>
                <span className="text-sm font-bold">{siteConfig.contact.email}</span>
              </span>
            </a>
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-secondary p-4">
              <Clock className="size-5 text-accent" />
              <span className="text-sm font-medium">
                Acil soğuk oda arızalarında ortalama müdahale: 4 saat
              </span>
            </div>
          </div>

          <Button variant="glass" className="mt-6 w-full sm:w-auto" asChild>
            <a href={siteConfig.contact.phoneHref}>Geri arama talep et</a>
          </Button>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 shadow-frost sm:p-8">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
