import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeader } from "@/components/site/Section";
import { Target, Award, Workflow, Handshake } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Active Insight" },
      { name: "description", content: "Active Insight bridges Kenya-Nigeria cross-border trade with verified sourcing and reliable logistics." },
      { property: "og:title", content: "About Active Insight" },
      { property: "og:description", content: "Bridging Kenya-Nigeria cross-border trade." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const blocks = [
  { icon: Target, title: "Our Mission", text: "To make sourcing authentic Nigerian products from Kenya effortless, transparent and trustworthy — empowering individuals and businesses to trade with confidence across borders." },
  { icon: Award, title: "Why Choose Us", text: "We combine deep local relationships in Nigeria with reliable last-mile delivery in Kenya, delivering a premium, hands-on experience from request to receipt." },
  { icon: Workflow, title: "Our Process", text: "A clear, five-step pipeline: request, source, verify, ship, and deliver. You're updated at every stage with photos, receipts and tracking." },
  { icon: Handshake, title: "Trust & Reliability", text: "Verified vendors, inspected products, transparent pricing, and a single point of accountability. Your shipment is our reputation." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Bridging Nigeria and Kenya, with care."
        intro="Active Insight is a premium cross-border sourcing and logistics company specialising in authentic Nigerian goods delivered safely to Kenya."
      />
      <section className="container-luxe py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-muted-foreground leading-relaxed text-lg">
            We were founded on a simple insight: buyers in Kenya love the quality, variety and cultural richness of Nigerian products — but cross-border sourcing has always been fragmented and risky. Active Insight removes that friction. We act as your eyes, hands and logistics team on the ground in Nigeria, working only with verified vendors and ensuring every product is authentic before it is shipped. From a single jar of shea butter to a bulk order of Ankara fabric, we treat every shipment with the same standard of care.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {blocks.map((b) => (
            <div key={b.title} className="bg-card border border-border p-8 hover:border-gold transition-colors">
              <div className="h-12 w-12 grid place-items-center bg-gold text-ink"><b.icon className="h-5 w-5" /></div>
              <h3 className="font-serif text-2xl text-ink mt-5">{b.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-secondary/40 py-20">
        <div className="container-luxe">
          <SectionHeader eyebrow="By the numbers" title="A growing trade bridge." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              ["1,500+", "Shipments delivered"],
              ["300+", "Verified vendors"],
              ["8", "Product categories"],
              ["98%", "Customer satisfaction"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="font-serif text-5xl text-gold">{n}</p>
                <p className="text-sm text-muted-foreground mt-2 uppercase tracking-widest">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
