"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

import type { QuotePrefill } from "@/lib/validations/quote";

type QuoteContextValue = {
  open: boolean;
  prefill: QuotePrefill;
  openQuote: (prefill?: QuotePrefill) => void;
  setOpen: (open: boolean) => void;
};

const QuoteContext = createContext<QuoteContextValue | null>(null);

/**
 * Teklif modalının global durumu. Kök layout'ta sarmalanır; Server Component
 * olarak kalan bölümler modalı yalnızca <QuoteTrigger> adası üzerinden açar.
 */
export function QuoteProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [prefill, setPrefill] = useState<QuotePrefill>({});

  const openQuote = useCallback((next?: QuotePrefill) => {
    setPrefill(next ?? {});
    setOpen(true);
  }, []);

  const value = useMemo<QuoteContextValue>(
    () => ({ open, prefill, setOpen, openQuote }),
    [open, prefill, openQuote],
  );

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>;
}

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error("useQuote, QuoteProvider içinde kullanılmalıdır.");
  return ctx;
}
