import { MessageSquare, ClipboardList, HeartHandshake, Trophy } from "lucide-react";

const steps = [
  { icon: MessageSquare, step: "Step 1", title: "Consultation", desc: "We start with a thorough assessment of your health history, goals, and lifestyle." },
  { icon: ClipboardList, step: "Step 2", title: "Personalized Plan", desc: "A custom wellness and nutrition program is crafted just for you." },
  { icon: HeartHandshake, step: "Step 3", title: "Ongoing Support", desc: "Regular check-ins, adjustments, and encouragement to keep you on track." },
  { icon: Trophy, step: "Step 4", title: "Results & Maintenance", desc: "Celebrate your progress and learn strategies for long-term maintenance." },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-20">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">How It Works</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
          Your Journey to Wellness
        </h2>
        <p className="text-muted-foreground">
          <em className="text-foreground/60">[EXAMPLE PROCESS – EDIT NEEDED]</em> Our simple four-step process makes it easy to get started.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <div key={s.title} className="text-center animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="relative mx-auto w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center mb-5 shadow-soft">
              <s.icon className="w-9 h-9 text-primary-foreground" />
              <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center shadow">
                {i + 1}
              </span>
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
