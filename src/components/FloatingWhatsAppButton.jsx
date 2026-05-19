import { FaWhatsapp } from "react-icons/fa";

/** WhatsApp international number digits only — no +, spaces, or dashes */
const WHATSAPP_E164_DIGITS = "923355080503";

const WHATSAPP_CHAT_URL = `https://wa.me/${WHATSAPP_E164_DIGITS}`;

export function FloatingWhatsAppButton() {
  return (
    <a
      href={WHATSAPP_CHAT_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-600/25 transition-transform duration-200 ease-out hover:scale-110 hover:bg-[#20BD5A] hover:shadow-xl hover:shadow-green-500/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <FaWhatsapp className="h-7 w-7" aria-hidden />
    </a>
  );
}
