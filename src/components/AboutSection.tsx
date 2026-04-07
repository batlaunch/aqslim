import aboutBg from "@/assets/about-bg.jpg";

const AboutSection = () => (
  <section id="about" className="py-20">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl overflow-hidden shadow-elevated">
          <img src={aboutBg} alt="AQSlim wellness space" className="w-full h-full object-cover" width={1280} height={720} loading="lazy" />
        </div>
        <div>
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">About AQSlim</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
            Your Partner in Holistic Wellness
          </h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            AQSlim specializes in holistic wellness and weight loss using natural methods, including auricular therapy and naturopathy. Located in El Cajon, California, we've been helping clients transform their health since 2007.
          </p>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            <em className="text-foreground/70">[EXAMPLE CONTENT – EDIT NEEDED]</em> At AQSlim, we believe true health starts from within. Our mission is to help clients achieve sustainable weight loss and long-term wellness through personalized care, education, and natural solutions.
          </p>
          <div className="flex gap-8">
            <div>
              <div className="text-3xl font-heading font-bold text-primary">17+</div>
              <div className="text-sm text-muted-foreground">Years of Experience</div>
            </div>
            <div>
              <div className="text-3xl font-heading font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Natural Methods</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
