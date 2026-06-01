import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/254700000000?text=Hello%20Active%20Insight%2C%20I%27d%20like%20to%20enquire."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] grid place-items-center shadow-gold hover:scale-110 transition-transform float-y"
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </a>
  );
}
