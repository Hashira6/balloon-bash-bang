const GoogleMap = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl md:text-5xl text-center mb-4 animate-fade-in">
          Visit Our Store 📍
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          No. 4, 77/2 BDA Road, Arekere, Bengaluru • Opposite Bharat Petrol Bunk 🚩
        </p>

        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-party animate-fade-in">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.5166803287847!2d77.60284731482172!3d12.886299990892708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b1234567890%3A0x1234567890abcdef!2sArekere%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="KS Party Shop Location"
          ></iframe>
        </div>

        <div className="text-center mt-8 space-y-2">
          <p className="text-foreground font-semibold">Open Daily: 10 AM – 10 PM</p>
          <p className="text-muted-foreground">Call us: +91 98449 29897</p>
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;
