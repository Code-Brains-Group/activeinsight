import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Section";
import { Check, MessageCircle } from "lucide-react";
import { chatWhatsAppUrl, quoteWhatsAppUrl } from "@/lib/whatsapp";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Active Insight" },
      { name: "description", content: "Admin/Errant fee from KES 1,500. Cargo rate KES 950 per KG, subject to change. Request a custom quote." },
      { property: "og:title", content: "Pricing — Active Insight" },
      { property: "og:description", content: "Transparent admin fees and cargo rates." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: Pricing,
});

function Pricing() {
  return (
    <>
      <PageHero eyebrow="Pricing" title="Transparent and fair." intro="Our pricing is straightforward — an admin/Errant fee plus a per-kilo cargo rate. Custom quotes available for bulk orders." />
      <section className="container-luxe py-20">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-card border border-border p-10 hover:border-gold transition-colors">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Admin Fee / Errant Fee</p>
            <p className="font-serif text-5xl text-ink mt-4">From KES 1,500</p>
            <p className="text-muted-foreground mt-3">Covers sourcing coordination, vendor liaison, Errant fee and verification work.</p>
            <ul className="mt-6 space-y-3">
              {["Vendor identification & negotiation", "Product verification & photos", "Order management"].map((t) => (
                <li key={t} className="flex gap-3 text-sm"><Check className="h-5 w-5 text-gold shrink-0" />{t}</li>
              ))}
            </ul>
          </div>
          <div className="bg-ink text-cream p-10 shadow-luxe relative overflow-hidden">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gold/20 blur-3xl" />
            <p className="text-xs uppercase tracking-[0.3em] text-gold relative">Cargo Rate</p>
            <p className="font-serif text-5xl text-gold mt-4 relative">KES 950 <span className="text-2xl text-cream/70">/ KG</span></p>
            <p className="text-cream/70 mt-3 relative">Cross-border shipping, customs handling and delivery to Kenya. Subject to change.</p>
            <ul className="mt-6 space-y-3 relative">
              {["Nigeria → Kenya shipping", "Customs documentation", "Tracking until delivery"].map((t) => (
                <li key={t} className="flex gap-3 text-sm"><Check className="h-5 w-5 text-gold shrink-0" />{t}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-12 p-6 border border-gold/30 bg-gold/5">
          <p className="text-sm text-ink leading-relaxed">
            <strong className="font-serif text-base">Note:</strong> Pricing may vary depending on distance, size, quantity and the nature of the goods. Final rates are subject to change due to customs, import regulations and market fluctuations. We always confirm the full quote before any payment is made.
          </p>
        </div>

        <div className="text-center mt-12 flex flex-wrap justify-center gap-4">
          <a href={quoteWhatsAppUrl} target="_blank" rel="noreferrer" className="bg-gold text-ink px-8 py-3.5 font-medium hover:bg-gold-soft">Request a Quote</a>
          <a href={chatWhatsAppUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-ink text-ink px-8 py-3.5 hover:bg-ink hover:text-cream transition-colors">
            <MessageCircle className="h-4 w-4" /> WhatsApp Inquiry
          </a>
        </div>
      </section>
    </>
  );
}
