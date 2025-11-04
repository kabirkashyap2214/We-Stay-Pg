import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import boysRoomImage from "@/assets/boys-room.jpg";
import girlsRoomImage from "@/assets/girls-room.jpg";

const Accommodations = () => {
  const boysPGs = [
    { id: "boys-pg-1", name: "WeStay Boys PG - Tigris House", location: "138, Old Gupta Colony, Vijay Nagar" },
    { id: "boys-pg-2", name: "WeStay Boys PG - Yamuna House", location: "200, Old Gupta Colony, Vijay Nagar" },
    { id: "boys-pg-3", name: "WeStay Boys PG - Bramhaputra House", location: "G9, Single Storey, Vijay Nagar" },
    { id: "boys-pg-4", name: "WeStay Boys PG - Volga House", location: "G-37, Single Storey, Vijay Nagar" },
  ];

  const girlsPGs = [
    { id: "girls-pg-1", name: "WeStay Girls PG - Rhine House", location: "D 20, Old Gupta Colony, Vijay Nagar" },
    { id: "girls-pg-2", name: "WeStay Girls PG - Mekong House", location: "D 46, Old Gupta Colony, Vijay Nagar" },
    { id: "girls-pg-3", name: "WeStay Girls PG - Mississippi House", location: "G 35, Single Storey, Vijay Nagar" },
    { id: "girls-pg-4", name: "WeStay Girls PG - Nile House", location: "E 26, Single Storey, Vijay Nagar" },
  ];

  return (
    <div className="min-h-screen py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Our Accommodations
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our 8 well-maintained PG locations across the city
          </p>
        </div>

        {/* Boys PG Section */}
        <div className="mb-20 animate-fade-in">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Boys PG Accommodations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {boysPGs.map((pg) => (
              <Card 
                key={pg.id}
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50 overflow-hidden"
              >
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${boysRoomImage})` }}
                />
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{pg.name}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{pg.location}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Link to={`/pg/${pg.id}`}>
                      <Button variant="hero" size="sm" className="w-full">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Girls PG Section */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Girls PG Accommodations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {girlsPGs.map((pg) => (
              <Card 
                key={pg.id}
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50 overflow-hidden"
              >
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${girlsRoomImage})` }}
                />
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{pg.name}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{pg.location}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Link to={`/pg/${pg.id}`}>
                      <Button variant="hero" size="sm" className="w-full">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pricing Info */}
        <div className="bg-gradient-hero text-primary-foreground rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Flexible Pricing Plans</h3>
          <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Starting from ₹12,000 per month with options for single, double, and triple occupancy
          </p>
          <Link to="/book">
            <Button size="lg" variant="secondary" className="shadow-xl">
              Get Custom Quote
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Accommodations;
