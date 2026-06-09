import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/Section";
import { Plus, Minus } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Active Insight" },
      { name: "description", content: "Common questions about sourcing, shipping, payments and timelines between Nigeria and Kenya." },
      { property: "og:title", content: "FAQ — Active Insight" },
      { property: "og:description", content: "Answers to common sourcing & logistics questions." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }),
    }],
  }),
  component: FAQ,
});

const faqs = [
  { q: "How long does shipping take from Nigeria to Kenya?", a: "Air cargo takes 3–4 working days. We ship weekly from Nigeria to Kenya on Tuesdays and Thursdays." },
  { q: "How do I pay — in KES or NGN?", a: "You pay in KES. We handle the NGN payment to the Nigerian vendor on your behalf at the live exchange rate, with no hidden FX margins." },
  { q: "What if a product turns out to be inauthentic?", a: "We physically verify every item before shipping and make sure every product is checked before dispatch. Because verification happens before shipping, we do not replace products in rare post-shipping cases." },
  { q: "Do you handle customs?", a: "Yes — we manage all documentation and customs clearance on the Kenyan side as part of the cargo rate." },
  { q: "Can I source bulk wholesale orders?", a: "Absolutely. We work with both individuals and businesses, and offer preferential rates for repeat or bulk orders." },
  { q: "Where do I pick up my order in Kenya?", a: "Our Nairobi pickup point is Western Delicacies Restaurant on Ngong Road, after City Mortuary, beside ThemeWood Furniture and opposite Nairobi Baptist. We also have Lagos drop-off points at 22, Oladimeji Street, Aguda - Surulere, Lagos, and 10, Emmanuel Collage Mosalasi, Alagbado, Lagos." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHero eyebrow="FAQ" title="Answers to common questions." />
      <section className="container-luxe py-16 max-w-3xl">
        <div className="divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button className="w-full flex justify-between items-center text-left py-6 hover:text-gold transition-colors" onClick={() => setOpen(isOpen ? null : i)}>
                  <span className="font-serif text-xl text-ink">{f.q}</span>
                  {isOpen ? <Minus className="h-5 w-5 text-gold shrink-0" /> : <Plus className="h-5 w-5 text-gold shrink-0" />}
                </button>
                {isOpen && <p className="pb-6 text-muted-foreground leading-relaxed">{f.a}</p>}
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-5">Still have questions?</p>
          <Link to="/contact" className="inline-flex bg-ink text-cream px-8 py-3.5 hover:bg-gold hover:text-ink transition-colors">Contact us</Link>
        </div>
      </section>
    </>
  );
}
