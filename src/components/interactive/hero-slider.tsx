"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles } from "lucide-react";

export interface HeroSlide {
  src: string;
  alt: string;
  title: string;
  badge: string;
  temp: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    src: "/images/Adatepe_Soguk_Zincir1.jpg",
    alt: "Adatepe Soğuk Zincir - Gece Liman Operasyonu, Reefer Konteyner ve Frigorifik Dağıtım",
    title: "Gece Liman & Su Ürünleri Operasyonu",
    badge: "01 / 02 • Gece Operasyonu",
    temp: "-18°C Derin Dondurucu",
  },
  {
    src: "/images/Adatepe_Soguk_Zincir2.jpg",
    alt: "Adatepe Soğuk Zincir - Gündüz Saha ve Meyve-Sebze Soğuk Hava Depolama",
    title: "Gündüz Sevkiyat & Tarımsal Depolama",
    badge: "02 / 02 • Gündüz Operasyonu",
    temp: "+4°C Taze Muhafaza",
  },
];

const SLIDE_DURATION = 6500;

interface HeroSliderProps {
  children?: React.ReactNode;
}

export function HeroSlider({ children }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    setProgress(0);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  useEffect(() => {
    if (!isPlaying) {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
      return;
    }

    const stepMs = 50;
    const progressStep = (stepMs / SLIDE_DURATION) * 100;

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + progressStep;
      });
    }, stepMs);

    timerRef.current = setTimeout(() => {
      nextSlide();
    }, SLIDE_DURATION);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentIndex, isPlaying, nextSlide]);

  const activeSlide = HERO_SLIDES[currentIndex] ?? HERO_SLIDES[0];

  return (
    <div className="relative size-full overflow-hidden">
      {/* 21:9 Panoramic Background Slides */}
      <div className="absolute inset-0 size-full overflow-hidden">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.src}
              aria-hidden={!isActive}
              className={`absolute inset-0 size-full transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-0" : "opacity-0 pointer-events-none -z-10"
              }`}
            >
              <div
                className={`relative size-full transition-transform duration-[7000ms] ease-out ${
                  isActive ? "scale-105" : "scale-100"
                }`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1720px) 100vw, 1720px"
                  quality={92}
                  className="object-cover object-center"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Cinematic Legibility Scrims tailored for 21:9 Widescreen */}
      {/* Left side scrim keeps text readable without dimming the reefer truck on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/75 via-40% to-transparent pointer-events-none z-1" />
      {/* Bottom vignette */}
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-navy-deep/95 via-navy-deep/40 to-transparent pointer-events-none z-1" />
      {/* Top vignette */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-navy-deep/70 to-transparent pointer-events-none z-1" />

      {/* Top Right Live Operation Badge */}
      {activeSlide && (
        <div className="absolute top-5 right-5 sm:top-7 sm:right-7 z-20 hidden lg:flex items-center gap-2.5 rounded-full border border-white/15 bg-navy/70 px-4 py-1.5 shadow-frost backdrop-blur-xl">
          <span className="flex size-2 rounded-full bg-accent animate-ping" />
          <span className="text-[11px] font-bold tracking-wider text-accent uppercase">
            {activeSlide.badge}
          </span>
          <span className="h-3 w-px bg-white/20" />
          <span className="text-[11px] font-medium text-white/80">
            {activeSlide.title}
          </span>
        </div>
      )}

      {/* Foreground Content passed from Server Component */}
      <div className="relative z-10 size-full">{children}</div>

      {/* Bottom Right Floating Slider Controls */}
      <div className="absolute bottom-5 right-5 sm:bottom-7 sm:right-7 z-20 flex items-center gap-3">
        <div className="glass-dark flex items-center gap-3 rounded-full border border-white/15 px-3.5 py-2 shadow-frost backdrop-blur-xl">
          {/* Progress Indicators */}
          <div className="flex items-center gap-1.5 px-1">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => goToSlide(idx)}
                aria-label={`Görsel ${idx + 1} (${slide.title}) seç`}
                className="group relative h-2 rounded-full overflow-hidden transition-all duration-300 focus:outline-none"
                style={{ width: idx === currentIndex ? "36px" : "14px" }}
              >
                <div
                  className={`size-full transition-colors ${
                    idx === currentIndex
                      ? "bg-white/20"
                      : "bg-white/40 group-hover:bg-white/70"
                  }`}
                />
                {idx === currentIndex && (
                  <div
                    className="absolute inset-y-0 left-0 bg-accent rounded-full transition-all duration-75"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="h-4 w-px bg-white/20" />

          {/* Prev */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Önceki görsel"
            className="flex size-7 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white"
          >
            <ChevronLeft className="size-4" />
          </button>

          {/* Pause / Play */}
          <button
            type="button"
            onClick={() => setIsPlaying((p) => !p)}
            aria-label={isPlaying ? "Slider duraklat" : "Slider oynat"}
            className="flex size-7 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white"
          >
            {isPlaying ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Sonraki görsel"
            className="flex size-7 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
