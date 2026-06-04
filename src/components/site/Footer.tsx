import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logoAsset from "@/assets/logo.jpg.asset.json";
const logo = logoAsset.url;

export function Footer() {
  return (
    <footer className="bg-ink text-cream mt-24">
      <div className="gold-line" />
      <div className="container-luxe py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Active Insight" width={64} height={64} className="h-16 w-16" loading="lazy" />
            <span className="font-serif text-xl text-gold">Active Insight</span>
          </div>
          <p className="text-sm text-cream/70 leading-relaxed">
            Trusted Sourcing & Logistics Between Nigeria and Kenya.
          </p>
        </div>
        <div>
          <h4 className="text-gold text-sm uppercase tracking-widest mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-cream/70">
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/how-it-works" className="hover:text-gold">How It Works</Link></li>
            <li><Link to="/pricing" className="hover:text-gold">Pricing</Link></li>
            <li><Link to="/faq" className="hover:text-gold">FAQ</Link></li>
            <li><Link to="/quote" className="hover:text-gold">Request a Quote</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-gold text-sm uppercase tracking-widest mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-cream/70">
            <li>Vendor Sourcing</li>
            <li>Product Verification</li>
            <li>Logistics & Cargo</li>
            <li>Pickup & Drop-Off</li>
            <li>Payment Facilitation</li>
          </ul>
        </div>
        <div>
          <h4 className="text-gold text-sm uppercase tracking-widest mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-cream/70">
            <li className="flex gap-2"><MapPin className="h-4 w-4 text-gold mt-0.5" /> Nairobi, Kenya · Lagos, Nigeria</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 text-gold mt-0.5" /> +254 700 000 000</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 text-gold mt-0.5" /> hello@activeinsight.co</li>
          </ul>
          <div className="flex gap-3 mt-5">
            <a href="#" aria-label="Instagram" className="h-9 w-9 grid place-items-center border border-gold/30 hover:bg-gold hover:text-ink transition-colors"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="h-9 w-9 grid place-items-center border border-gold/30 hover:bg-gold hover:text-ink transition-colors"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="h-9 w-9 grid place-items-center border border-gold/30 hover:bg-gold hover:text-ink transition-colors"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="LinkedIn" className="h-9 w-9 grid place-items-center border border-gold/30 hover:bg-gold hover:text-ink transition-colors"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-gold/15">
        <div className="container-luxe py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Active Insight. All rights reserved.</p>
          <p className="italic font-serif text-gold/80">Trusted Sourcing & Logistics Between Nigeria and Kenya</p>
        </div>
      </div>
    </footer>
  );
}
