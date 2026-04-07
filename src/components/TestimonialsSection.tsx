import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "I feel healthier and more energized than ever! The team at AQSlim truly cares about your well-being.",
    name: "Sarah M.",
    label: "[EXAMPLE TESTIMONIAL – EDIT NEEDED]",
  },
  {
    text: "The program was easy to follow and actually worked. I've recommended AQSlim to all my friends.",
    name: "Carlos R.",
    label: "[EXAMPLE TESTIMONIAL – EDIT NEEDED]",
  },
  {
    text: "After years of trying different diets, AQSlim's holistic approach finally helped me reach my goals.",
    name: "Jennifer L.",
    label: "[EXAMPLE TESTIMONIAL – EDIT NEEDED]",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
          What Our Clients Say
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className="bg-card rounded-2xl p-8 shadow-card animate-fade-up relative"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground/80 mb-6 leading-relaxed italic">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
                {t.name.charAt(0)}
              </div>
              <div>
                <div className="font-heading font-semibold text-sm text-foreground">{t.name}</div>
                <span className="text-xs text-accent">{t.label}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
