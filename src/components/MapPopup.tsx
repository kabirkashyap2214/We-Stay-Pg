import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPin, X } from "lucide-react";

interface MapPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const MapPopup = ({ open, onOpenChange }: MapPopupProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <MapPin className="w-6 h-6 text-primary" />
            Our Location
          </DialogTitle>
          <DialogDescription>
            Visit us at our convenient location near major educational institutions
          </DialogDescription>
        </DialogHeader>
        <div className="w-full h-[400px] rounded-lg overflow-hidden border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.4820757891887!2d77.15454731508226!3d28.655944382422744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d032a1c5c7f37%3A0x2c8c9c2c9c8c9c8c!2sVijay%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110033!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="bg-muted/50 p-4 rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Address:</strong> Rhine House, D-20, Old Gupta Colony, Vijay Nagar, New Delhi, Delhi, 110033
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MapPopup;
