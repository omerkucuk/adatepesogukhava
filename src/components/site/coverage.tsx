import { MapPin, Ship, Sprout } from "lucide-react";

const HUBS = [
  {
    city: "Çanakkale",
    icon: Ship,
    areas: ["Merkez", "Biga", "Lapseki", "Gelibolu", "Ezine", "Ayvacık", "Bozcaada", "Gökçeada"],
  },
  {
    city: "Balıkesir",
    icon: Sprout,
    areas: ["Edremit Körfezi", "Bandırma", "Gönen", "Merkez"],
  },
];

export function Coverage() {
  return (
    <section id="bolgeler" className="section-pad bg-gradient-navy">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase">
              Hizmet Ağımız
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-primary-foreground sm:text-4xl">
              Marmara ve Ege hattında sahaya en yakın soğuk zincir
            </h2>
            <p className="mt-4 max-w-lg text-primary-foreground/70">
              Hasat, avlanma ve üretim bölgelerinin merkezinde konumlanıyor; ürününüzü ilk saatte
              soğuk zincire alıyoruz.
            </p>
            <span className="glass-dark mt-7 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-primary-foreground">
              <MapPin className="size-3.5 text-accent" /> Tarım, su ürünleri ve süt sanayisinin
              kalbindeyiz.
            </span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {HUBS.map(({ city, icon: Icon, areas }) => (
              <div key={city} className="glass-dark rounded-3xl p-6">
                <div className="flex items-center gap-2.5">
                  <span className="bg-gradient-ice inline-flex size-9 items-center justify-center rounded-lg text-primary-foreground">
                    <Icon className="size-4" />
                  </span>
                  <h3 className="text-base font-bold text-primary-foreground">{city}</h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {areas.map((a) => (
                    <li
                      key={a}
                      className="rounded-full border border-accent/25 px-3 py-1 text-[11px] font-medium text-primary-foreground/85"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
