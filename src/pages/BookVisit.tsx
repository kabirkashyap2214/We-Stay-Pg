import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const BookVisit = () => {
  const [visitData, setVisitData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const handleVisitBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const { error } = await supabase
      .from("visit_requests")
      .insert({
        full_name: visitData.fullName,
        email: visitData.email,
        phone: visitData.phone,
        preferred_date: visitData.preferredDate,
        preferred_time: visitData.preferredTime,
        message: visitData.message || null,
      });

    if (error) {
      toast.error("Failed to submit visit request. Please try again.");
      console.error(error);
      return;
    }
    
    toast.success("Visit request submitted! We'll contact you soon to confirm your visit.");
    
    // Reset form
    setVisitData({
      fullName: "",
      email: "",
      phone: "",
      preferredDate: "",
      preferredTime: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen py-12 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Schedule a Visit
          </h1>
          <p className="text-xl text-muted-foreground">
            Book a tour to see our hostel and facilities
          </p>
        </div>

        <Card className="shadow-elegant border-border/50 animate-fade-in">
          <CardContent className="p-8">
            <form onSubmit={handleVisitBooking} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={visitData.fullName}
                    onChange={(e) =>
                      setVisitData({ ...visitData, fullName: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={visitData.email}
                    onChange={(e) =>
                      setVisitData({ ...visitData, email: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={visitData.phone}
                  onChange={(e) =>
                    setVisitData({ ...visitData, phone: e.target.value })
                  }
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="preferredDate" className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Preferred Date *
                  </Label>
                  <Input
                    id="preferredDate"
                    type="date"
                    value={visitData.preferredDate}
                    onChange={(e) =>
                      setVisitData({
                        ...visitData,
                        preferredDate: e.target.value,
                      })
                    }
                    required
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferredTime" className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Preferred Time *
                  </Label>
                  <Input
                    id="preferredTime"
                    type="time"
                    value={visitData.preferredTime}
                    onChange={(e) =>
                      setVisitData({
                        ...visitData,
                        preferredTime: e.target.value,
                      })
                    }
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Message (Optional)
                </Label>
                <Textarea
                  id="message"
                  placeholder="Any specific requirements or questions?"
                  value={visitData.message}
                  onChange={(e) =>
                    setVisitData({ ...visitData, message: e.target.value })
                  }
                  rows={4}
                />
              </div>

              <Button type="submit" size="lg" className="w-full" variant="hero">
                Request Call Back
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BookVisit;
