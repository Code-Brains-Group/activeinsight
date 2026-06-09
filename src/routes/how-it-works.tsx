import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Section";
import { quoteWhatsAppUrl } from "@/lib/whatsapp";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — Active Insight" },
      { name: "description", content: "Our five-step process from product request to doorstep delivery in Kenya." },
      { property: "og:title", content: "How It Works" },
      { property: "og:description", content: "Five-step sourcing and shipping process." },
      { property: "og:url", content: "/how-it-works" },
    ],
    links: [{ rel: "canonical", href: "/how-it-works" }],
  }),
  component: HowItWorks,
});

const steps = [
  { t: "Send us your product request", d: "Share the items, quantities and any reference photos. We acknowledge within hours." },
  { t: "We source & verify from trusted vendors", d: "We engage our vendor network in Nigeria, send you options and physically verify the chosen products." },
  { t: "Payment facilitation & confirmation", d: "You pay in KES — we handle the NGN side. Receipts and confirmations issued for full transparency." },
  { t: "Cargo coordination & shipping begins", d: "Goods are packaged, documented and dispatched via our cross-border cargo channels." },
  { t: "Pickup, delivery or drop-off", d: "Collect from our Nairobi pickup point, use our Lagos drop-off locations, or choose doorstep delivery where available." },
];

function HowItWorks() {
  return (
    <>
      <PageHero eyebrow="Process" title="From request to doorstep — in five steps." intro="A clear, repeatable process designed for trust and visibility." />
      <section className="container-luxe py-20">
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-gold/40 to-transparent" />
          {steps.map((s, i) => (
            <div key={i} className="relative pl-24 pb-14 last:pb-0">
              <div className="absolute left-0 top-0 h-16 w-16 rounded-full bg-ink text-gold font-serif text-2xl grid place-items-center shadow-luxe">{i + 1}</div>
              <h3 className="font-serif text-3xl text-ink">{s.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href={quoteWhatsAppUrl} target="_blank" rel="noreferrer" className="inline-flex bg-gold text-ink px-8 py-3.5 font-medium hover:bg-gold-soft">Start your request</a>
        </div>
      </section>
    </>
  );
}
