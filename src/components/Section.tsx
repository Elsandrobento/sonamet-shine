import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  descriptionClassName = "",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  descriptionClassName?: string;
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} mb-12 ${className}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-4`}>
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl md:text-5xl font-bold text-balance">{title}</h2>
      {description && (
        <p className={`mt-4 text-lg text-muted-foreground leading-relaxed ${descriptionClassName}`}>{description}</p>
      )}
    </div>
  );
}

export function PageHero({ eyebrow, title, description, image }: { eyebrow: string; title: string; description: string; image: string }) {
  return (
    <section className="relative min-h-[60vh] flex items-end pt-32 pb-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="container-x relative">
        <div className="max-w-3xl reveal">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-4">
            {eyebrow}
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white text-balance">{title}</h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl">{description}</p>
        </div>
      </div>
    </section>
  );
}

export function PageLayout({ children }: { children: ReactNode }) {
  return <main className="bg-background">{children}</main>;
}
