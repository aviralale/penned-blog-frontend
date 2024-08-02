import React from "react";
import {
  ArrowLeft02Icon,
  ArrowRight02Icon,
} from "../../../../assets/icons/Icons";

export default function PopularCarousel({
  img,
  author,
  category,
  date,
  title,
  description,
  prevSlide,
  nextSlide,
}) {
  return (
    <div className="flex justify-between gap-7">
      <div className="flex-1 mt-24 h-full">
        <img src={img} className="object-cover h-[34rem] aspect-[3/4]" alt="" />
        <p className="mt-2">
          Written by <b>{author}</b>
        </p>
      </div>
      <div className="flex-1">
        <div className="flex gap-6">
          <button className="px-4 uppercase rounded-full border border-black hover:bg-black hover:text-white">
            {category}
          </button>
          <span>{date}</span>
        </div>
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="pl-56">{description}</p>
      </div>
      <div className="flex-1">
        <img src={img} className="object-cover h-[34rem] aspect-[3/4]" alt="" />
        <div className="flex justify-center mt-8 gap-2">
          <button
            className="rounded-full border hover:border-black p-2"
            onClick={prevSlide}
          >
            <ArrowLeft02Icon />
          </button>
          <button
            className="rounded-full border hover:border-black p-2"
            onClick={nextSlide}
          >
            <ArrowRight02Icon />
          </button>
        </div>
      </div>
    </div>
  );
}
