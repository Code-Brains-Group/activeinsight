import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Section";
import sourcingImg from "@/assets/service-sourcing.jpg";
import verificationImg from "@/assets/service-verification.jpg";
import logisticsImg from "@/assets/service-logistics.jpg";
import pickupImg from "@/assets/service-pickup.jpg";
import paymentImg from "@/assets/service-payment.jpg";
import { quoteWhatsAppUrl } from "@/lib/whatsapp";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Active Insight" },
      { name: "description", content: "Vendor sourcing, product verification, cargo logistics, drop-off services and KES↔NGN payment facilitation." },
      { property: "og:title", content: "Services — Active Insight" },
      { property: "og:description", content: "Full cross-border sourcing and logistics services." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  { image: sourcingImg, title: "Vendor Sourcing", desc: "We tap into our network of vetted Nigerian suppliers to find the exact product you need — at the right quality and price.", points: ["Curated vendor shortlists", "Wholesale & retail options", "Negotiation on your behalf"] },
  { image: verificationImg, title: "Product Verification", desc: "Before anything ships, our team physically inspects every item to confirm authenticity, condition and accuracy of your order.", points: ["Photo & video proof", "Quality checks", "Authenticity confirmation"] },
  { image: logisticsImg, title: "Logistics & Cargo Coordination", desc: "End-to-end cargo management from packaging in Nigeria to arrival in Kenya, with clear tracking throughout.", points: ["Air & sea cargo", "Customs handling", "Insurance options"] },
  { image: pickupImg, title: "Pickup & Drop-Off Services", desc: "Convenient collection at our Nairobi pickup point, Lagos drop-off locations, or doorstep delivery where available.", points: ["Ngong Road Nairobi pickup", "Surulere & Abule Egba drop-offs", "Doorstep delivery"] },
  { image: paymentImg, title: "Payment Facilitation (KES ↔ NGN)", desc: "We handle the cross-border payment so you transact only in your local currency — transparent, fast and secure.", points: ["Live exchange rates", "No hidden FX fees", "Documented receipts"] },
];

function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="Five services. One trusted partner." intro="Every stage of cross-border trade, handled end-to-end so you don't have to coordinate moving parts." />
      <section className="container-luxe py-20 space-y-12">
        {services.map((s, i) => (
          <div key={s.title} className={`grid lg:grid-cols-12 gap-10 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div className="lg:col-span-5 aspect-[4/3] relative overflow-hidden shadow-luxe">
              <img src={s.image} alt={s.title} width={1024} height={768} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            </div>
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">0{i + 1} — Service</p>
              <h2 className="font-serif text-4xl text-ink">{s.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed text-lg">{s.desc}</p>
              <ul className="mt-6 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-ink"><span className="h-px w-6 bg-gold" />{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div className="text-center pt-8">
          <a href={quoteWhatsAppUrl} target="_blank" rel="noreferrer" className="inline-flex bg-gold text-ink px-8 py-3.5 font-medium hover:bg-gold-soft">Request a Quote</a>
        </div>
      </section>
    </>
  );
}
