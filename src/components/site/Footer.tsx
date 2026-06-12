import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, Music2, Phone, MapPin } from "lucide-react";
import logo from "@/assets/newImages/activeLogo.jpeg";
import { quoteWhatsAppUrl } from "@/lib/whatsapp";

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
            <li><a href={quoteWhatsAppUrl} target="_blank" rel="noreferrer" className="hover:text-gold">Request a Quote</a></li>
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
            <li className="flex gap-2"><MapPin className="h-4 w-4 text-gold mt-0.5" /><span>Surulere & Abule Egba, Lagos · Ngong Road, Nairobi</span></li>
            <li className="flex gap-2"><Phone className="h-4 w-4 text-gold mt-0.5" /><span>+254 100 730 474</span></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 text-gold mt-0.5" /><span>hello@activeinsight.co</span></li>
          </ul>
          <div className="flex gap-3 mt-5">
            <a href="https://www.facebook.com/profile.php?id=61589431627620&_rdc=1&_rdr#" target="_blank" rel="noreferrer" aria-label="Facebook" className="h-9 w-9 grid place-items-center border border-gold/30 hover:bg-gold hover:text-ink transition-colors"><Facebook className="h-4 w-4" /></a>
            <a href="https://www.instagram.com/activeinsight_" target="_blank" rel="noreferrer" aria-label="Instagram" className="h-9 w-9 grid place-items-center border border-gold/30 hover:bg-gold hover:text-ink transition-colors"><Instagram className="h-4 w-4" /></a>
            <a href="https://www.tiktok.com/@activeinsight_" target="_blank" rel="noreferrer" aria-label="TikTok" className="h-9 w-9 grid place-items-center border border-gold/30 hover:bg-gold hover:text-ink transition-colors"><Music2 className="h-4 w-4" /></a>
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
