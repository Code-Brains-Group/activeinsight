import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/africa-network.jpg";
import logistics from "@/assets/logistics.jpg";
import { SectionHeader } from "@/components/site/Section";
import { ArrowRight, Search, ShieldCheck, Ship, MapPin, Wallet, Sparkles, BadgeCheck, Clock } from "lucide-react";
import { quoteWhatsAppUrl } from "@/lib/whatsapp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Active Insight — Trusted Nigeria-to-Kenya Sourcing & Logistics" },
      { name: "description", content: "We help individuals and businesses source, verify and ship authentic products from Nigeria to Kenya with confidence." },
      { property: "og:title", content: "Active Insight — Nigeria to Kenya Sourcing" },
      { property: "og:description", content: "Premium sourcing, verification & logistics between Nigeria and Kenya." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const services = [
  { icon: Search, title: "Vendor Sourcing", desc: "We identify and engage trusted Nigerian vendors for your specific needs." },
  { icon: ShieldCheck, title: "Product Verification", desc: "Every item is inspected and verified for authenticity before shipping." },
  { icon: Ship, title: "Logistics & Cargo", desc: "End-to-end coordination of cargo from origin to your doorstep in Kenya." },
  { icon: MapPin, title: "Pickup & Drop-Off", desc: "Convenient Lagos drop-off locations and a Nairobi pickup point on Ngong Road." },
  { icon: Wallet, title: "Payment Facilitation", desc: "Seamless KES ↔ NGN payment handling with full transparency." },
];

const steps = [
  "Send us your product request",
  "We source & verify from trusted vendors",
  "Payment facilitation & confirmation",
  "Cargo coordination & shipping begins",
  "Pickup, delivery or Lagos drop-off coordination",
];

const reasons = [
  { icon: BadgeCheck, title: "Authentic Products", desc: "Verified sourcing from established Nigerian vendors only." },
  { icon: Sparkles, title: "Premium Service", desc: "White-glove handling from request to delivery." },
  { icon: Clock, title: "Reliable Timelines", desc: "Transparent shipping schedules you can plan around." },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-ink text-cream overflow-hidden">
        <img src={hero} alt="Map of Africa showing trade network connections" width={1600} height={1024} className="absolute inset-0 h-full w-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/30" />
        <div className="container-luxe relative py-28 md:py-40 max-w-4xl">
          <p className="text-base md:text-xl uppercase tracking-[0.35em] text-gold mb-6 reveal flex items-center gap-3 font-medium">
            <span>Nigeria</span>
            <span className="text-4xl md:text-5xl leading-none" aria-hidden>🇳🇬</span>
            <span className="text-gold/70">↔</span>
            <span className="text-4xl md:text-5xl leading-none" aria-hidden>🇰🇪</span>
            <span>Kenya</span>
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] text-cream reveal" style={{ animationDelay: "0.1s" }}>
            Your Trusted <span className="text-gold italic">Nigeria-to-Kenya</span> Sourcing & Logistics Partner
          </h1>
          <p className="mt-8 text-lg text-cream/80 max-w-2xl reveal" style={{ animationDelay: "0.2s" }}>
            We help individuals and businesses source, verify, and ship authentic products from Nigeria to Kenya with confidence.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 reveal" style={{ animationDelay: "0.3s" }}>
            <a href={quoteWhatsAppUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-gold text-ink px-7 py-3.5 font-medium hover:bg-gold-soft transition-colors">
              Get Started <ArrowRight className="h-4 w-4" />
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-gold text-gold px-7 py-3.5 hover:bg-gold hover:text-ink transition-colors">
              Contact Us
            </Link>
            <a href={quoteWhatsAppUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-cream/30 text-cream px-7 py-3.5 hover:border-gold hover:text-gold transition-colors">
              Request a Quote
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-luxe py-24">
        <SectionHeader eyebrow="What We Do" title="A complete cross-border trade partner" intro="From sourcing to last-mile delivery, we handle every link of the chain so you don't have to." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.title} className="group bg-card border border-border p-8 hover:border-gold transition-all hover:shadow-luxe">
              <div className="h-12 w-12 grid place-items-center bg-ink text-gold group-hover:bg-gold group-hover:text-ink transition-colors">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="mt-6 text-xs text-gold tracking-widest">0{i + 1}</div>
              <h3 className="font-serif text-2xl mt-2 text-ink">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/services" className="inline-flex items-center gap-2 text-ink border-b border-gold pb-1 hover:text-gold">
            All services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-secondary/40 py-24">
        <div className="container-luxe">
          <SectionHeader eyebrow="How It Works" title="Five steps. Total confidence." />
          <div className="grid gap-8 md:grid-cols-5 relative">
            {steps.map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-ink text-gold font-serif text-2xl grid place-items-center">{i + 1}</div>
                <p className="mt-5 text-sm text-ink leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container-luxe py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Why Choose Us</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">Premium service, built on trust.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Active Insight bridges two of Africa's most dynamic markets. We combine local expertise in Nigeria with reliable delivery in Kenya — backed by transparency at every step.
          </p>
          <div className="mt-8 space-y-5">
            {reasons.map((r) => (
              <div key={r.title} className="flex gap-4">
                <div className="h-10 w-10 grid place-items-center bg-gold text-ink shrink-0"><r.icon className="h-5 w-5" /></div>
                <div>
                  <h4 className="font-serif text-lg text-ink">{r.title}</h4>
                  <p className="text-sm text-muted-foreground">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img src={logistics} alt="Cargo logistics" width={1200} height={800} loading="lazy" className="w-full h-[520px] object-cover shadow-luxe" />
          <div className="absolute -bottom-6 -left-6 bg-gold text-ink p-6 max-w-[220px] hidden md:block">
            <p className="font-serif text-3xl">1,500+</p>
            <p className="text-xs uppercase tracking-widest mt-1">Successful Shipments</p>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-ink text-cream">
        <div className="container-luxe py-20 text-center relative">
          <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at center, var(--gold), transparent 70%)" }} />
          <div className="relative">
            <h2 className="font-serif text-4xl md:text-5xl text-cream">Ready to source from Nigeria?</h2>
            <p className="mt-4 text-cream/70 max-w-xl mx-auto">Send us your product list and we'll get back with a tailored quote within 24 hours.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={quoteWhatsAppUrl} target="_blank" rel="noreferrer" className="bg-gold text-ink px-8 py-3.5 font-medium hover:bg-gold-soft">Request a Quote</a>
              <Link to="/contact" className="border border-gold text-gold px-8 py-3.5 hover:bg-gold hover:text-ink transition-colors">Talk to us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
