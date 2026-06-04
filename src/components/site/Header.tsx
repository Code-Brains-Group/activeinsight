import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logoAsset from "@/assets/logo.jpg.asset.json";
const logo = logoAsset.url;
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/what-we-source", label: "What We Source" },
  { to: "/pricing", label: "Pricing" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-ink/95 backdrop-blur border-b border-gold/20">
      <div className="container-luxe flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Active Insight" width={64} height={64} className="h-16 w-16 object-contain" />
          <div className="leading-tight">
            <div className="font-serif text-xl text-gold tracking-wide">Active Insight</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-cream/60">Sourcing · Logistics</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-cream/80 hover:text-gold transition-colors relative"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/quote" className="ml-2 inline-flex items-center px-5 py-2.5 bg-gold text-ink text-sm font-medium hover:bg-gold-soft transition-colors">
            Request a Quote
          </Link>
        </nav>
        <button className="lg:hidden text-cream" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-gold/20 bg-ink">
          <div className="container-luxe py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-cream/80 py-2" activeProps={{ className: "text-gold" }} activeOptions={{ exact: l.to === "/" }}>
                {l.label}
              </Link>
            ))}
            <Link to="/quote" onClick={() => setOpen(false)} className="mt-2 text-center bg-gold text-ink py-3">Request a Quote</Link>
          </div>
        </div>
      )}
    </header>
  );
}
