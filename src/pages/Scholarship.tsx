import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { GraduationCap } from "lucide-react";
import scholarshipImage from "@/assets/scholarship-program.jpg";

const Scholarship = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    yearOfStudy: "",
    parentAnnualIncome: "",
    whyDeserveScholarship: "",
  });
  const [files, setFiles] = useState({
    tenthMarksheet: null as File | null,
    twelfthMarksheet: null as File | null,
    cuetMarksheet: null as File | null,
    incomeCertificate: null as File | null,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    if (e.target.files && e.target.files[0]) {
      setFiles({ ...files, [field]: e.target.files[0] });
    }
  };

  const uploadFile = async (file: File, path: string) => {
    const { data, error } = await supabase.storage
      .from("scholarship-documents")
      .upload(path, file);
    
    if (error) throw error;
    
    const { data: { publicUrl } } = supabase.storage
      .from("scholarship-documents")
      .getPublicUrl(data.path);
    
    return publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!files.tenthMarksheet || !files.twelfthMarksheet || !files.cuetMarksheet || !files.incomeCertificate) {
      toast({
        title: "Error",
        description: "Please upload all required documents",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    
    try {
      const timestamp = Date.now();
      
      const tenthUrl = await uploadFile(files.tenthMarksheet, `${timestamp}-10th-${files.tenthMarksheet.name}`);
      const twelfthUrl = await uploadFile(files.twelfthMarksheet, `${timestamp}-12th-${files.twelfthMarksheet.name}`);
      const cuetUrl = await uploadFile(files.cuetMarksheet, `${timestamp}-cuet-${files.cuetMarksheet.name}`);
      const incomeUrl = await uploadFile(files.incomeCertificate, `${timestamp}-income-${files.incomeCertificate.name}`);

      const { error } = await supabase
        .from("scholarship_applications")
        .insert({
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          course: formData.course,
          year_of_study: formData.yearOfStudy,
          parent_annual_income: parseFloat(formData.parentAnnualIncome),
          why_deserve_scholarship: formData.whyDeserveScholarship,
          tenth_marksheet_url: tenthUrl,
          twelfth_marksheet_url: twelfthUrl,
          cuet_marksheet_url: cuetUrl,
          income_certificate_url: incomeUrl,
        });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your scholarship application has been submitted successfully.",
      });
      
      navigate("/");
    } catch (error) {
      console.error("Error submitting application:", error);
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-card">
            <GraduationCap className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            WeStay Scholarship Program 2025
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Apply for free accommodation and mentorship at North Campus, University of Delhi
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-12">
          <Card className="shadow-elegant border-border/50">
            <CardContent className="p-8">
              <img 
                src={scholarshipImage}
                alt="WeStay Scholarship Program 2025"
                className="w-full h-auto rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold mb-4">About the Program</h3>
              <p className="text-muted-foreground mb-4">
                At WeStay, we're more than just a place to live — we're your home away from home in North Campus, University of Delhi. Through this special scholarship, we're offering a few deserving students a chance to stay with us for free, based on merit and financial need.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Free Accommodation</strong> for the entire academic year</span>
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
                  <span><strong>Deadline: 31 July 2025</strong></span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-border/50">
            <CardHeader>
              <CardTitle>Application Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="course">Course/Program *</Label>
                  <Input
                    id="course"
                    required
                    placeholder="e.g., B.A. Economics"
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="yearOfStudy">Year of Study *</Label>
                  <Input
                    id="yearOfStudy"
                    required
                    placeholder="e.g., 1st Year"
                    value={formData.yearOfStudy}
                    onChange={(e) => setFormData({ ...formData, yearOfStudy: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="parentAnnualIncome">Parent's Annual Income (₹) *</Label>
                  <Input
                    id="parentAnnualIncome"
                    type="number"
                    required
                    value={formData.parentAnnualIncome}
                    onChange={(e) => setFormData({ ...formData, parentAnnualIncome: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="tenthMarksheet">10th Marksheet (PDF) *</Label>
                  <Input
                    id="tenthMarksheet"
                    type="file"
                    accept=".pdf"
                    required
                    onChange={(e) => handleFileChange(e, "tenthMarksheet")}
                  />
                </div>

                <div>
                  <Label htmlFor="twelfthMarksheet">12th Marksheet (PDF) *</Label>
                  <Input
                    id="twelfthMarksheet"
                    type="file"
                    accept=".pdf"
                    required
                    onChange={(e) => handleFileChange(e, "twelfthMarksheet")}
                  />
                </div>

                <div>
                  <Label htmlFor="cuetMarksheet">CUET Scorecard (PDF) *</Label>
                  <Input
                    id="cuetMarksheet"
                    type="file"
                    accept=".pdf"
                    required
                    onChange={(e) => handleFileChange(e, "cuetMarksheet")}
                  />
                </div>

                <div>
                  <Label htmlFor="incomeCertificate">Parent's Income Certificate (PDF) *</Label>
                  <Input
                    id="incomeCertificate"
                    type="file"
                    accept=".pdf"
                    required
                    onChange={(e) => handleFileChange(e, "incomeCertificate")}
                  />
                </div>

                <div>
                  <Label htmlFor="whyDeserveScholarship">Why do you deserve this scholarship? *</Label>
                  <Textarea
                    id="whyDeserveScholarship"
                    required
                    rows={5}
                    placeholder="Tell us about your academic achievements, financial situation, and goals..."
                    value={formData.whyDeserveScholarship}
                    onChange={(e) => setFormData({ ...formData, whyDeserveScholarship: e.target.value })}
                  />
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Scholarship;
