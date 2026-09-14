import type { ReactNode } from "react";

type Tone = "ivory" | "teal" | "sky";

export function Section({
  id,
  tone = "ivory",
  children,
  className = "",
}: {
  id?: string;
  tone?: Tone;
  children: ReactNode;
  className?: string;
}) {
  const tones: Record<Tone, string> = {
    ivory: "bg-background text-foreground",
    teal: "bg-teal text-ivory",
    sky: "bg-sky text-foreground",
  };
  return (
    <section
      id={id}
      className={`${tones[tone]} scroll-mt-24 px-6 py-20 md:py-30 ${className}`}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] opacity-70">
      {children}
    </p>
  );
}
