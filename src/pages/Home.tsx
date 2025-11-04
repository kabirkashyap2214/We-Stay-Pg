import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Sparkles, Wifi, Utensils, PartyPopper, Armchair, Users } from "lucide-react";
import HeroSlideshow from "@/components/HeroSlideshow";
import ScholarshipSection from "@/components/ScholarshipSection";
import SocialMediaSection from "@/components/SocialMediaSection";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";

const Home = () => {
  const features = [
    { 
      icon: Sparkles, 
      title: "Daily Cleaning Services", 
      description: "Daily cleaning and maintenance services ensuring spotless spaces and a hygienic environment every day.",
      image: "https://images.unsplash.com/photo-1542058186993-286fdce0b580?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    },
    { 
      icon: Utensils, 
      title: "4 Times Meals", 
      description: "Nutritious, home-style cooking with varied menus. Vegetarian and non-vegetarian options available with special dietary accommodations on request.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
    },
    { 
      icon: Armchair, 
      title: "Fully Furnished Rooms", 
      description: "Fully furnished rooms complete with elegant interiors, premium furniture, and essential appliances — designed to provide a seamless, comfortable, and truly home-like living experience from day one.",
      image: "https://plus.unsplash.com/premium_photo-1661698951100-064e4ae229fd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074"
    },
    { 
      icon: Wifi, 
      title: "High-Speed WiFi", 
      description: "Ultra-fast fiber optic internet connectivity throughout the premises, perfect for online classes, remote work, and entertainment without interruptions.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80"
    },
    { 
      icon: Users, 
      title: "Community Living", 
      description: "Build lasting friendships with diverse residents. Regular social events, study groups, and recreational activities foster a strong community bond.",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=600&q=80"
    },
    { 
      icon: PartyPopper, 
      title: "Festive Celebrations", 
      description: "Regular celebration of festivals, birthdays, and special occasions creating a vibrant community atmosphere that makes you feel at home.",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=80"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center overflow-hidden">
        <HeroSlideshow />
        <div className="container mx-auto px-4 z-10 animate-fade-in relative">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Best PG in North Campus, Delhi
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Choose Comfort, Choose We Stay
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book">
              <Button size="lg" variant="hero" className="text-lg">
                Book a Visit
              </Button>
            </Link>
            <Link to="/accommodations">
              <Button size="lg" variant="hero" className="text-lg">
                View Rooms
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Why Choose WeStay PG?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We provide everything you need for a comfortable and productive stay
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50 overflow-hidden"
              >
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${feature.image})` }}
                />
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-card">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarship Section */}
      <ScholarshipSection />

      {/* Social Media Section */}
      <SocialMediaSection />

      {/* Google Reviews Section */}
      <GoogleReviewsSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make WeStay Your Home?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join hundreds of students and professionals who have made WeStay PG their preferred choice
          </p>
          <Link to="/book">
            <Button size="lg" variant="secondary" className="text-lg shadow-xl hover:scale-105">
              Schedule a Visit Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
