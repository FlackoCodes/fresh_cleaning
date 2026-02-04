import { Button } from "@/components/ui/button";
import { Sofa, Home, Building2, HardHat, ArrowRight, Leaf } from "lucide-react";
import serviceSofa from "@/assets/service-sofa.jpg";
import serviceHome from "@/assets/service-home.jpg";
import servicePressure from "@/assets/service-pressure.jpg";
import serviceIndustrial from "@/assets/service-industrial.jpg";

const services = [
  {
    icon: Sofa,
    title: "Organic Sofa Cleaning",
    description:
      "Gentle deep cleaning using natural products to rejuvenate and refresh upholstery without harsh chemicals.",
  },
  {
    icon: Home,
    title: "Eco Home Cleaning",
    description:
      "Regular and intensive green cleaning services for eco-conscious residential spaces using biodegradable products.",
  },
  {
    icon: Building2,
    title: "Green Office Cleaning",
    description:
      "Environmentally responsible cleaning programs suited for modern, sustainable workplaces.",
  },
  {
    icon: HardHat,
    title: "Post-Construction Cleanup",
    description:
      "Comprehensive cleanup using biodegradable products to prepare newly built spaces without harmful residues.",
  },
];

const serviceImages = [serviceSofa, serviceHome, servicePressure, serviceIndustrial];

const ServicesSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Title and Images */}
          <div>
            {/* Eco Badge */}
            <div className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full mb-6">
              <Leaf className="h-4 w-4 text-eco-light" />
              <span className="text-sm font-medium text-foreground">
                100% Eco-Friendly Solutions
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Our Eco Services
            </h2>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              {serviceImages.map((img, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <img
                    src={img}
                    alt={`Service ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Description and Services */}
          <div className="lg:pt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Comprehensive green cleaning solutions tailored for modern,
              environmentally-conscious spaces
            </p>

            <Button
              onClick={scrollToContact}
              variant="outline"
              className="mb-10 rounded-full px-6 border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground group"
            >
              Request Quote
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Service Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="group">
                  <div className="mb-3">
                    <service.icon className="h-10 w-10 text-eco-light" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
