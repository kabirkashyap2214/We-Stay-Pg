import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Handshake } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const PartnershipSection = () => {
  const [businessName, setBusinessName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [partnershipType, setPartnershipType] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { error } = await supabase
      .from('partnership_requests')
      .insert([{
        business_name: businessName,
        contact_name: contactName,
        email,
        phone,
        partnership_type: partnershipType,
        message
      }]);

    if (error) {
      toast.error("Failed to submit partnership request");
      console.error('Error submitting partnership request:', error);
    } else {
      toast.success("Partnership request submitted successfully! We'll get back to you soon.");
      setBusinessName("");
      setContactName("");
      setEmail("");
      setPhone("");
      setPartnershipType("");
      setMessage("");
    }
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Handshake className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Partner With Us
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join us in creating better living experiences. We're looking for businesses and organizations that share our vision.
            </p>
          </div>

          <Card className="bg-gradient-card border-border/50 shadow-elegant">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Business Name *</label>
                    <Input
                      placeholder="Your Business Name"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Contact Name *</label>
                    <Input
                      placeholder="Your Full Name"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email *</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone *</label>
                    <Input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Partnership Type *</label>
                  <Select value={partnershipType} onValueChange={setPartnershipType} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select partnership type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="food-services">Affiliate Partner or Aggregator</SelectItem>
                      <SelectItem value="food-services">Food Services</SelectItem>
                      <SelectItem value="laundry">Laundry Services</SelectItem>
                      <SelectItem value="maintenance">Maintenance & Repair</SelectItem>
                      <SelectItem value="technology">Technology & Internet</SelectItem>
                      <SelectItem value="security">Security Services</SelectItem>
                      <SelectItem value="education">Educational Institutions</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Partnership Proposal *</label>
                  <Textarea
                    placeholder="Tell us about your business and how you'd like to partner with WeStay PG..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={6}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                  size="lg"
                >
                  {isSubmitting ? "Submitting..." : "Submit Partnership Request"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
