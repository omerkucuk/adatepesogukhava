"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Yukarı kayma mesafesi (px) */
  y?: number;
};

/**
 * Ekrana girdiğinde içeriği yumuşakça gösterir. İçerik (children) sunucuda
 * render edilir; bu bileşen yalnızca sarmalayıcı animasyonu ekler.
 * Ekranın üst kısmındaki (LCP) öğelerde kullanmayın.
 */
export function Reveal({ children, className, delay = 0, y = 24 }: RevealProps) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  );
}
