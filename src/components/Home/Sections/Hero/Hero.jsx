import HeroImg from "../../../../assets/images/Hero.jpg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="flex flex-col place-items-center relative w-full overflow-hidden">
      <motion.div
        className="relative flex items-baseline"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-8xl sm:text-[20rem] md:text-[30rem] lg:text-[40rem] text-custom-orange ThunderHC font-bold leading-none">
          PENNED
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl mt-4 text-custom-orange ThunderLC font-bold">
          BLOG
        </h1>
      </motion.div>
      <motion.div
        className="z-20 w-full transform -translate-y-1/4"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <img
          className="w-full h-[80vh] object-cover brightness-95 transition-all duration-300 hover:brightness-100"
          src={HeroImg}
          alt="Hero Banner"
        />
      </motion.div>
    </div>
  );
}
