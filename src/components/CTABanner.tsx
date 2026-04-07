import { ArrowRight } from "lucide-react";

const CTABanner = () => (
  <section className="py-16 bg-gradient-primary">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
        Take Control of Your Health
      </h2>
      <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
        Join hundreds of clients who have transformed their lives with AQSlim's personalized wellness programs.
      </p>
      <a
        href="#contact"
        className="inline-flex items-center gap-2 bg-card text-primary px-8 py-4 rounded-full font-heading font-semibold hover:bg-card/90 transition-colors shadow-elevated"
      >
        Book Your Free Consultation
        <ArrowRight className="w-5 h-5" />
      </a>
    </div>
  </section>
);

export default CTABanner;
