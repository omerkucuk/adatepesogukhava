"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, MessageCircle, RotateCcw, Send } from "lucide-react";
import { useId, useState } from "react";
import { Controller, useForm, type Path } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  QUOTE_DURATIONS,
  QUOTE_REGIMES,
  QUOTE_REGIONS,
  QUOTE_SERVICES,
} from "@/content/quote-options";
import { cn } from "@/lib/utils";
import {
  quoteSchema,
  type ContactApiResponse,
  type QuoteFormInput,
  type QuoteFormValues,
  type QuotePrefill,
} from "@/lib/validations/quote";

type QuoteFormProps = {
  prefill?: QuotePrefill;
  onSubmitted?: () => void;
  className?: string;
};

function buildDefaults(prefill?: QuotePrefill): QuoteFormInput {
  return {
    fullName: "",
    company: "",
    phone: "",
    service: prefill?.service ?? QUOTE_SERVICES[0],
    regime: prefill?.regime ?? QUOTE_REGIMES[0],
    location: prefill?.location ?? QUOTE_REGIONS[0],
    duration: prefill?.duration ?? "Aylık",
    notes: prefill?.notes ?? "",
    kvkk: false,
    website: "",
  };
}

/** Pop-up engelleyicilere karşı: yeni sekme açılamazsa false döner. */
function openInNewTab(url: string) {
  const win = window.open(url, "_blank");
  if (!win) return false;
  win.opener = null;
  return true;
}

