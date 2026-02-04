import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-primary-foreground">Elite Cleaning with</span>
            <br />
            <span className="text-primary-foreground">a </span>
            <span className="text-gradient-gold">Flawless</span>
            <span className="text-primary-foreground"> Finish</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg">
            Experience the elite finish with our non-toxic, sustainable cleaning
            solutions. Protecting your health and our planet, one clean space at
            a time.
          </p>

          <Button
            onClick={scrollToContact}
            variant="destructive"
            size="lg"
            className="rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Request Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
