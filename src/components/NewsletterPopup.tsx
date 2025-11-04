import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { toast } from "sonner";

interface NewsletterPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NewsletterPopup = ({ open, onOpenChange }: NewsletterPopupProps) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Successfully subscribed to our newsletter!");
      setEmail("");
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary-foreground" />
            </div>
            Subscribe to Our Newsletter
          </DialogTitle>
          <DialogDescription>
            Get monthly updates about our facilities, special offers, and accommodation tips!
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12"
            />
          </div>
          <Button type="submit" className="w-full" size="lg" variant="hero">
            Subscribe Now
          </Button>
        </form>
        <p className="text-xs text-muted-foreground text-center">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterPopup;
