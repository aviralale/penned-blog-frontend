import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight03Icon } from "../../../../assets/icons/Icons";
import Post from "../../../Post";
import { motion } from "framer-motion";

export default function Recent() {
  return (
    <div className="bg-custom-bg-dark pb-16 pt-12">
      <div className="mx-6 max-w-7xl lg:mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-baseline mb-10">
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl text-custom-text-dark mt-4 ThunderHC font-extrabold"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            RECENTS
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/all"
              className="text-custom-text-dark text-2xl md:text-3xl hover:underline group flex gap-1 items-center mt-4 md:mt-0"
            >
              VIEW ALL{" "}
              <ArrowUpRight03Icon
                width={30}
                height={30}
                className="group-hover:text-custom-orange transition-colors duration-300"
                color="#E3E3E3"
              />
            </Link>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-6">
          <div className="flex flex-col gap-8 lg:w-1/2">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                className="flex"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * item }}
              >
                <Post imgHeight={24} hasImages />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link className="flex flex-col gap-6 group">
              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1722104628969-6c7961f69b8f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="object-cover w-full aspect-[3/4] transition-transform duration-700 group-hover:scale-105"
                  alt="Feature recent article"
                />
              </div>
              <div className="flex gap-6 mt-2">
                <button className="px-4 py-1 uppercase rounded-full border text-custom-text-dark border-custom-text-dark hover:bg-custom-text-dark hover:text-custom-bg-dark transition-colors duration-300 text-sm">
                  Science
                </button>
                <span className="text-custom-text-dark">OCT 11, 2004</span>
              </div>
              <h1 className="text-4xl lg:text-5xl text-custom-text-dark leading-tight group-hover:text-custom-orange transition-colors duration-300">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </h1>
              <p className="text-custom-text-dark">
                Written by <b>Aviral Ale</b>
              </p>
              <div className="h-1 w-0 bg-custom-orange transition-all duration-500 group-hover:w-full"></div>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
