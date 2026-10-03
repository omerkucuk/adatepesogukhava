import { MessageCircle } from "lucide-react";

import { siteConfig } from "@/lib/site-config";

export function WhatsappFab() {
  return (
    <a
      href={siteConfig.contact.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp ile yazın"
      className="bg-gradient-ice fixed right-5 bottom-5 z-50 inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-primary-foreground shadow-frost transition-transform hover:scale-105"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
