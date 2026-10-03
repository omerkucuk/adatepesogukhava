"use client";

import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Framer Motion'ı yalnızca `domAnimation` özellik setiyle (~15kb) yükler ve
 * kullanıcının "hareketi azalt" tercihine saygı duyar. `strict` modu, tam
 * `motion` bileşeninin yanlışlıkla import edilip paketi şişirmesini engeller.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
