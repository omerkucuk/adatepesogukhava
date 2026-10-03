"use client";

import type { ReactNode } from "react";

import { Button, type ButtonProps } from "@/components/ui/button";
import type { QuotePrefill } from "@/lib/validations/quote";
import { useQuote } from "./quote-provider";

type QuoteTriggerProps = Omit<ButtonProps, "onClick" | "asChild"> & {
  prefill?: QuotePrefill;
  children: ReactNode;
};

/**
 * Server Component'ler içine gömülebilen minimal istemci adası:
 * yalnızca teklif modalını (opsiyonel ön seçimle) açar.
 */
export function QuoteTrigger({ prefill, children, variant = "ice", ...props }: QuoteTriggerProps) {
  const { openQuote } = useQuote();
  return (
    <Button
      type="button"
      variant={variant}
      aria-haspopup="dialog"
      onClick={() => openQuote(prefill)}
      {...props}
    >
      {children}
    </Button>
  );
}
