import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";

const WHATSAPP_NUMBER = "6287800092728"; // ganti dengan nomor WA sekolah
const DEFAULT_MESSAGE =
    "Halo Sekolah Haltev, saya ingin bertanya informasi lebih lanjut.";

export default function WhatsAppButton() {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        DEFAULT_MESSAGE
    )}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg transition"
            aria-label="Hubungi via WhatsApp"
        >
            <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6" />
            <span className="hidden md:inline font-medium">
                Hubungi Kami
            </span>
        </a>
    );
}
