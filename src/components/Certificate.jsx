import { motion } from "framer-motion";
import { SectionWrapper } from "../section";
import { textVariant } from "../utils/motion";
import Marquee from "react-fast-marquee";

const Certificate = () => {
  const certificates = [
    "React Developer",
    "Frontend Development",
    "UI/UX Design",
    "JavaScript Mastery",
    "Next.js Specialist",
    "Tailwind CSS Expert",
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center">
          What I have done so far
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
          Work Experience.
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
                className="flex items-center justify-center h-40 w-80 mr-6 rounded-xl border border-gray-50/10 bg-linear-to-r from-indigo to-storm hover:bg-royal hover:scale-90 transition-transform duration-300 cursor-pointer text-white font-medium"
              >
                {cert}
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Certificate, "work");
