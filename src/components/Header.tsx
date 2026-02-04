import { Button } from "@/components/ui/button";
import logoImg from "@/assets/logo.png";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-6">
      <div
        className="container px-3 py-3 rounded-full mx-auto flex items-center justify-between"
        style={{
          background:
            "linear-gradient(to right, rgba(0, 110, 1, 0.2), rgba(255, 195, 0, 0.2), rgba(255, 50, 49, 0.2))",
        }}
      >
        {/* Logo */}
        <div className="flex items-center">
          <div className="flex flex-col items-start">
            <img src={logoImg} alt="Eco Cleaning" className="w-f h-10" />
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
