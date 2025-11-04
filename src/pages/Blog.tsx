import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Tips for First-Time PG Residents",
      excerpt: "Moving into a PG for the first time? Here are essential tips to make your transition smooth and enjoyable.",
      content: "Starting your journey in a PG accommodation can be both exciting and overwhelming. Here are ten valuable tips to help you settle in: 1) Keep your space organized, 2) Respect common areas, 3) Build connections with fellow residents, 4) Communicate openly with management, 5) Maintain personal hygiene, 6) Follow house rules, 7) Plan your meals and expenses, 8) Create a study routine, 9) Participate in community activities, and 10) Stay safe and aware.",
      author: "WeStay Team",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "The Benefits of Community Living in PG Accommodations",
      excerpt: "Discover why living in a PG is more than just affordable housing - it's about building lifelong connections.",
      content: "Community living in PG accommodations offers unique advantages that go beyond just a place to sleep. You get to meet people from diverse backgrounds, share experiences, and build lasting friendships. The support system you develop helps during stressful times like exams or work deadlines. Shared meals and celebrations create a home-like atmosphere, while group activities and outings make your stay memorable. This environment fosters personal growth, cultural exchange, and professional networking opportunities.",
      author: "Priya Sharma",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "How to Balance Work, Study, and Social Life in a PG",
      excerpt: "Master the art of maintaining a healthy balance between your responsibilities and personal life while living in a PG.",
      content: "Achieving work-life balance in a PG setting requires planning and discipline. Start by creating a structured daily schedule that allocates time for work/study, meals, exercise, and relaxation. Use your room as a productive workspace during designated hours. Take advantage of common areas for social interactions during breaks. Set boundaries with roommates about quiet hours. Participate in PG activities to unwind and de-stress. Remember, a balanced lifestyle leads to better productivity and overall well-being.",
      author: "Rahul Mehta",
      date: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Safety First: What to Look for in a PG Accommodation",
      excerpt: "Your safety matters. Learn about the essential security features every good PG should have.",
      content: "When choosing a PG, safety should be your top priority. Look for accommodations with 24/7 security guards, CCTV surveillance in common areas, secure entry systems with biometric access, well-lit premises, fire safety equipment, emergency exits, and responsive management. Check for secure locks on doors and windows, safe neighborhoods, and proximity to hospitals. At WeStay, we ensure all these measures are in place, along with female staff for girls' PG and regular safety audits to provide you with complete peace of mind.",
      author: "WeStay Security Team",
      date: "February 28, 2024",
      image: "https://images.unsplash.com/photo-1585893169411-015b11f87e14?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Healthy Eating Tips for PG Life",
      excerpt: "Maintain your health and nutrition while enjoying the convenience of PG meals and managing your budget.",
      content: "Good nutrition is crucial for students and professionals. While PG meals offer convenience, it's important to maintain variety and nutrition. Communicate your dietary preferences and restrictions to the mess manager. Supplement PG meals with fresh fruits and healthy snacks. Stay hydrated throughout the day. Maintain regular meal times to support your metabolism. If you have special dietary needs, discuss them during the booking process. At WeStay, we offer nutritious, home-style cooking with options to accommodate various dietary requirements.",
      author: "Nutritionist Anjali Reddy",
      date: "February 20, 2024",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "Making Your PG Room Feel Like Home",
      excerpt: "Simple and affordable ways to personalize your space and create a comfortable living environment.",
      content: "Your PG room is your personal sanctuary. Make it comfortable with these simple tips: Add personal touches like photos, posters, or artwork. Use storage organizers to maximize space. Invest in good lighting - add a desk lamp or fairy lights. Keep plants for freshness and positivity. Use aroma diffusers or candles for a pleasant ambiance. Organize with shelves and hangers. Choose comfortable bedding. Create a study corner with proper seating. Remember, a well-organized, personalized space can significantly improve your mood and productivity.",
      author: "Interior Design Team",
      date: "February 15, 2024",
      image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen py-12 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            WeStay Blog
          </h1>
          <p className="text-xl text-muted-foreground">
            Tips, stories, and insights about PG living
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Card 
              key={post.id} 
              className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${post.image})` }}
              />
              <CardHeader>
                <CardTitle className="text-2xl mb-2">{post.title}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <p className="text-foreground leading-relaxed">{post.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