export function QuoteForm({ prefill, onSubmitted, className }: QuoteFormProps) {
  const uid = useId();
  const fieldId = (name: string) => `${uid}-${name}`;
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);

  const {
    register,
    control,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormInput, unknown, QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: buildDefaults(prefill),
    mode: "onTouched",
  });

  const onSubmit = async (values: QuoteFormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json()) as ContactApiResponse;

      if (!data.ok) {
        if (data.fieldErrors) {
          for (const [field, messages] of Object.entries(data.fieldErrors)) {
            if (messages?.[0]) {
              setError(field as Path<QuoteFormInput>, { type: "server", message: messages[0] });
            }
          }
        }
        toast.error("Talep gönderilemedi", { description: data.message });
        return;
      }

      const opened = openInNewTab(data.whatsappUrl);
      setWhatsappUrl(data.whatsappUrl);
      reset(buildDefaults());

      toast.success("Teklif talebiniz hazır!", {
        description: opened
          ? "WhatsApp açıldı — mesajı göndermeniz yeterli. Ekibimiz 1 iş saati içinde dönüş yapar."
          : "WhatsApp'ı açmak için aşağıdaki butona dokunun.",
        action: opened
          ? undefined
          : { label: "WhatsApp'ı Aç", onClick: () => openInNewTab(data.whatsappUrl) },
      });
    } catch {
      toast.error("Bağlantı hatası", {
        description: "İnternet bağlantınızı kontrol edip tekrar deneyin ya da bizi telefonla arayın.",
      });
    }
  };

  if (whatsappUrl) {
    return (
      <div
        role="status"
        className={cn("flex flex-col items-center gap-4 py-8 text-center", className)}
      >
        <span className="bg-gradient-ice inline-flex size-14 items-center justify-center rounded-2xl text-primary-foreground shadow-frost">
          <CheckCircle2 className="size-7" />
        </span>
        <h3 className="text-xl font-extrabold">Talebiniz hazırlandı</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Bilgileriniz WhatsApp mesajı olarak hazırlandı. Mesajı gönderdiğinizde operasyon ekibimiz
          1 iş saati içinde fiyat ve uygunluk bilgisiyle dönüş yapar.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild variant="whatsapp" size="lg">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle /> WhatsApp&apos;ta Gönder
            </a>
          </Button>
          <Button
            type="button"
            variant="glass"
            size="lg"
            onClick={() => {
              setWhatsappUrl(null);
              onSubmitted?.();
            }}
          >
            <RotateCcw /> {onSubmitted ? "Kapat" : "Yeni Talep"}
          </Button>
        </div>
      </div>
    );
  }

  const errorText = (name: keyof QuoteFormInput) => {
    const message = errors[name]?.message;
    return message ? (
      <p id={fieldId(`${name}-error`)} role="alert" className="text-xs font-medium text-destructive">
        {message}
      </p>
    ) : null;
  };

  const a11y = (name: keyof QuoteFormInput) => ({
    id: fieldId(name),
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? fieldId(`${name}-error`) : undefined,
  });

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className={cn("grid gap-4", className)}
      aria-label="Hızlı teklif formu"
    >
      {/* Honeypot: botlar doldurur, kullanıcılar görmez */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={fieldId("website")}>Web siteniz</label>
        <input id={fieldId("website")} tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor={fieldId("fullName")}>
            Ad Soyad <span className="text-destructive">*</span>
          </Label>
          <Input
            {...a11y("fullName")}
            autoComplete="name"
            placeholder="Ad Soyad"
            {...register("fullName")}
          />
          {errorText("fullName")}
        </div>
        <div className="grid gap-2">
          <Label htmlFor={fieldId("company")}>Firma</Label>
          <Input
            {...a11y("company")}
            autoComplete="organization"
            placeholder="Örn. Ege Su Ürünleri A.Ş."
            {...register("company")}
          />
          {errorText("company")}
        </div>
        <div className="grid gap-2 sm:col-span-2">
          <Label htmlFor={fieldId("phone")}>
            Telefon <span className="text-destructive">*</span>
          </Label>
          <Input
            {...a11y("phone")}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="0 5__ ___ __ __"
            {...register("phone")}
          />
          {errorText("phone")}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField
          control={control}
          name="service"
          label="Hizmet Türü"
          options={QUOTE_SERVICES}
          id={fieldId("service")}
          error={errors.service?.message}
        />
        <SelectField
          control={control}
          name="regime"
          label="Sıcaklık Rejimi"
          options={QUOTE_REGIMES}
          id={fieldId("regime")}
          error={errors.regime?.message}
        />
        <SelectField
          control={control}
          name="location"
          label="Lokasyon"
          options={QUOTE_REGIONS}
          id={fieldId("location")}
          error={errors.location?.message}
        />
        <SelectField
          control={control}
          name="duration"
          label="Kiralama Süresi"
          options={QUOTE_DURATIONS}
          id={fieldId("duration")}
          error={errors.duration?.message}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor={fieldId("notes")}>Notlar / Adres</Label>
        <Textarea
          {...a11y("notes")}
          rows={3}
          placeholder="Ürün tipi, hacim, kurulum adresi ve başlangıç tarihi"
          {...register("notes")}
        />
        {errorText("notes")}
      </div>

      <div className="grid gap-1.5">
        <Controller
          control={control}
          name="kvkk"
          render={({ field }) => (
            <div className="flex items-start gap-3">
              <Checkbox
                id={fieldId("kvkk")}
                checked={field.value}
                onCheckedChange={(checked) => field.onChange(checked === true)}
                onBlur={field.onBlur}
                ref={field.ref}
                aria-invalid={errors.kvkk ? true : undefined}
                aria-describedby={errors.kvkk ? fieldId("kvkk-error") : undefined}
                className="mt-0.5 border-accent data-[state=checked]:border-transparent data-[state=checked]:bg-accent"
              />
              <Label
                htmlFor={fieldId("kvkk")}
                className="text-xs leading-relaxed font-normal text-muted-foreground"
              >
                Kişisel verilerimin teklif hazırlanması amacıyla işlenmesine ilişkin KVKK aydınlatma
                metnini okudum ve onaylıyorum.
              </Label>
            </div>
          )}
        />
        {errorText("kvkk")}
      </div>

      <Button type="submit" variant="ice" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" /> Talebiniz hazırlanıyor…
          </>
        ) : (
          <>
            <Send /> WhatsApp ile Teklif İste
          </>
        )}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        Gönder&apos;e bastığınızda talebiniz WhatsApp hattımıza hazır mesaj olarak iletilir.
      </p>
    </form>
  );
}

type SelectFieldProps<TName extends "service" | "regime" | "location" | "duration"> = {
  control: ReturnType<typeof useForm<QuoteFormInput, unknown, QuoteFormValues>>["control"];
  name: TName;
  label: string;
  options: readonly string[];
  id: string;
  error?: string;
};

function SelectField<TName extends "service" | "regime" | "location" | "duration">({
  control,
  name,
  label,
  options,
  id,
  error,
}: SelectFieldProps<TName>) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger
              id={id}
              ref={field.ref}
              onBlur={field.onBlur}
              aria-invalid={error ? true : undefined}
              className="h-10"
            >
              <SelectValue placeholder="Seçiniz" />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
      {error ? (
        <p role="alert" className="text-xs font-medium text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
