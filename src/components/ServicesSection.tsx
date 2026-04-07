import { Ear, Stethoscope, Scale, Apple, UtensilsCrossed, Droplets, Flame, HeartPulse } from "lucide-react";

const services = [
  { icon: Ear, title: "Auricular Therapy", desc: "Stimulating specific points on the ear to support weight loss and overall wellness.", verified: true },
  { icon: Stethoscope, title: "Naturopathic Consultations", desc: "Comprehensive natural health assessments to identify your unique wellness path.", verified: true },
  { icon: Scale, title: "Personalized Weight Loss Programs", desc: "Custom plans designed for your body, metabolism, and lifestyle goals.", verified: true },
  { icon: Apple, title: "Nutritional Guidance", desc: "Expert advice on balanced eating habits for sustainable, healthy results.", verified: true },
  { icon: UtensilsCrossed, title: "Meal Planning Programs", desc: "Structured meal plans that fit your preferences and nutritional needs.", verified: false },
  { icon: Droplets, title: "Detox & Cleanse Programs", desc: "Gentle, natural detox protocols to reset and rejuvenate your body.", verified: false },
  { icon: Flame, title: "Metabolism Support Coaching", desc: "Strategies and support to optimize your metabolic function naturally.", verified: false },
  { icon: HeartPulse, title: "Lifestyle Transformation Coaching", desc: "Holistic coaching to help you build lasting healthy habits.", verified: false },
];

const ServicesSection = () => (
  <section id="services" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
          Comprehensive Wellness Solutions
        </h2>
        <p className="text-muted-foreground">
          From personalized weight loss programs to naturopathic care, we offer a full range of services to support your health journey.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow duration-300 animate-fade-up"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
              <s.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-base font-heading font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            {!s.verified && (
              <span className="inline-block mt-3 text-xs text-accent font-medium bg-accent/10 px-2 py-0.5 rounded">
                [EXAMPLE SERVICE – EDIT NEEDED]
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
