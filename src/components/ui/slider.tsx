"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

type SliderProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
  /** Erişilebilirlik için tutamacın ekran okuyucu etiketi */
  thumbLabel?: string;
};

const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  ({ className, thumbLabel, ...props }, ref) => (
    <SliderPrimitive.Root
      ref={ref}
      className={cn("relative flex w-full touch-none items-center select-none", className)}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
        <SliderPrimitive.Range className="bg-gradient-ice absolute h-full" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        aria-label={thumbLabel}
        className="block size-5 cursor-grab rounded-full border-2 border-accent bg-background shadow-frost transition-transform hover:scale-110 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none active:cursor-grabbing disabled:pointer-events-none disabled:opacity-50"
      />
    </SliderPrimitive.Root>
  ),
);
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
