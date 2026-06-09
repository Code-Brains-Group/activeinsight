export const WHATSAPP_NUMBER = "254100730474";

export function getWhatsAppUrl(message = "Hello Active Insight, I'd like to enquire.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const chatWhatsAppUrl = getWhatsAppUrl();
export const quoteWhatsAppUrl = getWhatsAppUrl("Hello Active Insight, I'd like to request a quote.");
