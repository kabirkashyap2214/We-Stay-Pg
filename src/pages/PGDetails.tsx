import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Check, MessageCircle } from "lucide-react";
import { useEffect, useRef } from "react";
import boysRoom from "@/assets/boys-room.jpg";
import girlsRoom from "@/assets/girls-room.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import festiveCelebration from "@/assets/festive-celebration.jpg";
import tigrisRoom1 from "@/assets/tigris-room-1.jpg";
import tigrisRoom2 from "@/assets/tigris-room-2.jpg";
import tigrisRoom3 from "@/assets/tigris-3.jpg";
import BramhaputraRoom1 from "@/assets/Bramhaputra1.jpg";
import BramhaputraRoom2 from "@/assets/Bramhaputra2.jpg";
import BramhaputraRoom3 from "@/assets/Bramhaputra3.jpg";
import VolgaRoom1 from "@/assets/Volga1.jpg";
import VolgaRoom2 from "@/assets/Volga2.jpg";
import VolgaRoom3 from "@/assets/Volga3.jpg";
import RhineRoom1 from "@/assets/Rhine1.jpg";
import RhineRoom2 from "@/assets/Rhine2.jpg";
import RhineRoom3 from "@/assets/Rhine3.jpg";
import MissRoom1 from "@/assets/Miss1.jpg";
import MissRoom2 from "@/assets/Miss2.jpg";
import MissRoom3 from "@/assets/Miss3.jpg";
import NileRoom1 from "@/assets/Nile1.jpg";
import NileRoom2 from "@/assets/Nile2.jpg";
import NileRoom3 from "@/assets/Nile3.jpg";

