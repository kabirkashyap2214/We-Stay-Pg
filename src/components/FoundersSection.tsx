import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const FoundersSection = () => {
  const founders = [
    {
      name: "Mrigen Jyoti Kashyap",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      quote: "We want to make sure that anyone coming from outside the city never feels far from home."
  },
    {
      name: "Subhrajyoti Duarah",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
      quote: "We are committed to making accommodation comfortable, fun, and secure."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Founders</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The visionaries behind WeStay PG who started this journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={founder.image} 
                  alt={founder.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <CardContent className="p-6 relative">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/20" />
                <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
                <p className="text-muted-foreground italic leading-relaxed">
                  "{founder.quote}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
