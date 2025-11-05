import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const reviews = [
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Absolutely loved the unicorn theme decoration! The team arrived on time and set up everything beautifully. My daughter's 5th birthday was magical thanks to KS Party Shop!",
  },
  {
    name: "Rajesh Kumar",
    rating: 5,
    text: "Best balloon quality in Bengaluru! Got 100 helium balloons for our office party - all stayed inflated for 3 days. Great service and reasonable pricing.",
  },
  {
    name: "Meera Reddy",
    rating: 4,
    text: "Quick delivery within 2 hours as promised. The Dasara dolls collection is amazing. Only wish they had more superhero theme options, but overall very satisfied!",
  },
  {
    name: "Anil Patel",
    rating: 5,
    text: "Professional team with creative ideas. They helped me plan my wife's surprise birthday and executed it perfectly. The return gifts were a big hit with kids!",
  },
  {
    name: "Sowmya Iyer",
    rating: 4,
    text: "Affordable pricing and good variety of decorations. The owner is very helpful and accommodating. Recommended for anyone looking for party supplies in South Bangalore.",
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl mb-4">
            What Our Customers Say ❤️
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i < 4 ? "fill-secondary text-secondary" : "fill-muted text-muted"
                  }`}
                />
              ))}
            </div>
            <span className="text-2xl font-bold">4.3</span>
            <span className="text-muted-foreground">(26 reviews)</span>
          </div>
          <p className="text-primary font-semibold text-lg">🎉 1000+ Happy Parents</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < review.rating
                              ? "fill-secondary text-secondary"
                              : "fill-muted text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-foreground mb-6 text-lg leading-relaxed">
                      "{review.text}"
                    </p>
                    <p className="font-semibold text-primary">— {review.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
