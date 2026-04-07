import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="Healthy food spread" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
    </div>

    <div className="relative container mx-auto px-4 py-32">
      <div className="max-w-2xl">
        <span className="inline-block bg-primary/20 text-primary-foreground backdrop-blur-sm border border-primary/30 px-4 py-1.5 rounded-full text-sm font-medium mb-6 animate-fade-up">
          Est. 2007 · El Cajon, CA
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6 animate-fade-up text-primary-foreground" style={{ animationDelay: "0.1s" }}>
          Transform Your Health{" "}
          <span className="text-gradient-primary bg-gradient-to-r from-green-300 to-emerald-200 bg-clip-text text-transparent">
            Naturally
          </span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Personalized weight loss and nutrition programs designed for real results. Holistic wellness through natural methods.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:opacity-90 transition-opacity shadow-soft"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:bg-primary-foreground/10 transition-colors backdrop-blur-sm"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
