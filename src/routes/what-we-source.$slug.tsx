import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getCategory, categories } from "@/lib/categories";
import { ArrowLeft, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/what-we-source/$slug")({
  head: ({ params }) => {
    const cat = params?.slug ? getCategory(params.slug) : undefined;
    const title = cat ? `${cat.title} — Active Insight` : "Category — Active Insight";
    const desc = cat?.desc ?? "Authentic Nigerian products sourced for Kenya.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/what-we-source/${params?.slug ?? ""}` },
        ...(cat ? [{ property: "og:image", content: cat.image }] : []),
      ],
      links: [{ rel: "canonical", href: `/what-we-source/${params?.slug ?? ""}` }],
    };
  },
  loader: ({ params }) => {
    const cat = getCategory(params.slug);
    if (!cat) throw notFound();
    return { category: cat };
  },
  notFoundComponent: () => (
    <div className="container-luxe py-32 text-center">
      <h1 className="font-serif text-4xl text-ink">Category not found</h1>
      <Link to="/what-we-source" className="mt-6 inline-flex items-center gap-2 text-gold border-b border-gold pb-1">
        <ArrowLeft className="h-4 w-4" /> Back to catalogue
      </Link>
    </div>
  ),
  component: CategoryDetail,
});

const WA_NUMBER = "254700000000";

function waLink(itemName: string, catTitle: string) {
  const text = encodeURIComponent(
    `Hello Active Insight, I'd like to enquire about "${itemName}" (${catTitle}). Please share pricing and availability.`,
  );
  return `https://wa.me/${WA_NUMBER}?text=${text}`;
}

function CategoryDetail() {
  const { category } = Route.useLoaderData();

  return (
    <>
      {/* HERO with AI image */}
      <section className="relative bg-ink text-cream overflow-hidden">
        <img
          src={category.image}
          alt={category.title}
          width={1024}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />
        <div className="container-luxe relative py-24 md:py-32">
          <Link
            to="/what-we-source"
            className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-[0.3em] mb-6 hover:text-cream"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Catalogue
          </Link>
          <h1 className="font-serif text-5xl md:text-6xl text-cream max-w-3xl">{category.title}</h1>
          <p className="mt-5 text-cream/75 max-w-2xl">{category.desc}</p>
          <div className="gold-line mt-10 max-w-xs" />
        </div>
      </section>

      {/* ITEMS */}
      <section className="container-luxe py-20">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Available items</p>
        <h2 className="font-serif text-3xl md:text-4xl text-ink mb-10">
          Tap WhatsApp to enquire about any item.
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          {category.items.map((item, i) => (
            <div
              key={item.name}
              className="group bg-card border border-border p-6 md:p-7 flex gap-5 items-start hover:border-gold hover:shadow-luxe transition-all"
            >
              <div className="font-serif text-2xl text-gold w-10 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-xl text-ink">{item.name}</h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{item.desc}</p>
              </div>
              <a
                href={waLink(item.name, category.title)}
                target="_blank"
                rel="noreferrer"
                aria-label={`Enquire about ${item.name} on WhatsApp`}
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2.5 text-sm hover:opacity-90 shrink-0 self-center"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </div>
          ))}
        </div>

        {/* OTHER CATEGORIES */}
        <div className="mt-24">
          <div className="gold-line mb-12 max-w-xs mx-auto" />
          <p className="text-center text-xs uppercase tracking-[0.3em] text-gold mb-6">Explore more</p>
          <div className="flex flex-wrap justify-center gap-3">
            {categories
              .filter((c) => c.slug !== category.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  to="/what-we-source/$slug"
                  params={{ slug: c.slug }}
                  className="px-5 py-2.5 border border-border text-sm text-ink hover:border-gold hover:text-gold transition-colors"
                >
                  {c.title}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-cream">
        <div className="container-luxe py-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl">Don't see exactly what you need?</h2>
          <p className="mt-3 text-cream/70 max-w-xl mx-auto">Send us your custom request and we'll source it from a trusted Nigerian vendor.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link to="/quote" className="bg-gold text-ink px-7 py-3 font-medium hover:bg-gold-soft">Request a Quote</Link>
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-gold text-gold px-7 py-3 hover:bg-gold hover:text-ink transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
