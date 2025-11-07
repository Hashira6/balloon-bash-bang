const galleryImages = [
  "/Products_images/KS_PartyShop_1.png",
  "/Products_images/KS_PartyShop_2.png",
  "/Products_images/KS_PartyShop_3.png",
  "/Products_images/KS_PartyShop_4.png",
  "/Products_images/KS_PartyShop_5.png",
  "/Products_images/KS_PartyShop_6.png",
  "/Products_images/KS_PartyShop_7.png",
  "/Products_images/KS_PartyShop_8.png",
  // "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
  // "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80",
  // "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80",
  // "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  // "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=800&q=80",
  // "https://images.unsplash.com/photo-1530047625168-4b29bfbbe1fc?w=800&q=80",
  // "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
  // "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
  // "https://images.unsplash.com/photo-1464347744102-11db6282f854?w=800&q=80",
  // "https://images.unsplash.com/photo-1481162854517-d9e353af153d?w=800&q=80",
  // "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80",
  // "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&q=80",
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl md:text-5xl text-center mb-4 animate-fade-in">
          Real Parties, Real Smiles 📸
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          See the magic we've created for 1000+ happy families
        </p>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid animate-fade-in hover:scale-105 transition-smooth cursor-pointer"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img
                src={image}
                alt={`Party decoration ${index + 1}`}
                className="w-full rounded-lg shadow-md hover:shadow-party"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-muted-foreground">
          Follow us on Instagram{" "}
          <a
            href="https://instagram.com/ks_party_shop"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-semibold"
          >
            @ks_party_shop
          </a>{" "}
          for daily party inspiration
        </p>
      </div>
    </section>
  );
};

export default Gallery;
