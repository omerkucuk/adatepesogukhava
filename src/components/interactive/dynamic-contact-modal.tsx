"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useQuote } from "./quote-provider";
import { QuoteForm } from "./quote-form";

/**
 * Global teklif modalı. Radix Dialog içeriği kapalıyken DOM'dan kaldırdığı için
 * form her açılışta güncel ön seçim (prefill) ile yeniden başlatılır.
 */
export function DynamicContactModal() {
  const { open, setOpen, prefill } = useQuote();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-h-[92vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-extrabold">Hızlı Teklif Al</DialogTitle>
          <DialogDescription>
            Bilgilerinizi bırakın, 1 iş saati içinde fiyat ve uygunluk bilgisiyle dönüş yapalım.
          </DialogDescription>
        </DialogHeader>
        <QuoteForm prefill={prefill} onSubmitted={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
