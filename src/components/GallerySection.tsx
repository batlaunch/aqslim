import smoothie from "@/assets/smoothie.jpg";
import salad from "@/assets/salad.jpg";
import lifestyle from "@/assets/lifestyle.jpg";
import mealPrep from "@/assets/meal-prep.jpg";

const images = [
  { src: smoothie, alt: "Fresh green smoothie" },
  { src: salad, alt: "Colorful healthy salad bowl" },
  { src: lifestyle, alt: "Active healthy lifestyle" },
  { src: mealPrep, alt: "Meal prep containers" },
];

const GallerySection = () => (
  <section id="gallery" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Gallery</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
          Healthy Living Inspiration
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <div
            key={img.alt}
            className="rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-300 animate-scale-in"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              width={800}
              height={800}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
