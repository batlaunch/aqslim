import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How fast will I see results?",
    a: "Results vary depending on your starting point and commitment to the program. Many clients notice positive changes within the first few weeks. [EXAMPLE – EDIT THIS]",
  },
  {
    q: "Are the programs customized?",
    a: "Absolutely! Every program at AQSlim is tailored to your individual needs, health history, and personal goals. [EXAMPLE – EDIT THIS]",
  },
  {
    q: "Do I need to follow a strict diet?",
    a: "Our approach focuses on balanced, sustainable nutrition rather than restrictive dieting. We create plans that fit your lifestyle and preferences. [EXAMPLE – EDIT THIS]",
  },
  {
    q: "Is this safe?",
    a: "Yes. AQSlim uses all-natural, holistic methods. Our naturopathic consultations ensure every plan is safe and appropriate for your health profile. [EXAMPLE – EDIT THIS]",
  },
  {
    q: "What is auricular therapy?",
    a: "Auricular therapy involves stimulating specific points on the ear to support weight management, reduce cravings, and promote overall balance. [EXAMPLE – EDIT THIS]",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-20 bg-secondary">
    <div className="container mx-auto px-4 max-w-3xl">
      <div className="text-center mb-14">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">FAQ</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
          Frequently Asked Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="bg-card rounded-xl px-6 border-none shadow-card"
          >
            <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
