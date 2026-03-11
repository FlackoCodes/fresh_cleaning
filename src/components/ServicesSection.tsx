import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, CheckCircle2 } from "lucide-react";
import serviceSofa from "@/assets/service-sofa.jpg";
import serviceHome from "@/assets/service-home.jpg";
import servicePressure from "@/assets/service-pressure.jpg";

const services = [
  {
    title: "Residential Cleaning",
    description: "Comprehensive house cleaning customized to your lifestyle.",
  },
  {
    title: "Commercial / Office Cleanings",
    description: "Professional cleaning programs for modern workplaces.",
  },
  {
    title: "Move in & Move Out Cleaning",
    description: "Detailed deep cleaning for stress-free transitions.",
  },
  {
    title: "New Construction & Post Construction",
    description: "Thorough cleanup to make newly built spaces ready for use.",
  },
  {
    title: "Airbnb Cleaning",
    description: "Fast and reliable turnover cleaning for your guests.",
  },
  {
    title: "Maintenance Cleaning",
    description: "Regular scheduled cleaning to keep your space pristine.",
  },
  {
    title: "Place of Worship",
    description: "Respectful and detailed cleaning for sacred spaces.",
  },
  {
    title: "After Event Cleanup",
    description: "Efficient cleanup to restore venues after gatherings.",
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
          <div>
            <div className="inline-flex items-center gap-2 bg-[#E6E4C8] px-4 py-2 rounded-full mb-6">
              <Leaf className="h-4 w-4 text-eco-light" />
              <span className="text-sm font-medium text-foreground">
                We do offer the option of eco-friendly products
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
              Our Services
            </h2>

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

          <div className="">
            <p className="text-lg text-foreground mb-6">
              Comprehensive cleaning solutions tailored for modern,
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

            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="group">
                  <div className="mb-3">
                    <CheckCircle2 className="h-8 w-8 text-primary" aria-hidden />
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
