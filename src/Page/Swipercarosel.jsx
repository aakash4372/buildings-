import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  useEffect(() => {
    if (!emblaApi) return;

    const autoSlide = () => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    };

    const interval = setInterval(autoSlide, 4000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const updateIndex = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", updateIndex);
    updateIndex();
  }, [emblaApi]);

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const carouselItems = [
    { id: 1, image: "img/room1.jpg", text: "First Slide" },
    { id: 2, image: "img/room2.jpg", text: "Second Slide" },
    { id: 3, image: "img/room3.jpg", text: "Third Slide" },
    { id: 4, image: "img/room1.jpg", text: "Fourth Slide" },
    { id: 5, image: "img/room1.jpg", text: "Fifth Slide" },
  ];

  return (
    <div  
      className="embla" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {carouselItems.map((item, index) => (
            <div className="embla__slide" key={item.id}>
              <img className="embla__slide__img" src={item.image} alt={item.text} />

              {/* Animate text only for the active slide */}
              {selectedIndex === index && (
                <motion.div
                  className="embla__slide__caption"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <h3>{item.text}</h3>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Buttons with motion effects */}
      <motion.button
        className="embla__button embla__button--prev"
        onClick={scrollPrev}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        &#10094; {/* Left arrow */}
      </motion.button>

      <motion.button
        className="embla__button embla__button--next"
        onClick={scrollNext}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        &#10095; {/* Right arrow */}
      </motion.button>
    </div>
  );
};

export default EmblaCarousel;
