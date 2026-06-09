import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageHero } from "@/components/site/Section";
import { Mail, Phone, MapPin, Clock, MessageCircle, Instagram, Facebook, Music2 } from "lucide-react";
import qrCode from "@/assets/newImages/qrcode.jpeg";
import { chatWhatsAppUrl } from "@/lib/whatsapp";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Active Insight" },
      { name: "description", content: "Get in touch with Active Insight via form, WhatsApp, phone or email." },
      { property: "og:title", content: "Contact Active Insight" },
      { property: "og:description", content: "Reach our sourcing and logistics team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Required").max(30),
  message: z.string().trim().min(5, "Tell us a bit more").max(2000),
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const res = schema.safeParse(data);
    if (!res.success) {
      const errs: Record<string, string> = {};
      res.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  }

  return (
    <>
      <PageHero eyebrow="Contact" title="Let's talk." intro="Tell us what you need. We typically respond within a few hours during business hours." />
      <section className="container-luxe py-20 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3 bg-card border border-border p-8 md:p-10">
          {sent ? (
            <div className="text-center py-16">
              <div className="h-16 w-16 rounded-full bg-gold mx-auto grid place-items-center"><Mail className="h-7 w-7 text-ink" /></div>
              <h3 className="font-serif text-3xl mt-6 text-ink">Message received</h3>
              <p className="mt-3 text-muted-foreground">We'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <h2 className="font-serif text-3xl text-ink">Send a message</h2>
              <Field label="Full Name" name="name" error={errors.name} />
              <Field label="Email" name="email" type="email" error={errors.email} />
              <Field label="Phone Number" name="phone" type="tel" error={errors.phone} />
              <div>
                <label className="block text-sm text-ink mb-2">Message</label>
                <textarea name="message" rows={5} className="w-full border border-input bg-background px-4 py-3 focus:border-gold outline-none" />
                {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
              </div>
              <button type="submit" className="bg-ink text-cream px-8 py-3.5 hover:bg-gold hover:text-ink transition-colors">Send Message</button>
            </form>
          )}
        </div>

        <aside className="lg:col-span-2 space-y-6">
          <InfoCard icon={MapPin} title="Surulere Drop-Off & Pickup">22, Oladimeji Street, Aguda - Surulere, Lagos, Nigeria</InfoCard>
          <InfoCard icon={MapPin} title="Abule Egba Drop-Off">10, Emmanuel Collage Mosalasi, Alagbado, Lagos, Nigeria</InfoCard>
          <InfoCard icon={MapPin} title="Nairobi Pickup">Western Delicacies Restaurant on Ngong Road. After City Mortuary, beside ThemeWood Furniture, opposite Nairobi Baptist, Nairobi, Kenya.</InfoCard>
          <InfoCard icon={Phone} title="Phone / WhatsApp">+254 100 730 474</InfoCard>
          <InfoCard icon={Mail} title="Email">hello@activeinsight.co</InfoCard>
          <InfoCard icon={Clock} title="Business Hours">Mon–Fri · 8am–6pm EAT<br />Sat · 9am–2pm EAT</InfoCard>

          <div className="bg-ink text-cream p-6 text-center">
            <img src={qrCode} alt="Active Insight QR code" width={128} height={128} className="h-32 w-32 mx-auto bg-cream object-contain" />
            <p className="mt-4 text-sm text-gold uppercase tracking-widest">Scan our QR code</p>
            <p className="text-xs text-cream/70 mt-1">Access our social platforms</p>
          </div>

          <div className="flex justify-center gap-3">
            {[
              { label: "Facebook", Icon: Facebook },
              { label: "Instagram", Icon: Instagram },
              { label: "TikTok", Icon: Music2 },
            ].map(({ label, Icon }) => (
              <a key={label} href="#" aria-label={label} className="h-10 w-10 grid place-items-center border border-ink hover:bg-ink hover:text-cream transition-colors"><Icon className="h-4 w-4" /></a>
            ))}
          </div>
        </aside>
      </section>

      <section className="container-luxe pb-20">
        <div className="aspect-[16/6] w-full overflow-hidden border border-border">
          <iframe
            title="Active Insight Location"
            src="https://www.google.com/maps?q=Western%20Delicacies%20Restaurant%20Ngong%20Road%20Nairobi%20Kenya&output=embed"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
        <div className="text-center mt-10">
          <a href={chatWhatsAppUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-3.5 hover:opacity-90">
            <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", error }: { label: string; name: string; type?: string; error?: string }) {
  return (
    <div>
      <label className="block text-sm text-ink mb-2">{label}</label>
      <input name={name} type={type} className="w-full border border-input bg-background px-4 py-3 focus:border-gold outline-none" />
      {error && <p className="text-xs text-destructive mt-1">{error}</p>}
    </div>
  );
}

function InfoCard({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-card border border-border p-6 flex gap-4">
      <div className="h-11 w-11 grid place-items-center bg-gold text-ink shrink-0"><Icon className="h-5 w-5" /></div>
      <div>
        <h4 className="font-serif text-lg text-ink">{title}</h4>
        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{children}</p>
      </div>
    </div>
  );
}
