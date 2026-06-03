import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Section";
import { categories } from "@/lib/categories";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/what-we-source/")({
  head: () => ({
    meta: [
      { title: "What We Source — Active Insight" },
      { name: "description", content: "Hair, cosmetics, organic products, jewelry, RTW fashion, fabrics, foodstuffs and more — sourced from Nigeria for Kenya." },
      { property: "og:title", content: "What We Source" },
      { property: "og:description", content: "Authentic Nigerian product categories we source." },
      { property: "og:url", content: "/what-we-source" },
    ],
    links: [{ rel: "canonical", href: "/what-we-source" }],
  }),
  component: WhatWeSource,
});

function WhatWeSource() {
  return (
    <>
      <PageHero eyebrow="Catalogue" title="What we source." intro="A curated range of authentic Nigerian categories — sourced, verified and delivered. Tap any category to explore items." />
      <section className="container-luxe py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <Link
              key={c.slug}
              to="/what-we-source/$slug"
              params={{ slug: c.slug }}
              className="group relative bg-card border border-border overflow-hidden hover:border-gold transition-all hover:-translate-y-1 hover:shadow-luxe block"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-gold tracking-widest">CATEGORY {String(i + 1).padStart(2, "0")}</p>
                <h3 className="font-serif text-xl text-ink mt-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{c.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-ink group-hover:text-gold transition-colors">
                  View items <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-5">Looking for something else? We source on request.</p>
          <Link to="/quote" className="inline-flex bg-ink text-cream px-8 py-3.5 hover:bg-ink/90">Request a custom item</Link>
        </div>
      </section>
    </>
  );
}
