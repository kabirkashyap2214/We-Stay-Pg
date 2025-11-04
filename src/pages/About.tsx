import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Award, Users } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";
import FoundersSection from "@/components/FoundersSection";
import PartnershipSection from "@/components/PartnershipSection";

const About = () => {
  const values = [
    { icon: Heart, title: "Care & Comfort", description: "We treat every resident like family, ensuring they feel at home" },
    { icon: Award, title: "Quality Standards", description: "Maintaining the highest standards in cleanliness and services" },
    { icon: Users, title: "Community Focus", description: "Building a supportive community where everyone thrives" },
    { icon: Target, title: "Student Success", description: "Creating an environment that promotes academic and personal growth" },
  ];

  return (
    <div className="min-h-screen py-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About WeStay PG
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Established with a vision to provide safe, comfortable, and affordable accommodation for students and working professionals
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              WeStay PG was founded in 2015 with a simple mission: to create a home away from home for students and young professionals. What started as a single property with 20 rooms has now grown into a trusted name in the paying guest accommodation sector.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Over the years, we've hosted thousands of residents from different parts of the country, each bringing their unique stories and dreams. We take pride in being part of their journey, providing not just a place to stay, but a supportive community that helps them succeed.
            </p>
          </div>
          
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to provide secure, comfortable, and well-maintained accommodation that supports the academic and professional goals of our residents. We believe in creating an environment where students can focus on their studies and careers without worrying about their living arrangements.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We continuously invest in improving our facilities and services, ensuring that our residents have access to modern amenities while maintaining affordable pricing. Your success is our success, and we're committed to supporting you every step of the way.
            </p>
          </div>
        </div>

        {/* Founders Section */}
        <FoundersSection />

        {/* Team Section */}
        <div className="mb-16 animate-fade-in">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our dedicated team works tirelessly to ensure you have the best living experience
            </p>
          </div>
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-elegant">
            <img 
              src={teamPhoto} 
              alt="WeStay PG Team" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-card"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-card">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-hero text-primary-foreground rounded-2xl p-12 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">9+</div>
              <div className="text-primary-foreground/80">Years of Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">Happy Residents</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-primary-foreground/80">Available Rooms</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8/5</div>
              <div className="text-primary-foreground/80">Average Rating</div>
            </div>
          </div>
        </div>

        {/* Partnership Section */}
        <PartnershipSection />
      </div>
    </div>
  );
};

export default About;
