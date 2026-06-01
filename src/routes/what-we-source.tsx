import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Section";
import products from "@/assets/products.jpg";

export const Route = createFileRoute("/what-we-source")({
  head: () => ({
    meta: [
      { title: "What We Source — Active Insight" },
      { name: "description", content: "Hair, cosmetics, organic products, jewelry, RTW fashion, fabrics, foodstuffs and more — sourced from Nigeria for Kenya." },
      { property: "og:title", content: "What We Source" },
      { property: "og:description", content: "Authentic Nigerian product categories we source." },
      { property: "og:url", content: "/what-we-source" },
      { property: "og:image", content: "/__l5e/og/what-we-source" },
    ],
    links: [{ rel: "canonical", href: "/what-we-source" }],
  }),
  component: WhatWeSource,
});

const categories = [
  { title: "Hair & Wigs", desc: "Premium human hair, lace wigs, bundles and accessories." },
  { title: "Cosmetics & Makeup", desc: "African-owned beauty brands, foundations, skincare, fragrance." },
  { title: "Organic Products", desc: "Shea butter, black soap, cocoa butter and natural skincare staples." },
  { title: "Jewelry & Accessories", desc: "Beaded sets, brass, gold-plated and contemporary statement pieces." },
  { title: "RTW Fashion", desc: "Ready-to-wear Ankara, Kitenge, and modern African couture." },
  { title: "Fabrics", desc: "Ankara, Adire, Aso-Oke — by the yard or in bulk." },
  { title: "Nigerian Foodstuffs", desc: "Garri, egusi, palm oil, spices and pantry essentials." },
  { title: "Wholesale & Retail", desc: "Bulk sourcing for resellers and one-off retail orders." },
];

function WhatWeSource() {
  return (
    <>
      <PageHero eyebrow="Catalogue" title="What we source." intro="A curated range of authentic Nigerian categories — sourced, verified and delivered." />
      <section className="container-luxe py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <div key={c.title} className="group relative bg-card border border-border overflow-hidden hover:border-gold transition-all hover:-translate-y-1 hover:shadow-luxe">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={products} alt={c.title} width={600} height={450} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" style={{ filter: `hue-rotate(${i * 15}deg)` }} />
              </div>
              <div className="p-6">
                <p className="text-xs text-gold tracking-widest">CATEGORY {String(i + 1).padStart(2, "0")}</p>
                <h3 className="font-serif text-xl text-ink mt-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{c.desc}</p>
              </div>
            </div>
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