// Mock data for PG locations
const pgLocations = {
  "boys-pg-1": {
    name: "WeStay Boys PG - Tigris House",
    type: "Boys",
    address: "138, Old Gupta Colony, Vijay Nagar - 110009",
    phone: "+91 98765 43210",
    coordinates: { lat: 28.691430, lng: 77.198254 },
    facilities: [
      "24/7 Security", "WiFi", "AC Rooms", "Laundry", "Power Backup",
      "Parking", "Common Kitchen", "Study Room", "TV Room"
    ],
    gallery: [
      { src: tigrisRoom1, title: "Double Sharing Room", category: "Accommodation", type: "image" },
      { src: tigrisRoom2, title: "Double Sharing Room", category: "Accommodation", type: "image" },
      { src: tigrisRoom3, title: "Double Sharing with Balcony Room", category: "Accommodation", type: "image" },
      { src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Property Tour", category: "Video Tour", type: "video" },
    ],
  },
  "boys-pg-2": {
    name: "WeStay Boys PG - Yamuna House",
    type: "Boys",
    address: "200, Old Gupta Colony, Vijay Nagar - 110009",
    phone: "+91 98765 43211",
    coordinates: { lat: 28.691137, lng: 77.200960 },
    facilities: [
      "24/7 Security", "WiFi", "Furnished Rooms", "Laundry", "Power Backup",
      "Gym", "Common Area", "Meal Service", "Parking"
    ],
    gallery: [
      { src: tigrisRoom1, title: "Double Sharing Room", category: "Accommodation", type: "image" },
      { src: tigrisRoom2, title: "Double Sharing Room", category: "Facilities", type: "image" },
      { src: tigrisRoom3, title: "Double Sharing with Baclony Room", category: "Facilities", type: "image" },
      { src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Property Tour", category: "Video Tour", type: "video" },
    ],
  },
  "boys-pg-3": {
    name: "WeStay Boys PG - Bramhaputra House",
    type: "Boys",
    address: "G9, Single Storey, Vijay Nagar - 110009",
    phone: "+91 98765 43212",
    coordinates: { lat: 28.694136, lng: 77.203662 },
    facilities: [
      "24/7 Security", "High-Speed WiFi", "AC/Non-AC Rooms", "Laundry",
      "Power Backup", "Parking", "Rooftop Garden", "Recreation Room"
    ],
    gallery: [
      { src: BramhaputraRoom1, title: "Single Sharing Room", category: "Accommodation", type: "image" },
      { src: BramhaputraRoom2, title: "Double Sharing Room", category: "Facilities", type: "image" },
      { src: BramhaputraRoom3, title: "Double Sharing Room", category: "Facilities", type: "image" },
      { src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Property Tour", category: "Video Tour", type: "video" },
    ],
  },
  "boys-pg-4": {
    name: "WeStay Boys PG - Volga House",
    type: "Boys",
    address: "G-37, Single Storey, Vijay Nagar - 110009",
    phone: "+91 98765 43213",
    coordinates: { lat: 28.694450, lng: 77.203130 },
    facilities: [
      "24/7 Security", "WiFi", "Furnished Rooms", "Laundry", "Power Backup",
      "Parking", "Common Kitchen", "TV Room", "Study Area"
    ],
    gallery: [
      { src: VolgaRoom1, title: "Double Sharing with Balcony Room", category: "Accommodation", type: "image" },
      { src: VolgaRoom2, title: "Double Sharing Room", category: "Facilities", type: "image" },
      { src: VolgaRoom3, title: "Double Sharing Room", category: "Facilities", type: "image" },
      { src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Property Tour", category: "Video Tour", type: "video" },
    ],
  },
  "girls-pg-1": {
    name: "WeStay Girls PG - Rhine House",
    type: "Girls",
    address: "D 20, Old Gupta Colony, Vijay Nagar - 110009",
    phone: "+91 98765 43214",
    coordinates: { lat: 28.692489210437195, lng: 77.20016390984397 },
    facilities: [
      "24/7 Female Security", "WiFi", "AC Rooms", "Laundry", "Power Backup",
      "CCTV Surveillance", "Common Kitchen", "Study Room", "Safe Neighborhood"
    ],
    gallery: [
      { src: RhineRoom1, title: "Double Sharing Room", category: "Accommodation", type: "image" },
      { src: RhineRoom2, title: "Double Sharing Room", category: "Facilities", type: "image" },
      { src: RhineRoom3, title: "Double Sharing Room", category: "Community", type: "image" },
      { src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Property Tour", category: "Video Tour", type: "video" },
    ],
  },
  "girls-pg-2": {
    name: "WeStay Girls PG - Mekong House",
    type: "Girls",
    address: "D 46, Old Gupta Colony, Vijay Nagar - 110009",
    phone: "+91 98765 43215",
    coordinates: { lat: 28.692013, lng: 77.200858 },
    facilities: [
      "24/7 Female Security", "High-Speed WiFi", "Furnished Rooms", "Laundry",
      "Power Backup", "CCTV", "Yoga Room", "Meal Service", "Reading Room"
    ],
    gallery: [
      { src: girlsRoom, title: "Premium Room", category: "Accommodation", type: "image" },
      { src: gallery3, title: "Study Area", category: "Facilities", type: "image" },
      { src: festiveCelebration, title: "Community Events", category: "Community", type: "image" },
      { src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Property Tour", category: "Video Tour", type: "video" },
    ],
  },
  "girls-pg-3": {
    name: "WeStay Girls PG - Mississippi House",
    type: "Girls",
    address: "G 35, Single Storey, Vijay Nagar - 110009",
    phone: "+91 98765 43216",
    coordinates: { lat: 28.694465, lng: 77.203272 },
    facilities: [
      "24/7 Female Security", "WiFi", "AC/Non-AC Rooms", "Laundry",
      "Power Backup", "CCTV", "Common Area", "Beauty Salon Nearby"
    ],
    gallery: [
      { src: MissRoom1, title: "Triple Sharing Room", category: "Accommodation", type: "image" },
      { src: MissRoom2, title: "Balcony Area", category: "Facilities", type: "image" },
      { src: MissRoom3, title: "Double Sharing Room", category: "Community", type: "image" },
      { src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Property Tour", category: "Video Tour", type: "video" },
    ],
  },
  "girls-pg-4": {
    name: "WeStay Girls PG - Nile House",
    type: "Girls",
    address: "E 26, Single Storey, Vijay Nagar - 110009",
    phone: "+91 98765 43217",
    coordinates: { lat: 28.69274725981345, lng: 77.20147584665389 },
    facilities: [
      "24/7 Female Security", "WiFi", "Furnished Rooms", "Laundry",
      "Power Backup", "CCTV", "Gym", "Study Area", "Safe Location"
    ],
    gallery: [
      { src: NileRoom1, title: "Single Sharing Room", category: "Accommodation", type: "image" },
      { src: NileRoom2, title: "Double Sharing Room", category: "Facilities", type: "image" },
      { src: NileRoom3, title: "Triple Sharing Room", category: "Community", type: "image" },
      { src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Property Tour", category: "Video Tour", type: "video" },
    ],
  },
};

const PGDetails = () => {
  const { pgId } = useParams<{ pgId: string }>();
  const navigate = useNavigate();
  const mapRef = useRef<HTMLDivElement>(null);
  const pg = pgId ? pgLocations[pgId as keyof typeof pgLocations] : null;

  useEffect(() => {
    if (!pg || !mapRef.current) return;

    // Create a simple static map using OpenStreetMap
    const { lat, lng } = pg.coordinates;
    const mapHTML = `
      <iframe
        width="100%"
        height="400"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.01},${lat - 0.01},${lng + 0.01},${lat + 0.01}&layer=mapnik&marker=${lat},${lng}"
        style="border-radius: 0.5rem;"
      ></iframe>
    `;
    mapRef.current.innerHTML = mapHTML;
  }, [pg]);

  if (!pg) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">PG Not Found</h2>
          <Button onClick={() => navigate("/accommodations")}>
            Back to Accommodations
          </Button>
        </div>
      </div>
    );
  }

  const handleScheduleVisit = () => {
    navigate("/book");
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "919707687747";
    const message = encodeURIComponent(`Hi, I'm interested in ${pg.name}`);
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen py-12 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <Button 
          variant="outline" 
          onClick={() => navigate("/accommodations")}
          className="mb-6"
        >
          ← Back to Accommodations
        </Button>

        <div className="animate-fade-in">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
            {pg.name}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">{pg.type} Accommodation</p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="shadow-elegant border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Location Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Address</h4>
                  <p className="text-muted-foreground">{pg.address}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Contact
                  </h4>
                  <p className="text-muted-foreground">{pg.phone}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-border/50">
              <CardHeader>
                <CardTitle>Facilities & Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {pg.facilities.map((facility, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{facility}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-elegant border-border/50 mb-8">
            <CardHeader>
              <CardTitle>Location Map</CardTitle>
            </CardHeader>
            <CardContent>
              <div ref={mapRef} className="w-full h-[400px] rounded-lg overflow-hidden bg-muted" />
              <p className="text-sm text-muted-foreground mt-4">
                View this location on{" "}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${pg.coordinates.lat},${pg.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Google Maps
                </a>
              </p>
            </CardContent>
          </Card>

          {/* Gallery Section */}
          {pg.gallery && pg.gallery.length > 0 && (
            <Card className="shadow-elegant border-border/50 mb-8">
              <CardHeader>
                <CardTitle>Photo Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pg.gallery.map((item, index) => (
                    <Card 
                      key={index} 
                      className="group overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50"
                    >
                      <div className="relative h-64 overflow-hidden">
                        {item.type === "video" ? (
                          <iframe
                            src={item.src}
                            title={item.title}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        ) : (
                          <>
                            <img 
                              src={item.src} 
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                <p className="text-sm font-medium text-accent">{item.category}</p>
                                <h3 className="text-lg font-bold">{item.title}</h3>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="hero" 
              onClick={handleScheduleVisit}
              className="text-lg"
            >
              Schedule a Visit
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleWhatsAppClick}
              className="text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PGDetails;
