import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import scholarshipImage from "@/assets/scholarship-program.jpg";

const ScholarshipSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            WeStay Scholarship Program
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Supporting students in their academic journey
          </p>
        </div>

        <Card className="max-w-5xl mx-auto shadow-elegant border-border/50 overflow-hidden group cursor-pointer hover:shadow-glow transition-all duration-300" onClick={() => navigate("/scholarship")}>
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-auto overflow-hidden">
              <img 
                src={scholarshipImage}
                alt="WeStay Scholarship Program 2025"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <CardContent className="p-8 flex flex-col justify-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6 shadow-card">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">WeStay Scholarship Program 2025</h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                At WeStay, we're more than just a place to live — we're your home away from home in North Campus, University of Delhi. Through this special scholarship, we're offering a few deserving students a chance to stay with us for free, based on merit and financial need.
              </p>
              
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Get Free Accommodation</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Mentorship and Career Consultation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>College Admission Guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">📅</span>
                  <span><strong>Apply Before: 31 July 2025</strong></span>
                </li>
              </ul>
              
              <Button className="w-full" onClick={(e) => { e.stopPropagation(); navigate("/scholarship"); }}>
                Apply Now
              </Button>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ScholarshipSection;
