import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logoImg from "@/assets/logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 transition-all duration-300">
      <div
        className={`container px-3 py-3 rounded-full mx-auto flex items-center justify-between transition-all duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
        style={{
          background: scrolled
            ? "hsl(var(--primary))"
            : "linear-gradient(to right, rgba(0, 110, 1, 0.2), rgba(255, 195, 0, 0.2), rgba(255, 50, 49, 0.2))",
        }}
      >
        {/* Logo */}
        <div className="flex items-center">
          <div className="flex flex-col items-start">
            <img src={logoImg} alt="Eco Cleaning" className="w-f h-10" />
          </div>
        </div>

        {/* Navigation - Center (Desktop) */}
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

        {/* Contact Button - Right (Desktop) */}
        <Button
          onClick={() => scrollToSection("contact")}
          variant="destructive"
          className="hidden md:flex rounded-full px-8 py-5 text-lg font-medium shadow-lg"
        >
          Contact
        </Button>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-eco-gold p-2 bg-red-900/10 backdrop-blur-sm"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-primary text-primary-foreground border-primary"
          >
            {/* Logo in mobile menu */}
            <div className="flex items-center mb-8 mt-4">
              <img src={logoImg} alt="Eco Cleaning" className="h-10" />
            </div>

            {/* Mobile Navigation */}
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("services")}
                className="w-full text-left py-3 px-4 text-lg font-medium hover:bg-primary-foreground/10 rounded-lg transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("why-eco")}
                className="w-full text-left py-3 px-4 text-lg font-medium hover:bg-primary-foreground/10 rounded-lg transition-colors"
              >
                Why Eco
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="destructive"
                className="w-full mt-4 rounded-full py-5 text-lg font-medium shadow-lg"
              >
                Contact
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
