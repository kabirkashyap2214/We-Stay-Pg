import { useState, useEffect } from "react";
import pg1 from "@/assets/pg-1.jpg";
import pg2 from "@/assets/pg-2.jpg";
import pg3 from "@/assets/pg-3.jpg";
import pg4 from "@/assets/pg-4.jpg";
import pg5 from "@/assets/pg-5.jpg";
import pg6 from "@/assets/pg-6.jpg";
import pg7 from "@/assets/pg-7.jpg";
import pg8 from "@/assets/pg-8.jpg";

const HeroSlideshow = () => {
  const images = [pg1, pg2, pg3, pg4, pg5, pg6, pg7, pg8];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute inset-0">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}
    </div>
  );
};

export default HeroSlideshow;
