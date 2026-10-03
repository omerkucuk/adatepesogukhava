"use client";

import { AnimatePresence, m } from "framer-motion";
import { Snowflake } from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
  QUOTE_REGIMES,
  QUOTE_REGIONS,
  QUOTE_SERVICES,
  type QuoteDuration,
  type QuoteRegime,
  type QuoteRegion,
  type QuoteService,
} from "@/content/quote-options";
import { useQuote } from "./quote-provider";

function durationFromDays(days: number): QuoteDuration {
  if (days < 7) return "Günlük";
  if (days < 30) return "Haftalık";
  if (days < 365) return "Aylık";
  return "Yıllık";
}

type QuickQuoteCalculatorProps = {
  /** Sunucuda render edilen başlık/açıklama bloğu (SEO metni istemci paketine girmez). */
  intro: ReactNode;
};

export function QuickQuoteCalculator({ intro }: QuickQuoteCalculatorProps) {
  const { openQuote } = useQuote();
  const [service, setService] = useState<QuoteService>(QUOTE_SERVICES[0]);
  const [regime, setRegime] = useState<QuoteRegime>(QUOTE_REGIMES[0]);
  const [region, setRegion] = useState<QuoteRegion>(QUOTE_REGIONS[0]);
  const [volume, setVolume] = useState(28);
  const [days, setDays] = useState(14);

  const estimate = useMemo(() => {
    const unitCount = Math.max(1, Math.ceil(volume / 32));
    const pallets = Math.round(volume / 1.8);
    const freezing = regime.startsWith("Dondurulmuş");
    const isTransport = service.includes("Taşıma");
    return {
      unitCount,
      pallets,
      setup: isTransport ? "4-8 saat" : freezing ? "24 saat" : "12 saat",
      power: freezing ? "14-18 kW" : "8-11 kW",
    };
  }, [volume, regime, service]);

  const stats = [
    { label: "Tahmini ünite", value: `${estimate.unitCount} adet` },
    { label: "Palet kapasitesi", value: `~${estimate.pallets} palet` },
    { label: "Sahada kurulum", value: estimate.setup },
    { label: "Enerji ihtiyacı", value: estimate.power },
  ];

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
      <div>
        {intro}
        <dl className="mt-8 grid grid-cols-2 gap-3" aria-live="polite">
          {stats.map((item) => (
            <div key={item.label} className="rounded-2xl border border-border bg-card p-4 shadow-card">
              <dt className="text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
                {item.label}
              </dt>
              <dd className="relative mt-1 h-7 overflow-hidden text-xl font-bold">
                <AnimatePresence mode="popLayout" initial={false}>
                  <m.span
                    key={item.value}
                    className="block"
                    initial={{ y: 16, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -16, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {item.value}
                  </m.span>
                </AnimatePresence>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="rounded-3xl border border-border bg-card p-6 shadow-frost sm:p-8">
        <div className="grid gap-5">
          <CalcSelect
            id="calc-service"
            label="Hizmet tipi"
            value={service}
            options={QUOTE_SERVICES}
            onChange={(v) => setService(v as QuoteService)}
          />
          <CalcSelect
            id="calc-regime"
            label="Sıcaklık rejimi"
            value={regime}
            options={QUOTE_REGIMES}
            onChange={(v) => setRegime(v as QuoteRegime)}
          />
          <CalcSelect
            id="calc-region"
            label="Bölge"
            value={region}
            options={QUOTE_REGIONS}
            onChange={(v) => setRegion(v as QuoteRegion)}
          />

          <div className="grid gap-3">
            <div className="flex items-center justify-between">
              <Label id="calc-volume-label">Gereken hacim</Label>
              <span className="text-sm font-bold text-accent">{volume} m³</span>
            </div>
            <Slider
              aria-labelledby="calc-volume-label"
              thumbLabel="Gereken hacim (m³)"
              value={[volume]}
              onValueChange={([v]) => setVolume(v ?? 28)}
              min={8}
              max={160}
              step={4}
            />
          </div>

          <div className="grid gap-3">
            <div className="flex items-center justify-between">
              <Label id="calc-days-label">Kiralama süresi</Label>
              <span className="text-sm font-bold text-accent">{days} gün</span>
            </div>
            <Slider
              aria-labelledby="calc-days-label"
              thumbLabel="Kiralama süresi (gün)"
              value={[days]}
              onValueChange={([v]) => setDays(v ?? 14)}
              min={1}
              max={365}
              step={1}
            />
          </div>

          <Button
            id="calc-submit"
            type="button"
            variant="ice"
            size="lg"
            className="mt-1 w-full"
            onClick={() =>
              openQuote({
                service,
                regime,
                location: region,
                duration: durationFromDays(days),
                notes: `Ön hesap: ${volume} m³, ${days} gün, ~${estimate.unitCount} ünite / ~${estimate.pallets} palet.`,
              })
            }
          >
            <Snowflake /> Teklif Oluştur
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            Ön hesap bilgilendirme amaçlıdır; kesin teklif saha bilgilerine göre verilir.
          </p>
        </div>
      </div>
    </div>
  );
}

function CalcSelect({
  id,
  label,
  value,
  options,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger id={id} className="h-10">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
