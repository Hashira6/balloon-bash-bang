import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Hero = () => {
  const [qrOpen, setQrOpen] = useState(false);

  const scrollToGallery = () => {
    const gallery = document.getElementById("gallery");
    gallery?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden lg:py-20">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1920&q=80"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-colorful-confetti-falling-on-a-white-background-27859-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto space-y-4 md:space-y-6">
        <p className="font-heading text-lg md:text-xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] mb-3 animate-fade-in">
          KS Party Shop — Bengaluru's #1 Balloon & Birthday Decor Store
        </p>
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-4 md:mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] animate-fade-in leading-tight">
          Pop the Party! 🎈
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] animate-fade-in px-2 mb-6 md:mb-8">
          Helium balloons, birthday décor & Dasara dolls delivered in 2 hrs
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 md:mb-14 animate-fade-in px-4 max-w-lg mx-auto">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 shadow-party w-full sm:w-auto font-semibold"
            onClick={() =>
              window.open("https://wa.me/+919844929897?text=Hi%20KS%20Party%20Shop", "_blank")
            }
          >
            WhatsApp Now
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6 shadow-gold w-full sm:w-auto font-semibold"
            onClick={scrollToGallery}
          >
            See Magic
          </Button>
        </div>

        {/* Floating UPI QR */}
        <div className="inline-block animate-float px-4 mt-4">
          <div
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 sm:p-6 cursor-pointer hover:scale-105 transition-smooth shadow-party max-w-xs mx-auto"
            onClick={() => setQrOpen(true)}
          >
            <img
              src="https://nfc.dgtechsoln.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-11-at-2.41.48-PM.jpeg"
              alt="UPI QR Code"
              className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto rounded-lg"
            />
            <p className="mt-3 text-sm md:text-base font-semibold text-foreground">
              Tap to Pay & Book Instantly
            </p>
          </div>
        </div>
      </div>

      {/* QR Code Modal */}
      <Dialog open={qrOpen} onOpenChange={setQrOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-heading text-center">
              Pay & Book Instantly 💳
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center space-y-4">
            <img
              src="https://nfc.dgtechsoln.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-11-at-2.41.48-PM.jpeg"
              alt="UPI QR Code"
              className="w-full max-w-sm rounded-lg shadow-lg"
            />
            <p className="text-muted-foreground text-center">
              Scan with any UPI app to make instant payment
            </p>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>HDFC Bank: 50100002729752</p>
              <p>GST: 29DCIPK8223C1ZL</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Hero;
