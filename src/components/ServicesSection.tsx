import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import serviceSofa from "@/assets/service-sofa.jpg";
import serviceHome from "@/assets/service-home.jpg";
import servicePressure from "@/assets/service-pressure.jpg";
import sofaIcon from "@/assets/sofa.svg";
import homeIcon from "@/assets/home.svg";
import officeIcon from "@/assets/office.svg";
import constructionIcon from "@/assets/contruction.svg";

const services = [
  {
    icon: sofaIcon,
    title: "Organic Sofa Cleaning",
    description:
      "Gentle deep cleaning using natural products to rejuvenate and refresh upholstery without harsh chemicals.",
  },
  {
    icon: homeIcon,
    title: "Eco Home Cleaning",
    description:
      "Regular and intensive green cleaning services for eco-conscious residential spaces using biodegradable products.",
  },
  {
    icon: officeIcon,
    title: "Green Office Cleaning",
    description:
      "Environmentally responsible cleaning programs suited for modern, sustainable workplaces.",
  },
  {
    icon: constructionIcon,
    title: "Post-Construction Cleanup",
    description:
      "Comprehensive cleanup using biodegradable products to prepare newly built spaces without harmful residues.",
  },
];

const serviceImages = [serviceSofa, serviceHome, servicePressure];

const ServicesSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">

      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          {/* Left Side - Title and Images */}
          <div>
            {/* Eco Badge */}
            <div className="inline-flex items-center gap-2 bg-[#E6E4C8] px-4 py-2 rounded-full mb-6">
              <Leaf className="h-4 w-4 text-eco-light" />
              <span className="text-sm font-medium text-foreground">
                100% Eco-Friendly Solutions
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
              Our Eco Services
            </h2>

            {/* Image Grid: 1 large left, 2 stacked right */}
            <div className="grid grid-cols-2 gap-4">
              <div className="row-span-2 rounded-2xl overflow-hidden my-4 shadow-[4px_4px_0_#006E01] hover:shadow-[6px_6px_0_#006E01] transition-shadow">
                <img
                  src={serviceImages[0]}
                  alt="Service 1"
                  className="w-full h-full min-h-[240px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-[4px_4px_0_#006E01] hover:shadow-[6px_6px_0_#006E01] transition-shadow">
                <img
                  src={serviceImages[1]}
                  alt="Service 2"
                  className="w-full h-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-[4px_4px_0_#006E01] hover:shadow-[6px_6px_0_#006E01] transition-shadow">
                <img
                  src={serviceImages[2]}
                  alt="Service 3"
                  className="w-full h-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Description and Services */}
          <div className="">
            <p className="text-lg text-foreground mb-6">
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
                    <img src={service.icon} alt="" className="h-10 w-10" aria-hidden />
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
