import React from "react";
import Photo1 from "../../../../assets/images/Photo1.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function AllTimeBest() {
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
      },
    }),
  };

  return (
    <div className="flex flex-col justify-center items-center py-16 ">
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-center ThunderHC text-6xl md:text-8xl lg:text-9xl uppercase font-bold">
          All time best
        </h1>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-10 mx-6 lg:mx-40 max-w-7xl">
        {[
          {
            img: Photo1,
            title:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa a repellendus nam?",
          },
          {
            img: "https://images.unsplash.com/photo-1722078141103-70ca6f653b76",
            title:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa a repellendus nam?",
          },
          {
            img: "https://images.unsplash.com/photo-1722218530083-06fa15ca2e31",
            title:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa a repellendus nam?",
          },
        ].map((article, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex-1"
          >
            <Link className="flex flex-col gap-3 group">
              <div className="overflow-hidden">
                <img
                  src={article.img}
                  alt={`Best article ${i + 1}`}
                  className="aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h1 className="font-bold text-2xl md:text-3xl group-hover:text-custom-orange transition-colors duration-300">
                {article.title}
              </h1>
              <div className="h-1 w-0 bg-custom-orange transition-all duration-500 group-hover:w-full"></div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <button className="text-4xl md:text-5xl lg:text-6xl uppercase text-custom-orange transition-all duration-300 ease font-bold hover:bg-custom-orange hover:text-white px-6 py-1">
          View ALL
        </button>
      </motion.div>
    </div>
  );
}
