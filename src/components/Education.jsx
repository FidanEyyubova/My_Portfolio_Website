import { motion } from "framer-motion";
import { education } from "../constants";
import { SectionWrapper } from "../section";
import { textVariant } from "../utils/motion";

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center">
          What I have done so far
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
          Education.
        </h2>
      </motion.div>

      <section className="py-16 px-6 sm:px-6">
        <div className="flex justify-center items-center gap-10 mt-10 flex-col lg:flex-row">
          {education.map((item, index) => (
            <div
              key={index}
              className="relative group w-full lg:w-[400px] h-[200px] rounded-[16px] overflow-hidden 
                         transition-all duration-700 ease-in-out
                         hover:scale-105 hover:rotate-[2deg]
                         bg-[#0d0f20] shadow-[0_0_20px_rgba(0,0,0,0.6)]
                         hover:shadow-[0_0_40px_8px_rgba(128,0,255,0.6)]
                         cursor-pointer
                         "
            >
              {/* İç content */}
              <div className="relative z-10 flex flex-col items-center justify-center w-full h-full rounded-[16px] border border-[#1d1d1d] text-white/85 p-6">
                <p className="text-xl text-center font-semibold text-[#e5e7ff]">
                  {item.title}
                </p>
                <p className="text-xs text-[#b8bbe0] mt-[-4px] self-end mr-4">
                  Education
                </p>
                <p className="text-base text-[#d7daff] mt-auto mb-1">
                  {item.institution}
                </p>
                <p className="text-[14px] text-gray-300 opacity-90 leading-snug text-center">
                  {item.description}
                </p>
                <p className="text-xs text-gray-400 mt-2">{item.year}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SectionWrapper(Education, "work");
