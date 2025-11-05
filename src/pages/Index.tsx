import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import GoogleMap from "@/components/GoogleMap";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import ContactBar from "@/components/ContactBar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import DarkModeToggle from "@/components/DarkModeToggle";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <GoogleMap />
      <Reviews />
      <Footer />
      <ContactBar />
      <WhatsAppFloat />
      <DarkModeToggle />
    </div>
  );
};

export default Index;
