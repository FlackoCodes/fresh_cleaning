import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const services = ["Organic Sofa Cleaning", "Eco Home Cleaning", "Green Office Cleaning", "Post-Construction Cleanup"];
const ContactSection = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Sent!",
      description: "We'll get back to you within 24 hours."
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: ""
    });
  };
  return <section id="contact" className="py-20 bg-[#fffcf5]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - CTA */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Ready for a Greener Clean?
            </h2>
            <p className="text-lg mb-8 max-w-md text-muted-foreground">
              Join hundreds of satisfied customers who've made the switch to
              sustainable cleaning. Get your free quote today and experience the
              876 Elite difference.
            </p>
            <Button variant="secondary" size="lg" className="rounded-full px-6 bg-foreground text-primary-foreground hover:bg-foreground/90">
              <Phone className="mr-2 h-5 w-5" />
              Call (876) 555-0123
            </Button>
          </div>

          {/* Right Side - Form */}
          <div className="bg-card p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">
              Request Your Quote
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" value={formData.firstName} onChange={e => setFormData({
                ...formData,
                firstName: e.target.value
              })} className="bg-background" required />
                <Input placeholder="Last Name" value={formData.lastName} onChange={e => setFormData({
                ...formData,
                lastName: e.target.value
              })} className="bg-background" required />
              </div>

              <Input type="email" placeholder="Email Address" value={formData.email} onChange={e => setFormData({
              ...formData,
              email: e.target.value
            })} className="bg-background" required />

              <Input type="tel" placeholder="Phone Number" value={formData.phone} onChange={e => setFormData({
              ...formData,
              phone: e.target.value
            })} className="bg-background" required />

              <Select value={formData.service} onValueChange={value => setFormData({
              ...formData,
              service: value
            })}>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="Select Service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map(service => <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>)}
                </SelectContent>
              </Select>

              <Button type="submit" variant="destructive" className="w-full rounded-full py-6 text-lg font-semibold">
                Send Quote Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;