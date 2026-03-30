import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import logoImg from "@/assets/updated_logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 50);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300">
      <div
        className={`container px-6 py-4 rounded-full mx-auto flex items-center justify-between transition-all duration-300 ${scrolled ? "shadow-lg" : ""
          }`}
        style={{
          background: scrolled
            ? "linear-gradient(to right, rgba(0, 110, 1, 0.85), rgba(0, 110, 1, 0.7))"
            : "rgba(255, 255, 255, 0.92)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: scrolled ? "1px solid rgba(0,110,1,0.3)" : "1px solid rgba(255, 255, 255, 0.6)",
          boxShadow: scrolled ? "0 4px 20px rgba(0,110,1,0.2)" : "0 4px 20px rgba(0,0,0,0.08)"
        }}
      >
        {/* Logo */}
        <div className="flex items-center">
          <div className="flex flex-col items-start">
            <img src={logoImg} alt="Eco Cleaning" className="w-32 h-14" />
          </div>
        </div>

        {/* Navigation - Center (Desktop) */}
        <nav className="hidden md:flex items-center gap-10">
          <button
            onClick={() => scrollToSection("services")}
            className="hover:opacity-75 transition-all font-semibold text-xl"
            style={{ color: scrolled ? "white" : "#006E01" }}
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("why-eco")}
            className="hover:opacity-75 transition-all font-semibold text-xl"
            style={{ color: scrolled ? "white" : "#006E01" }}
          >
            Why Eco
          </button>
        </nav>

        {/* Contact Button - Right (Desktop) */}
        <Button
          onClick={() => scrollToSection("contact")}
          variant="destructive"
          className="hidden md:flex rounded-full px-10 py-6 text-xl font-semibold shadow-lg"
        >
          Contact
        </Button>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="p-2"
              style={{ color: scrolled ? "white" : "#006E01" }}>
              <Menu className="h-7 w-7" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-primary text-primary-foreground border-primary">
            <div className="flex items-center mb-8 mt-4">
              <img src={logoImg} alt="Eco Cleaning" className="h-12" />
            </div>
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
