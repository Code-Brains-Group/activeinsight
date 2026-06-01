import type { ReactNode } from "react";

export function SectionHeader({ eyebrow, title, intro, center = true }: { eyebrow?: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div className={center ? "text-center max-w-2xl mx-auto mb-14" : "max-w-2xl mb-14"}>
      {eyebrow && <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">{eyebrow}</p>}
      <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">{title}</h2>
      {intro && <p className="mt-5 text-muted-foreground leading-relaxed">{intro}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, intro, children }: { eyebrow?: string; title: string; intro?: string; children?: ReactNode }) {
  return (
    <section className="bg-ink text-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 30% 50%, var(--gold), transparent 60%)" }} />
      <div className="container-luxe relative py-24 md:py-32 text-center">
        {eyebrow && <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5 reveal">{eyebrow}</p>}
        <h1 className="font-serif text-5xl md:text-6xl text-cream reveal" style={{ animationDelay: "0.1s" }}>{title}</h1>
        {intro && <p className="mt-6 text-cream/70 max-w-2xl mx-auto reveal" style={{ animationDelay: "0.2s" }}>{intro}</p>}
        {children && <div className="mt-8 reveal" style={{ animationDelay: "0.3s" }}>{children}</div>}
        <div className="gold-line mt-12 max-w-xs mx-auto" />
      </div>
    </section>
  );
}
