import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  dark?: boolean;
  centered?: boolean;
}

export function SectionHeader({ eyebrow, title, description, dark, centered = true }: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12`}>
      {eyebrow && (
        <div className="inline-flex items-center text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3">
          {eyebrow}
        </div>
      )}
      <h2 className="text-2xl md:text-4xl font-bold uppercase text-balance">{title}</h2>
      {description && (
        <p className={`mt-4 text-base md:text-lg leading-relaxed ${dark ? "text-white/80" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </div>
  );
}

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}

export function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="relative min-h-[55vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-navy-deep text-white">
      {image && (
        <div className="absolute inset-0 z-0">
          <img src={image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
      )}
      <div className="container-x relative z-10 text-center max-w-4xl">
        {eyebrow && (
          <div className="inline-flex items-center text-xs font-bold uppercase tracking-[0.25em] text-gold mb-4 bg-white/10 px-4 py-1.5 rounded-full border border-white/10">
            {eyebrow}
          </div>
        )}
        <h1 className="text-3xl md:text-5xl font-extrabold uppercase text-white text-balance leading-tight">{title}</h1>
        {description && (
          <p className="mt-6 text-base md:text-lg text-white/85 leading-relaxed text-balance max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

export function PageLayout({ children }: { children: ReactNode }) {
  return <main className="bg-background">{children}</main>;
}
