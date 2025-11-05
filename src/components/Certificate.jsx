import { motion } from "framer-motion";
import { SectionWrapper } from "../section";
import { textVariant } from "../utils/motion";
import Marquee from "react-fast-marquee";
import { certificates } from "../constants";

const Certificate = () => {


  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center">
          What I have done so far
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
          Qualifications.
        </h2>
      </motion.div>

      <div className="mt-10 relative flex flex-col items-center justify-center w-full overflow-hidden">
        {/* Top Gradient Overlay */}
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-linear-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-linear-to-l from-primary"></div>

        {/* Marquee Container */}
        <div className="w-full py-4">
          <Marquee pauseOnHover gradient={false} speed={50}>
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-[#0d0f20] h-40 w-80 p-5 mr-6 rounded-xl border border-gray-50/10 bg-linear-to-r from-indigo to-storm hover:bg-royal hover:scale-90 transition-transform duration-300 cursor-pointer text-white font-medium"
              >
                 <p className="text-xl text-[#d7daff] mb-1">
                  {cert.title}
                </p>
                 <p className="text-xs text-[#b8bbe0] mt-[-4px] self-end mr-4 mb-3">
                  {cert.level}
                </p>
                <p className="text-[17px] text-gray-300 opacity-90 leading-snug text-center">
                  {cert.place}
                </p>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Certificate, "work");
