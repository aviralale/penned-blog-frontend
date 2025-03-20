import React, { useState } from "react";
import AuthorImg from "../../../../assets/images/author.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function BlogByAuthor() {
  const [activeAuthor, setActiveAuthor] = useState(5);

  const getNavLinkClass = ({ isActive }) =>
    `p-1 rounded-full transition-all duration-300 ${
      isActive
        ? "bg-custom-orange ring-4 ring-custom-orange ring-opacity-30"
        : "hover:bg-custom-orange hover:ring-2 hover:ring-custom-orange hover:ring-opacity-20"
    }`;

  return (
    <div className="bg-custom-bg-dark pb-16 pt-12">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl ThunderHC text-center text-custom-text-dark mt-4 font-extrabold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          BLOGS <span className="my-8 inline-block">BY</span> AUTHOR
        </motion.h1>

        <motion.div
          className="authors flex flex-wrap justify-center gap-4 lg:gap-6 my-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <NavLink
              className={getNavLinkClass}
              to={`${item === 5 ? "" : `/date${item + 1}`}`}
              key={item}
              onClick={() => setActiveAuthor(item)}
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={AuthorImg}
                alt={`Author ${item}`}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
              />
            </NavLink>
          ))}
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col w-full lg:w-3/5 relative">
            <div className="z-10 text-custom-text-dark flex flex-col">
              <motion.h1
                className="text-6xl md:text-8xl lg:text-9xl transform lg:translate-y-52 font-extrabold"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                AVIRAL
              </motion.h1>
              <motion.h1
                className="text-6xl md:text-8xl lg:text-9xl transform lg:translate-y-52 italic"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                ALE
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <button className="text-xl lg:text-2xl transform lg:translate-y-52 text-custom-orange transition-all duration-300 font-bold hover:bg-custom-orange hover:text-white px-4 py-2 rounded-sm">
                  VIEW MORE
                </button>
              </motion.div>
            </div>

            <motion.img
              src={AuthorImg}
              alt="author"
              className="aspect-[3/4] object-cover w-full lg:w-[42rem] h-[40rem] lg:h-[62rem] transform  lg:-translate-y-72 mt-6 lg:mt-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </div>

          <div className="flex justify-between w-full lg:w-2/5 mt-12 lg:mt-0">
            <div className="flex flex-col gap-8 w-full">
              {[1, 2, 3].map((item) => (
                <React.Fragment key={item}>
                  <motion.div
                    className="flex flex-col md:flex-row gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * item }}
                  >
                    <div className="h-full w-full md:w-1/4">
                      <img
                        src={`https://images.unsplash.com/photo-1722104628969-6c7961f69b8f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&item=${item}`}
                        className="object-cover w-full md:w-72 h-full aspect-[3/4] rounded-sm"
                        alt={`Article ${item}`}
                      />
                    </div>
                    <div className="flex flex-col gap-4 lg:gap-6 w-full md:w-3/4">
                      <div className="flex gap-4 items-center">
                        <button className="px-3 py-1 uppercase rounded-full border text-custom-text-dark border-custom-text-dark hover:bg-custom-text-dark hover:text-custom-bg-dark transition-colors duration-300 text-sm">
                          Science
                        </button>
                        <span className="text-custom-text-dark text-sm">
                          OCT 11, 2004
                        </span>
                      </div>
                      <div>
                        <h1 className="text-3xl lg:text-4xl text-custom-text-dark leading-tight">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit.
                        </h1>
                      </div>
                      <div>
                        <p className="text-custom-text-dark">
                          Written by <b>Aviral Ale</b>
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  {item < 3 ? (
                    <hr className="p-2 w-full border-gray-600" />
                  ) : null}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
