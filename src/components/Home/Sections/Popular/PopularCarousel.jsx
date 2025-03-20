import React from "react";
import { motion } from "framer-motion";
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
    <div className="flex flex-col lg:flex-row justify-between gap-7">
      <motion.div
        className="flex-1 mt-8 lg:mt-24 h-full"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={img}
          className="object-cover h-[20rem] md:h-[28rem] lg:h-[34rem] w-full aspect-[3/4] shadow-lg"
          alt={title}
        />
        <p className="mt-2 ">
          Written by <strong>{author}</strong>
        </p>
      </motion.div>

      <motion.div
        className="flex-1 mt-6 lg:mt-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex gap-6 items-center">
          <button className="px-4 py-1 uppercase rounded-full border border-black hover:bg-black hover:text-white transition-colors duration-300 text-sm font-medium">
            {category}
          </button>
          <span className="">{date}</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
          {title}
        </h1>
        <p className="mt-4 lg:pl-24 xl:pl-56 leading-relaxed">{description}</p>
        <button className="mt-6 px-6 py-2 bg-custom-orange text-white rounded-full hover:bg-black transition-colors duration-300">
          Read Article
        </button>
      </motion.div>

      <motion.div
        className="hidden lg:flex flex-1"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-full">
          <img
            src={img}
            className="object-cover h-[34rem] aspect-[3/4] shadow-lg opacity-60"
            alt=""
          />
          <div className="flex justify-center mt-8 gap-4">
            <button
              className="rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white p-3 transition-all duration-300"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <ArrowLeft02Icon />
            </button>
            <button
              className="rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white p-3 transition-all duration-300"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <ArrowRight02Icon />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
