import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <Leaf className="h-8 w-8 text-eco-gold" />
            <span className="ml-2 text-2xl font-bold text-primary-foreground">
              876<span className="text-eco-gold">Elite</span>
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("services")}
            className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("why-eco")}
            className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium"
          >
            Why Eco
          </button>
          <Button
            onClick={() => scrollToSection("contact")}
            variant="destructive"
            className="rounded-full px-6"
          >
            Contact
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="md:hidden text-primary-foreground"
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </Button>
      </div>
    </header>
  );
};

export default Header;
