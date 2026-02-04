import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="flex flex-col items-start">
            <div className="flex items-baseline">
              <span className="text-3xl font-bold italic text-eco-gold">8</span>
              <span className="text-3xl font-bold italic text-eco-light">7</span>
              <span className="text-3xl font-bold italic text-eco-red">6</span>
              <span className="text-3xl font-bold italic text-primary-foreground ml-1">
                Elite
              </span>
            </div>
            <span className="text-[10px] text-eco-red tracking-wider -mt-1">
              Finish Cleaning
            </span>
          </div>
        </div>

        {/* Navigation - Center */}
        <nav className="hidden md:flex items-center gap-10">
          <button
            onClick={() => scrollToSection("services")}
            className="text-primary-foreground hover:text-eco-gold transition-colors font-medium text-lg"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("why-eco")}
            className="text-primary-foreground hover:text-eco-gold transition-colors font-medium text-lg"
          >
            Why Eco
          </button>
        </nav>

        {/* Contact Button - Right */}
        <Button
          onClick={() => scrollToSection("contact")}
          variant="destructive"
          className="rounded-full px-8 py-5 text-lg font-medium shadow-lg"
        >
          Contact
        </Button>
      </div>
    </header>
  );
};

export default Header;
