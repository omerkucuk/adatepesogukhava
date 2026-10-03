"use client";

import { useMemo, useState } from "react";
import { Calculator, Snowflake } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { QUOTE_REGIMES as REGIMES, QUOTE_REGIONS as REGIONS, QUOTE_SERVICES as SERVICES } from "@/content/quote-options";
import { useQuote } from "@/components/interactive/quote-provider";

export function QuoteCalculator() {
  const { openQuote } = useQuote();
  const [service, setService] = useState<string>(SERVICES[0]!);
  const [regime, setRegime] = useState<string>(REGIMES[0]!);
  const [region, setRegion] = useState<string>(REGIONS[0]!);
  const [volume, setVolume] = useState([28]);
  const [days, setDays] = useState([14]);

  const estimate = useMemo(() => {
    const m3 = volume[0]!;
    const unitCount = Math.max(1, Math.ceil(m3 / 32));
    const palette = Math.round(m3 / 1.8);
    const freezing = regime.startsWith("Dondurulmuş");
    return {
      unitCount,
      palette,
      setup: service.includes("Taşıma") ? "4-8 saat" : freezing ? "24 saat" : "12 saat",
      power: freezing ? "14-18 kW" : "8-11 kW",
      days: days[0]!,
    };
  }, [volume, days, regime, service]);

  return (
    <section id="hesaplayici" className="section-pad bg-frost">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-background px-4 py-1.5 text-xs font-semibold text-foreground">
              <Calculator className="size-3.5 text-accent" /> Sıcaklık & Kapasite Hesaplayıcı
            </span>
            <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
              İhtiyacınızı 30 saniyede netleştirin
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Hizmet tipi, sıcaklık rejimi ve hacminizi seçin; gereken ünite sayısı, kurulum süresi
              ve enerji ihtiyacı için ön hesap oluşturalım. Kesin fiyat için teklif formunu
              gönderin.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { k: "Tahmini ünite", v: `${estimate.unitCount} adet` },
                { k: "Palet kapasitesi", v: `~${estimate.palette} palet` },
                { k: "Sahada kurulum", v: estimate.setup },
                { k: "Enerji ihtiyacı", v: estimate.power },
              ].map((item) => (
                <div key={item.k} className="rounded-2xl border border-border bg-card p-4 shadow-card">
                  <p className="text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
                    {item.k}
                  </p>
                  <p className="mt-1 text-xl font-bold">{item.v}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-frost sm:p-8">
            <div className="grid gap-5">
              <div className="grid gap-2">
                <Label>Hizmet tipi</Label>
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {SERVICES.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label>Sıcaklık rejimi</Label>
                <Select value={regime} onValueChange={setRegime}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {REGIMES.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label>Bölge</Label>
                <Select value={region} onValueChange={setRegion}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {REGIONS.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-3">
                <div className="flex items-center justify-between">
                  <Label>Gereken hacim</Label>
                  <span className="text-sm font-bold text-accent">{volume[0]} m³</span>
                </div>
                <Slider value={volume} onValueChange={setVolume} min={8} max={160} step={4} />
              </div>

              <div className="grid gap-3">
                <div className="flex items-center justify-between">
                  <Label>Kiralama süresi</Label>
                  <span className="text-sm font-bold text-accent">{days[0]} gün</span>
                </div>
                <Slider value={days} onValueChange={setDays} min={1} max={365} step={1} />
              </div>

              <Button
                variant="ice"
                size="lg"
                className="mt-1 w-full"
                onClick={() => openQuote({ service: service as any, regime: regime as any, location: region as any })}
              >
                <Snowflake /> Teklif Oluştur
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Ön hesap bilgilendirme amaçlıdır; kesin teklif saha bilgilerine göre verilir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
