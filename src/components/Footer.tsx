import { Leaf } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Leaf className="w-6 h-6 text-primary" />
          <span className="font-heading font-bold text-lg text-primary-foreground">AQSlim</span>
        </div>
        <div className="flex gap-6 text-sm">
          <a href="#about" className="text-primary-foreground/60 hover:text-primary transition-colors">About</a>
          <a href="#services" className="text-primary-foreground/60 hover:text-primary transition-colors">Services</a>
          <a href="#contact" className="text-primary-foreground/60 hover:text-primary transition-colors">Contact</a>
          <a href="#faq" className="text-primary-foreground/60 hover:text-primary transition-colors">FAQ</a>
        </div>
        <p className="text-primary-foreground/40 text-sm">
          © {new Date().getFullYear()} AQSlim. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
