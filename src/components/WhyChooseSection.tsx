
import healthIcon from "@/assets/health.svg";
import environmentIcon from "@/assets/Environment.svg";
import familyIcon from "@/assets/family.svg";
const benefits = [
  {
    icon: healthIcon,
    iconBg: "bg-eco-gold",
    title: "Healthier Indoor Air",
    description:
      "Non-toxic formulas improve air quality and reduce allergens for a safer environment.",
  },
  {
    icon: environmentIcon,
    iconBg: "bg-eco-red",
    title: "Environmental Protection",
    description:
      "Biodegradable products that don't harm waterways or contribute to pollution.",
  },
  {
    icon: familyIcon,
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
    <section id="why-eco" className="py-20 bg-[#EAF5E2]">
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
                  
                    <img src={benefit.icon} alt="" className="h-10 w-10 object-contain" aria-hidden />
                 
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
                className="bg-card p-6 rounded-2xl shadow-[4px_4px_0_#006E01] text-center hover:shadow-lg transition-shadow"
              >
                <h5 className="text-4xl md:text-5xl font-bold text-eco-light mb-2">
                  {stat.value}
                </h5>
                <div className="text-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
