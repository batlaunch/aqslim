import { Leaf, Users, Calendar } from "lucide-react";

const highlights = [
  {
    icon: Leaf,
    title: "Natural & Holistic",
    desc: "All-natural methods including auricular therapy and naturopathic care.",
  },
  {
    icon: Users,
    title: "Personalized Programs",
    desc: "Every plan is tailored to your body, lifestyle, and goals.",
  },
  {
    icon: Calendar,
    title: "Established 2007",
    desc: "Over 17 years of helping clients achieve lasting wellness.",
  },
];

const Highlights = () => (
  <section className="py-16 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        {highlights.map((h, i) => (
          <div
            key={h.title}
            className="flex flex-col items-center text-center p-8 bg-card rounded-2xl shadow-card animate-fade-up"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
              <h.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{h.title}</h3>
            <p className="text-muted-foreground text-sm">{h.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Highlights;
