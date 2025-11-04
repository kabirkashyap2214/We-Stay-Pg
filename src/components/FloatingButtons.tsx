import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Mail } from "lucide-react";
import MapPopup from "./MapPopup";
import NewsletterPopup from "./NewsletterPopup";

const FloatingButtons = () => {
  const [showMapPopup, setShowMapPopup] = useState(false);
  const [showNewsletterPopup, setShowNewsletterPopup] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show buttons when user scrolls down 50% of the page
      setShowButtons(scrollPosition > windowHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed bottom-6 right-6 z-40 flex flex-col gap-3 transition-all duration-500 ${
          showButtons ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <Button
          onClick={() => setShowMapPopup(true)}
          size="lg"
          variant="secondary"
          className="rounded-full shadow-elegant hover:shadow-xl transition-all gap-2"
        >
          <MapPin className="w-5 h-5" />
          View Location
        </Button>
        <Button
          onClick={() => setShowNewsletterPopup(true)}
          size="lg"
          variant="hero"
          className="rounded-full shadow-elegant hover:shadow-xl transition-all gap-2"
        >
          <Mail className="w-5 h-5" />
          Newsletter
        </Button>
      </div>

      <MapPopup open={showMapPopup} onOpenChange={setShowMapPopup} />
      <NewsletterPopup open={showNewsletterPopup} onOpenChange={setShowNewsletterPopup} />
    </>
  );
};

export default FloatingButtons;
