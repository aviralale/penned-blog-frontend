import React, { useState, useEffect } from "react";
import PopularCarousel from "./PopularCarousel";
import { slides } from "../../../../data/slides";

export default function Popular() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [currentSlide, autoplay]);

  const prevSlide = () => {
    setAutoplay(false);
    setCurrentSlide(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const nextSlide = () => {
    setAutoplay(false);
    setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToSlide = (index) => {
    setAutoplay(false);
    setCurrentSlide(index);
  };

  const { img, author, category, date, title, description } =
    slides[currentSlide];

  return (
    <div className="flex flex-col px-4 py-16 max-w-7xl mx-auto">
      <h2 className="text-6xl md:text-7xl ThunderHC font-bold mb-12 text-center">
        POPULAR PICKS
      </h2>
      <PopularCarousel
        img={img}
        author={author}
        category={category}
        date={date}
        title={title}
        description={description}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
      />
      <div className="flex justify-center mt-6 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-custom-orange w-8"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
