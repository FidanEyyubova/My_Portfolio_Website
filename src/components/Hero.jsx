import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas/Computers";

const Hero = () => {
  return (
    <section
      className={`relative w-full h-screen mx-auto   bg-cover bg-center bg-no-repeat`}
    >
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto !sm:px-16 !px-6 flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#653bd9]" />
          <div className="w-1 sm:h-80 h-40 rounded violet-gradient" />
        </div>

        <div>
          <h1
            className={`text-white font-bold lg:text-[40px] sm:text-[31px] xs:text-[15px] text-[28px] lg:leading-[50px]`}
          >
            Hi, I'm <span className="text-[#7248e5]">Fidan</span>
          </h1>
          <p className="lg:text-[28px] sm:text-[26px] xs:text-[10px] text-[17px] lg:leading-[50px] uppercase tracking-wider mt-5 font-semibold text-[#c5c5ca]">
            I build responsive, user-friendly,{" "}
            <br className="sm:block hidden" />
            and visually appealing web apps.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-3 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[50px] rounded-3xl !border-2 !border-[#b9b9ba] flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#b9b9ba] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
