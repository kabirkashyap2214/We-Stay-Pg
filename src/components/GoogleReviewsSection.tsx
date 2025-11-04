import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const GoogleReviewsSection = () => {
  // Placeholder reviews - will be replaced with actual Google reviews
  const reviews = [
    {
      id: 1,
      name: "Rahul Kumar",
      rating: 5,
      date: "2 weeks ago",
      text: "Excellent PG with all facilities. The staff is very helpful and the rooms are well-maintained. Highly recommended!",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=RK"
    },
    {
      id: 2,
      name: "Priya Sharma",
      rating: 5,
      date: "1 month ago",
      text: "Best PG in North Campus! The food is delicious and the environment is very friendly. Feels like home away from home.",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=PS"
    },
    {
      id: 3,
      name: "Amit Singh",
      rating: 4,
      date: "3 weeks ago",
      text: "Great place to stay with good amenities. Clean rooms and helpful management. Would definitely recommend to others.",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=AS"
    },
    {
      id: 4,
      name: "Sneha Verma",
      rating: 5,
      date: "1 week ago",
      text: "Amazing experience at WeStay! The community is wonderful and all facilities are top-notch. Best decision I made!",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=SV"
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < rating ? 'fill-yellow-500 text-yellow-500' : 'text-muted-foreground/30'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            What Our Residents Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-4">
            Real reviews from real residents on Google
          </p>
          <a 
            href="https://www.google.com/maps/place/We+Stay+by+Seven+Sisters+PG/@28.6924694,77.1975597,17z/data=!4m8!3m7!1s0x390cfd53f222a837:0x4be5ebdd69327f09!8m2!3d28.6924694!4d77.2001346!9m1!1b1!16s%2Fg%2F11f7b46gy5?entry=ttu&g_ep=EgoyMDI1MTEwMi4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            View all reviews on Google Maps
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviews.map((review) => (
            <Card 
              key={review.id}
              className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img 
                    src={review.avatar} 
                    alt={review.name}
                    className="w-12 h-12 rounded-full bg-muted"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{review.name}</h4>
                    <div className="flex items-center gap-2 mb-1">
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;