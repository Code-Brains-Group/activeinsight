import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

const WHATSAPP_NUMBER = "254700000000";
const GREETINGS = [
  "Hello there 👋 How can we help you today?",
  "Karibu! Need help sourcing from Nigeria?",
  "Hi! Ask us anything about shipping & sourcing ✨",
];

export function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const [teased, setTeased] = useState(false);
  const [message, setMessage] = useState("");
  const [greeting] = useState(() => GREETINGS[Math.floor(Math.random() * GREETINGS.length)]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const t = setTimeout(() => {
      setOpen(true);
      setTeased(true);
    }, 3000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 250);
  }, [open]);

  const send = (e?: React.FormEvent) => {
    e?.preventDefault();
    const text = message.trim() || "Hello Active Insight, I'd like to enquire.";
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setMessage("");
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-[320px] sm:w-[360px] bg-card border border-border shadow-luxe overflow-hidden animate-scale-in origin-bottom-right">
          {/* Header */}
          <div className="bg-ink text-cream px-4 py-3 flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-full bg-gold grid place-items-center shrink-0">
              <MessageCircle className="h-5 w-5 text-ink" />
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-[#25D366] ring-2 ring-ink" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-serif text-base leading-tight">Active Insight</p>
              <p className="text-[11px] text-cream/60">Typically replies in minutes</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="h-7 w-7 grid place-items-center text-cream/70 hover:text-gold transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Body */}
          <div className="px-4 py-5 bg-secondary/40">
            <div className="max-w-[85%] bg-card border border-border px-3.5 py-2.5 text-sm text-ink shadow-sm rounded-tr-xl rounded-br-xl rounded-bl-xl">
              {greeting}
            </div>
            <p className="mt-3 text-[11px] text-muted-foreground">
              Send a message and we'll continue on WhatsApp.
            </p>
          </div>

          {/* Input */}
          <form onSubmit={send} className="flex items-center gap-2 border-t border-border bg-card p-2">
            <input
              ref={inputRef}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message…"
              className="flex-1 px-3 py-2 text-sm bg-transparent outline-none placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              aria-label="Send via WhatsApp"
              className="h-9 w-9 grid place-items-center bg-[#25D366] text-white hover:scale-105 transition-transform"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      {/* Tease bubble (shows once before user opens) */}
      {!open && teased && (
        <button
          onClick={() => setOpen(true)}
          className="max-w-[240px] bg-card border border-border shadow-luxe px-4 py-2.5 text-sm text-ink text-left animate-fade-in hover:border-gold transition-colors"
        >
          {greeting}
        </button>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Chat on WhatsApp"}
        className="h-14 w-14 rounded-full bg-[#25D366] grid place-items-center shadow-gold hover:scale-110 transition-transform float-y"
      >
        {open ? <X className="h-6 w-6 text-white" /> : <MessageCircle className="h-7 w-7 text-white" />}
      </button>
    </div>
  );
}
