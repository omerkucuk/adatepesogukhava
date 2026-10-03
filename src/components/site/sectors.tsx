import { Beef, Fish, Apple, Milk, Pill, UtensilsCrossed } from "lucide-react";

const SECTORS = [
  { icon: Fish, title: "Su Ürünleri & Balıkçılık", desc: "Tekne çıkışından işletmeye kesintisiz." },
  { icon: Apple, title: "Yaş Sebze, Meyve & Hasat", desc: "Hasat döneminde esnek ek kapasite." },
  { icon: Milk, title: "Süt, Peynir & Şarküteri", desc: "+2°C / +4°C hassas taze rejim." },
  { icon: Beef, title: "Et & Tavuk Entegre Tesisleri", desc: "Donuk ve taze çift bölmeli taşıma." },
  { icon: Pill, title: "İlaç, Medikal & Kimya", desc: "Doğrulanabilir sıcaklık kayıtları." },
  { icon: UtensilsCrossed, title: "Otel, Restoran & Catering", desc: "Etkinlik ve sezonluk depolama." },
];

export function Sectors() {
  return (
    <section id="sektorler" className="section-pad">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase">
            Sektörler
          </span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Hizmet verdiğimiz alanlar</h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SECTORS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:border-accent/50 hover:shadow-frost"
            >
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-muted-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <Icon className="size-5" />
              </span>
              <div>
                <h3 className="text-sm font-bold">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
