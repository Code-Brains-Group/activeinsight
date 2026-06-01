import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageHero } from "@/components/site/Section";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Request a Quote — Active Insight" },
      { name: "description", content: "Tell us what you'd like to source from Nigeria and we'll get back with a tailored quote." },
      { property: "og:title", content: "Request a Quote" },
      { property: "og:description", content: "Get a tailored Nigeria-to-Kenya sourcing & shipping quote." },
      { property: "og:url", content: "/quote" },
    ],
    links: [{ rel: "canonical", href: "/quote" }],
  }),
  component: Quote,
});

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(7).max(30),
  category: z.string().trim().min(1).max(100),
  items: z.string().trim().min(5).max(2000),
  weight: z.string().trim().max(50).optional(),
  delivery: z.string().trim().max(100).optional(),
});

function Quote() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = Object.fromEntries(new FormData(e.currentTarget).entries());
    const res = schema.safeParse(fd);
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
      <PageHero eyebrow="Get a Quote" title="Tell us what you need." intro="Share your product list and we'll respond with a tailored quote within 24 hours." />
      <section className="container-luxe py-16 max-w-3xl">
        {sent ? (
          <div className="bg-card border border-gold p-12 text-center">
            <CheckCircle2 className="h-14 w-14 text-gold mx-auto" />
            <h2 className="font-serif text-3xl mt-5 text-ink">Quote request received</h2>
            <p className="mt-3 text-muted-foreground">Thank you. Our sourcing team will be in touch shortly with a tailored quote.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="bg-card border border-border p-8 md:p-10 space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <F label="Full Name" name="name" error={errors.name} />
              <F label="Email" name="email" type="email" error={errors.email} />
              <F label="Phone / WhatsApp" name="phone" type="tel" error={errors.phone} />
              <F label="Product Category" name="category" placeholder="e.g. Hair, Fabrics, Cosmetics" error={errors.category} />
              <F label="Estimated Weight (KG)" name="weight" placeholder="e.g. 5 KG" />
              <F label="Delivery Method" name="delivery" placeholder="Pickup or Doorstep" />
            </div>
            <div>
              <label className="block text-sm text-ink mb-2">Items / Description</label>
              <textarea name="items" rows={6} placeholder="List the products, quantities and any vendor links or photos you have…" className="w-full border border-input bg-background px-4 py-3 focus:border-gold outline-none" />
              {errors.items && <p className="text-xs text-destructive mt-1">{errors.items}</p>}
            </div>
            <button type="submit" className="bg-gold text-ink px-8 py-3.5 font-medium hover:bg-ink hover:text-cream transition-colors">Submit Quote Request</button>
          </form>
        )}
      </section>
    </>
  );
}

function F({ label, name, type = "text", placeholder, error }: { label: string; name: string; type?: string; placeholder?: string; error?: string }) {
  return (
    <div>
      <label className="block text-sm text-ink mb-2">{label}</label>
      <input name={name} type={type} placeholder={placeholder} className="w-full border border-input bg-background px-4 py-3 focus:border-gold outline-none" />
      {error && <p className="text-xs text-destructive mt-1">{error}</p>}
    </div>
  );
}
