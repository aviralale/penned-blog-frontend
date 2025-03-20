import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight03Icon } from "../../../../assets/icons/Icons";
import "./assets/BestOfMonth.css";
import { Fragment, useState } from "react";
import { motion } from "framer-motion";
const repeatCount = 200;
const dates = [
  "11.10.2004",
  "10.11.2004",
  "11.10.2004",
  "10.11.2004",
  "11.10.2004",
];

export default function BestOfMonth() {
  const [activeDate, setActiveDate] = useState(0);
  const repeatedText = Array(repeatCount).fill("● AVIRAL ALE").join(" ");

  const getNavLinkClass = ({ isActive }) =>
    `py-2 w-full flex items-center justify-center text-center text-2xl md:text-3xl lg:text-4xl transition-all duration-300 ${
      isActive
        ? "bg-black text-custom-orange"
        : "hover:bg-black hover:text-custom-text-dark"
    }`;

  return (
    <div className="flex flex-col mb-16 py-12 max-w-7xl mx-auto">
      <motion.h1
        className="text-center ThunderHC text-6xl md:text-8xl lg:text-9xl uppercase font-bold"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Best of the month
      </motion.h1>

      <ul className="flex flex-wrap md:flex-nowrap justify-between border border-black mt-8">
        {dates.map((date, index) => (
          <Fragment key={index}>
            <NavLink
              to={`${index == 0 ? "/" : `/date${index + 1}`}`}
              className={getNavLinkClass}
              onClick={() => setActiveDate(index)}
            >
              {date}
            </NavLink>
          </Fragment>
        ))}
        <Link className="py-2 w-full justify-center text-2xl md:text-3xl lg:text-4xl border-l border-black hover:bg-black group hover:text-custom-orange flex items-center gap-1 transition-all duration-300">
          VIEW ALL{" "}
          <ArrowUpRight03Icon className="group-hover:text-custom-orange" />
        </Link>
      </ul>

      <motion.div
        className="w-full h-[60vh] mt-8 flex justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex w-full md:w-[90vw] gap-2 justify-center flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1722104628969-6c7961f69b8f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="object-cover h-full aspect-square transition-all duration-500 hover:brightness-110"
              alt="Featured article"
            />
          </div>
          <div className="flex flex-1">
            <div className="flex flex-col gap-6 md:gap-8 justify-center bg-custom-bg-dark px-4 md:px-8 py-6 md:py-0 flex-1">
              <h2 className="uppercase text-2xl md:text-4xl text-custom-text-dark">
                11.10.2004
              </h2>
              <div>
                <h1 className="text-4xl md:text-6xl lg:text-8xl text-custom-text-dark leading-tight">
                  Lorem ipsum dolor sit amet consectetur.
                </h1>
                <p className="text-custom-text-dark mt-4 leading-relaxed">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                  beatae ipsam eaque! Maxime, commodi.
                </p>
              </div>
              <div className="flex justify-center mt-4 md:mt-8">
                <button className="text-3xl md:text-4xl lg:text-5xl text-custom-orange transition-all duration-300 font-bold hover:bg-custom-orange hover:text-white px-4 py-2">
                  READ MORE
                </button>
              </div>
            </div>
            <div className="bg-custom-orange pr-4 w-6 md:w-10 overflow-hidden relative hidden md:block">
              <h1 className="vertical-rl text-xl md:text-2xl text-nowrap animate-scroll absolute">
                {repeatedText}
              </h1>
              <h1 className="vertical-rl text-xl md:text-2xl text-nowrap animate-scroll absolute">
                {repeatedText}
              </h1>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
