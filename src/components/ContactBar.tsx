import { Phone, Instagram, Youtube } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const ContactBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-sm border-t border-border py-3 md:hidden no-print">
      <div className="container mx-auto px-4">
        <p className="text-xs text-muted-foreground text-center mb-3">
          Open 10 AM – 10 PM | GST: 29DCIPK8223C1ZL
        </p>
        <div className="flex justify-around items-center">
          <a
            href="https://wa.me/919844929897?text=Hi%20KS%20Party%20Shop"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 text-primary hover:text-primary/80 transition-colors"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="w-6 h-6" />
            <span className="text-xs">WhatsApp</span>
          </a>
          <a
            href="tel:+919844929897"
            className="flex flex-col items-center gap-1 text-primary hover:text-primary/80 transition-colors"
            aria-label="Call"
          >
            <Phone className="w-6 h-6" />
            <span className="text-xs">Call</span>
          </a>
          <a
            href="https://instagram.com/ks_party_shop"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 text-primary hover:text-primary/80 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
            <span className="text-xs">Instagram</span>
          </a>
          <a
            href="https://youtube.com/@kspartyshop"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 text-primary hover:text-primary/80 transition-colors"
            aria-label="YouTube"
          >
            <Youtube className="w-6 h-6" />
            <span className="text-xs">YouTube</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
