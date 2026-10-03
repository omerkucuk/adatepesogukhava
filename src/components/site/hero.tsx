import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { QuoteTrigger } from "@/components/interactive/quote-trigger";
import { HeroSlider } from "@/components/interactive/hero-slider";

const STATS = [
  { value: "-20°C / +20°C", label: "Hassas Sıcaklık Kontrolü" },
  { value: "7/24", label: "IoT & GPS Telemetri Takibi" },
  { value: "Hızlı Kurulum", label: "Sahada Esnek Kiralama" },
];

export function Hero() {
  return (
    <section id="top" className="bg-navy px-3 pt-24 pb-4 sm:px-6 sm:pt-28 lg:px-8 lg:pt-32 lg:pb-6">
      {/* 21:9 Ultrawide Cinema Container on Large Screens, Graceful Adaptive Height on Mobile */}
      <div className="relative mx-auto w-full max-w-[1720px] overflow-hidden rounded-3xl lg:rounded-[2.5rem] border border-white/10 shadow-2xl bg-navy-deep min-h-[580px] sm:min-h-[620px] lg:min-h-0 lg:aspect-[21/9]">
        <HeroSlider>
          <div className="flex h-full min-h-[inherit] flex-col justify-between p-6 sm:p-10 lg:p-12 xl:p-14">
            {/* Top row */}
            <div className="flex items-center justify-between">
              <span className="glass-dark inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 px-4 py-2 text-[10px] sm:text-xs font-extrabold tracking-[0.16em] text-accent uppercase backdrop-blur-xl">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-accent" />
                </span>
                Kesintisiz Soğuk Zincir &amp; Mobil Soğutma
              </span>
            </div>

            {/* Middle row: Hero Headline & Actions */}
            <div className="my-auto max-w-2xl py-6 lg:py-0">
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.08]">
                Soğuk Zincirin{" "}
                <span className="text-gradient-ice block sm:inline">Olduğu Her Yerde</span>
              </h1>

              <p className="mt-4 max-w-xl text-sm sm:text-base lg:text-lg text-primary-foreground/85 leading-relaxed font-normal">
                Gıdalarınızın tazeliğini ve ürünlerinizin değerini koruyoruz. Çanakkale, Balıkesir ve
                tüm Marmara/Ege hattında mobil soğuk hava depoları, frigorifik araç filosu ve reefer
                konteyner kiralama.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
                <QuoteTrigger variant="ice" size="lg" className="gap-2.5 shadow-glow">
                  Hemen Fiyat &amp; Teklif Al
                  <ArrowRight className="size-4.5 transition-transform group-hover:translate-x-1" />
                </QuoteTrigger>
                <Button variant="glassDark" size="lg" asChild className="hover:border-accent/40">
                  <a href="#filo">Filomuzu İnceleyin</a>
                </Button>
              </div>
            </div>

            {/* Bottom row: Key Operational Stats (Desktop Horizontal Bar) */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-8 pt-4 border-t border-white/10 max-w-xl lg:max-w-2xl xl:max-w-3xl">
              {STATS.map(({ value, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="text-xl sm:text-2xl font-light text-accent lg:text-3xl tracking-tight">
                    {value}
                  </span>
                  <span className="text-[10px] sm:text-[11px] leading-tight font-semibold tracking-wider text-primary-foreground/75 uppercase max-w-[130px]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </HeroSlider>
      </div>
    </section>
  );
}
