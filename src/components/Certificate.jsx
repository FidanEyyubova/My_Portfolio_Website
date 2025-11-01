
import { motion } from "framer-motion";
import { experiences } from "../constants";
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
        <p className={`sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center`}>
          What I have done so far
        </p>
        <h2 className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <div className="border-t border-b py-2">
        <Marquee gradient={false} speed={50}>
          {certificates.map((cert, index) => (
            <span key={index} className="mr-8 font-medium">
              {cert}
            </span>
          ))}
        </Marquee>
      </div>
      </div>
    </>
  );
};

export default SectionWrapper(Certificate, "work");