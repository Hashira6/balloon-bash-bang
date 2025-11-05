import { Phone, Mail, MapPin, Instagram, Youtube } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="bg-card border-t border-border pt-16 pb-24 md:pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🎈</span>
              <span className="font-heading text-2xl bg-gradient-party bg-clip-text text-transparent">
                KS Party Shop
              </span>
            </div>
            <p className="text-muted-foreground mb-4">
              Bengaluru's favorite destination for helium balloons, birthday decorations, and party supplies since 2015.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/919844929897"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/ks_party_shop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://youtube.com/@kspartyshop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-xl mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="tel:+919844929897"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+91 98449 29897</span>
              </a>
              <a
                href="mailto:info@kspartyshop.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>info@kspartyshop.com</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>No. 4, 77/2 BDA Road, Arekere,<br />Bengaluru - 560076<br />Opposite Bharat Petrol Bunk 🚩</span>
              </div>
            </div>
          </div>

          {/* Banking Info */}
          <div>
            <h3 className="font-heading text-xl mb-4">Payment Details</h3>
            <div className="space-y-2 text-muted-foreground">
              <p className="font-semibold text-foreground">HDFC Bank</p>
              <p>A/c: 50100002729752</p>
              <p className="mt-4 font-semibold text-foreground">GST</p>
              <p>29DCIPK8223C1ZL</p>
              <p className="mt-4 text-sm">
                <span className="font-semibold text-foreground">Hours:</span><br />
                Monday - Sunday<br />
                10:00 AM - 10:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p className="mb-2">
            © {new Date().getFullYear()} KS Party Shop. All rights reserved.
          </p>
          <p>
            Powered by{" "}
            <a
              href="https://lovable.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Lovable.dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
