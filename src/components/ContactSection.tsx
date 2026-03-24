import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const serviceCategories = ["Residential", "Commercial", "Event"];

const WEB3FORMS_ACCESS_KEY = "cd56ea0f-ca49-4745-9c1b-ac88e01474ab";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    propertyType: "",
    details: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    let messageBody = `Name: ${formData.firstName} ${formData.lastName}\n`;
    messageBody += `Phone: ${formData.phone}\n`;
    messageBody += `Service Category: ${formData.service}\n`;

    if (formData.service === "Residential" && formData.propertyType) {
      messageBody += `Property Type: ${formData.propertyType}\n`;
    }

    if (formData.details) {
      messageBody += `\nAdditional Details:\n${formData.details}\n`;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          subject: `New Quote Request from ${formData.firstName} ${formData.lastName} - ${formData.service}`,
          message: messageBody,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Quote Request Sent Successfully!",
          description: "We have received your details and will get back to you shortly."
        });

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          propertyType: "",
          details: ""
        });
      } else {
        throw new Error(result.message || "Failed to send the request");
      }
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was a problem sending your request. Please try again later.",
        variant: "destructive"
      });
      console.error("Web3Forms error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#fffcf5]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Ready for a Spotless Clean?
            </h2>
            <p className="text-lg mb-8 max-w-md text-muted-foreground">
              Join hundreds of satisfied customers who've made the switch to
              exceptional cleaning. Get your free quote today and experience the
              876 Elite difference.
            </p>
            <Button variant="secondary" size="lg" className="rounded-full px-6 bg-foreground text-primary-foreground hover:bg-foreground/90">
              <Phone className="mr-2 h-5 w-5" />
              Call 647-478-0831
            </Button>
          </div>


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
                service: value,
                propertyType: ""
              })}>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="Select Service Category" />
                </SelectTrigger>
                <SelectContent>
                  {serviceCategories.map(service => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {formData.service === "Residential" && (
                <div className="space-y-3 bg-background p-4 rounded-md border border-input">
                  <Label className="text-sm font-semibold text-foreground">Property Type</Label>
                  <RadioGroup
                    value={formData.propertyType}
                    onValueChange={(value) => setFormData({ ...formData, propertyType: value })}
                    className="flex flex-col space-y-1"
                    required
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Condo/Apartment" id="r1" />
                      <Label htmlFor="r1" className="font-normal cursor-pointer">Condo/Apartment</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="House" id="r2" />
                      <Label htmlFor="r2" className="font-normal cursor-pointer">House</Label>
                    </div>
                  </RadioGroup>
                </div>
              )}

              <Textarea
                placeholder="Details (e.g., Please describe the specific service you require)"
                value={formData.details}
                onChange={e => setFormData({ ...formData, details: e.target.value })}
                className="bg-background min-h-[100px]"
                required
              />

              <Button
                type="submit"
                variant="destructive"
                className="w-full rounded-full py-6 text-lg font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending Request...
                  </>
                ) : (
                  "Send Quote Request"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;