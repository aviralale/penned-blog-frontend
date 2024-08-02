import React, { useState } from "react";
import PopularCarousel from "./PopularCarousel";
import { slides } from "../../../../data/slides";

export default function Popular() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const { img, author, category, date, title, description } =
    slides[currentSlide];

  return (
    <div className="flex flex-col px-4">
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
    </div>
  );
}
