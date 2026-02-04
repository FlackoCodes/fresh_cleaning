import { Wind, Globe, Heart } from "lucide-react";

const benefits = [
  {
    icon: Wind,
    iconBg: "bg-eco-gold",
    title: "Healthier Indoor Air",
    description:
      "Non-toxic formulas improve air quality and reduce allergens for a safer environment.",
  },
  {
    icon: Globe,
    iconBg: "bg-eco-red",
    title: "Environmental Protection",
    description:
      "Biodegradable products that don't harm waterways or contribute to pollution.",
  },
  {
    icon: Heart,
    iconBg: "bg-eco-light",
    title: "Safe for Families & Pets",
    description:
      "Gentle formulations that are safe around children and animals.",
  },
];

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "500+", label: "Happy Clients" },
  { value: "24/7", label: "Support" },
  { value: "100%", label: "Satisfaction" },
];

const WhyChooseSection = () => {
  return (
    <section id="why-eco" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Benefits */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
              Why Choose Eco-Friendly Cleaning?
            </h2>

            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 ${benefit.iconBg} rounded-full flex items-center justify-center`}
                  >
                    <benefit.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl border border-border text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl md:text-5xl font-bold text-eco-light mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
