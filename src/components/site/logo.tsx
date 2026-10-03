import Link from "next/link";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
    >
      <span className="bg-gradient-ice flex size-10 items-center justify-center rounded-xl frost-glow">
        <svg viewBox="0 0 32 32" className="size-6" fill="none" aria-hidden="true">
          <path
            d="M3 22 11 9l5 8 3-4 10 9H3Z"
            fill="currentColor"
            className="text-primary-foreground"
          />
          <path
            d="M2 26c3-2.2 5-2.2 8 0s5 2.2 8 0 5-2.2 8 0 4 .6 6-.6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-primary-foreground/80"
          />
        </svg>
      </span>
      <span className="leading-none">
        <span
          className={`block text-sm font-extrabold tracking-[0.14em] ${inverted ? "text-primary-foreground" : "text-foreground"}`}
        >
          ADATEPE
        </span>
        <span className="block text-[11px] font-semibold tracking-[0.22em] text-accent">
          SOĞUK ZİNCİR
        </span>
      </span>
    </Link>
  );
}
