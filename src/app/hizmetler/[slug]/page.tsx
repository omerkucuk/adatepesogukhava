import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ChevronRight, Info } from "lucide-react";
import Link from "next/link";

import { buildMetadata } from "@/lib/seo/metadata";
import { SERVICES, getServiceBySlug } from "@/content/services";
import { SERVICE_SLUG_TO_QUOTE } from "@/content/quote-options";
import { Reveal } from "@/components/interactive/motion/reveal";
import { QuoteTrigger } from "@/components/interactive/quote-trigger";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/hizmetler/${service.slug}`,
    keywords: service.keywords,
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const quotePrefillService = SERVICE_SLUG_TO_QUOTE[service.slug];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-navy px-4 pt-32 pb-16 sm:px-6 lg:px-8 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex items-center gap-2 text-sm font-semibold text-accent">
            <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <ChevronRight className="size-4" />
            <span>Hizmetler</span>
            <ChevronRight className="size-4" />
            <span className="text-white">{service.shortTitle}</span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-center">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
                {service.title.split(" (")[0]}{" "}
                {service.title.includes("(") && (
                  <span className="text-gradient-ice block text-3xl sm:text-4xl lg:text-5xl mt-2">
                    ({service.title.split("(")[1]}
                  </span>
                )}
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/75 leading-relaxed">
                {service.summary}
              </p>
              
              <ul className="mt-8 flex flex-wrap gap-3">
                {service.specs.map((spec, i) => (
                  <li
                    key={i}
                    className="glass-dark rounded-full border border-accent/30 px-4 py-2 text-xs font-semibold text-primary-foreground"
                  >
                    {spec}
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <QuoteTrigger
                  variant="ice"
                  size="lg"
                  className="gap-2.5 w-full sm:w-auto"
                  prefill={{ service: quotePrefillService }}
                >
                  Hemen Fiyat & Teklif Al
                  <ArrowRight className="size-4.5 transition-transform group-hover:translate-x-1" />
                </QuoteTrigger>
              </div>
            </div>

            <div className="hidden lg:block relative rounded-3xl border border-primary-foreground/10 bg-white/5 p-8 shadow-frost backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-6">Neden Bizi Seçmelisiniz?</h3>
              <ul className="space-y-4">
                {service.features.slice(0, 3).map((f, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 className="size-5 text-accent shrink-0" />
                    <div>
                      <p className="font-semibold text-white text-sm">{f.title}</p>
                      <p className="text-xs text-primary-foreground/70 mt-1">{f.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-pad">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
            <div>
              <Reveal>
                <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
                  {service.intro.map((p, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>

              <Reveal className="mt-16">
                <h2 className="text-3xl font-bold tracking-tight mb-8">Öne Çıkan Özellikler</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                      <h3 className="text-lg font-bold">{feature.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </Reveal>

              {service.faqs && service.faqs.length > 0 && (
                <Reveal className="mt-16">
                  <h2 className="text-3xl font-bold tracking-tight mb-8">Sıkça Sorulan Sorular</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {service.faqs.map((faq, i) => (
                      <AccordionItem key={i} value={`item-${i}`}>
                        <AccordionTrigger className="text-left font-semibold text-base">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </Reveal>
              )}
            </div>

            <div className="space-y-8">
              <Reveal>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                  <div className="flex items-center gap-2 mb-4">
                    <Info className="size-5 text-accent" />
                    <h3 className="font-bold">Kullanım Alanları</h3>
                  </div>
                  <ul className="space-y-3">
                    {service.useCases.map((useCase, i) => (
                      <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="text-accent mt-0.5">•</span>
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal>
                <div className="rounded-2xl border border-border bg-secondary p-6">
                  <h3 className="font-bold mb-4">Desteklenen Rejimler</h3>
                  <div className="flex flex-col gap-2">
                    {service.regimes.map((regime, i) => (
                      <span
                        key={i}
                        className="inline-flex rounded-full border border-accent/25 bg-background px-3 py-1.5 text-xs font-semibold"
                      >
                        {regime}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
