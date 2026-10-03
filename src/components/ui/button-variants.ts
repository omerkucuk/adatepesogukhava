import { cva, type VariantProps } from "class-variance-authority";

/**
 * Buton varyantları ayrı (direktifsiz) modülde tutulur; böylece Server Component'ler
 * `buttonVariants()` ile <Link> öğelerini doğrudan buton gibi stillendirebilir.
 */
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        ice: "bg-gradient-ice text-primary-foreground font-semibold shadow-frost hover:brightness-110 hover:shadow-glow",
        glass:
          "glass text-foreground font-semibold hover:border-accent hover:bg-secondary/60 shadow-card",
        glassDark:
          "glass-dark text-primary-foreground font-semibold hover:border-accent hover:brightness-125",
        navy: "bg-primary text-primary-foreground font-semibold shadow-card hover:bg-navy-deep",
        whatsapp:
          "bg-whatsapp text-white font-semibold shadow-card hover:brightness-110",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-11 rounded-lg px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
