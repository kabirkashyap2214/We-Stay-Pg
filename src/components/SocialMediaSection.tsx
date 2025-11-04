import { Card } from "@/components/ui/card";
import { Instagram } from "lucide-react";

const SocialMediaSection = () => {
  const instagramPosts = [
    { id: 1, image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80" },
    { id: 2, image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80" },
    { id: 3, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80" },
    { id: 4, image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=600&q=80" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Follow Us on Social Media
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            Stay connected with our community and see what's happening at WeStay
          </p>
          <a 
            href="https://www.instagram.com/westay_pg/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <Instagram className="w-5 h-5" />
            @westay_pg
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/westay_pg/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="group overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50 cursor-pointer">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={post.image}
                    alt="WeStay Instagram Post"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <Instagram className="w-12 h-12 mx-auto mb-2" />
                      <p className="text-sm font-medium">View on Instagram</p>
                    </div>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
