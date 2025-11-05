import { PartyPopper, Cake, Gift } from "lucide-react";

const services = [
  {
    icon: PartyPopper,
    title: "Helium Balloons",
    front: "50+ colors, 2-hour fill",
    back: "From classic latex to jumbo foil balloons. Choose your colors, we fill them fresh with premium helium. Delivered to your doorstep in 2 hours!",
  },
  {
    icon: Cake,
    title: "Birthday Decor",
    front: "15 themes, setup included",
    back: "Unicorn, superhero, princess themes & more! Full decoration with balloons, banners, and props. Our team sets it up perfectly at your venue.",
  },
  {
    icon: Gift,
    title: "Return Gifts",
    front: "₹49–₹299 toys & Dasara dolls",
    back: "Age-appropriate toys, stationery sets, and traditional Dasara dolls. Bulk pricing available for large parties. Wrapped and ready to go!",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl md:text-5xl text-center mb-4 animate-fade-in">
          Our Magic Services ✨
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Everything you need for an unforgettable celebration
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="flip-card h-80 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flip-card-inner relative w-full h-full">
                {/* Front */}
                <div className="flip-card-front absolute w-full h-full bg-card rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center text-center border border-border">
                  <service.icon className="w-16 h-16 text-primary mb-4" />
                  <h3 className="font-heading text-2xl mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.front}</p>
                  <p className="text-xs text-muted-foreground mt-4 italic">Hover to learn more</p>
                </div>

                {/* Back */}
                <div className="flip-card-back absolute w-full h-full bg-gradient-party rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center text-center">
                  <service.icon className="w-12 h-12 text-white mb-4" />
                  <h3 className="font-heading text-xl text-white mb-3">{service.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{service.back}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
