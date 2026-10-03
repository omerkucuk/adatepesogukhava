import { Container, PackageCheck, Snowflake, Truck, Zap } from "lucide-react";

import coldRoom from "@/assets/cold-room.jpg";
import { QuoteTrigger } from "@/components/interactive/quote-trigger";

const SERVICE_CARDS = [
  {
    icon: Snowflake,
    title: "Mobil Soğuk Hava Depoları (Plug & Play)",
    body: "Sabit tesis yatırımı yapmadan tesisinizde veya arazinizde anında operasyon.",
    specs: ["Monoblok soğutma ünitesi", "Hijyenik iç zemin", "-20°C / +20°C ayarlanabilir"],
    wide: true,
  },
  {
    icon: Truck,
    title: "Frigorifik Ticari Taşıma Filosu",
    body: "Şehir içi ve şehirlerarası frigolu panelvan ve kamyonet taşımacılığı.",
    specs: ["Çift rejimli bölme", "Donuk + taze aynı sefer", "Şehirlerarası hat"],
  },
  {
    icon: Container,
    title: "Reefer Konteyner Çözümleri (20ft & 40ft)",
    body: "Liman, hasat dönemi ve fabrika sahaları için deniz tipi ve statik reefer kiralama.",
    specs: ["20ft & 40ft", "Yüksek kapasite", "Liman & saha teslim"],
  },
  {
    icon: Zap,
    title: "Acil Durum & Sezonluk Kiralama",
    body: "Bozulabilir ürünler, hasat dalgalanmaları veya soğuk oda arızalarında hızlı destek.",
    specs: ["Aynı gün müdahale", "Günlük / aylık", "Yedek ünite garantisi"],
  },
];

export function Services() {
  return (
    <section id="cozumler" className="section-pad">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase">
            Çözümlerimiz
          </span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Soğuk zincirin her halkası için tek tedarikçi
          </h2>
          <p className="mt-4 text-muted-foreground">
            Depolamadan son kilometre teslimine kadar sıcaklık kontrollü operasyonunuzu kesintisiz
            yönetiyoruz. Mobil depolama, frigorifik taşıma ve sahada anlık kapasite ihtiyaçları için
            esnek çözümler sunuyoruz.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CARDS.map(({ icon: Icon, title, body, specs, wide }) => (
            <article
              key={title}
              className={`group rounded-3xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-frost ${
                wide ? "lg:col-span-2" : ""
              }`}
            >
              <span className="bg-gradient-ice inline-flex size-11 items-center justify-center rounded-xl text-primary-foreground">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {specs.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-accent/25 bg-secondary px-3 py-1 text-[11px] font-semibold text-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          ))}

          <article
            id="filo"
            className="relative overflow-hidden rounded-3xl border border-border shadow-card"
          >
            <img
              src={coldRoom.src}
              alt="Mobil soğuk hava deposu iç görünümü"
              loading="lazy"
              width={1200}
              height={912}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="relative bg-gradient-navy/0 flex h-full min-h-64 flex-col justify-end p-6">
              <div className="glass-dark rounded-2xl p-4">
                <p className="flex items-center gap-2 text-sm font-bold text-primary-foreground">
                  <PackageCheck className="size-4 text-accent" /> Filo & Ekipmanlar
                </p>
                <p className="mt-1.5 text-xs text-primary-foreground/75">
                  12 frigorifik araç, 18 mobil depo ünitesi ve 9 reefer konteyner ile Marmara–Ege
                  hattında hazır kapasite.
                </p>
                <QuoteTrigger variant="ice" size="sm" className="mt-4">
                  Uygunluk Sorgula
                </QuoteTrigger>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
