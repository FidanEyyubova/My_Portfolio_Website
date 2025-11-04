import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { services } from "../constants";
import { SectionWrapper } from "../section/index";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
     className="w-full bg-gradient-to-t from-blue-800 to-purple-800 p-[1px] rounded-[20px] shadow-card"


    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#0d0f20] rounded-[20px] py-5 px-12 min-h-[280px] flex  justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
          Introduction
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[#9c9a9a] text-[18px] max-w-3xl leading-[30px]"
      >
        I’m a passionate Front-End Developer who loves creating modern,
        responsive, and user-friendly websites. I enjoy turning ideas into
        smooth, visually appealing digital experiences. I care about details,
        love learning new things, and always look for ways to improve my work.
        My goal is to build web experiences that people enjoy using every day.
      </motion.p>

      <div className="mt-20 grid gap-10 
                grid-cols-1 
                sm:grid-cols-2 
                lg:grid-cols-4
                cursor-pointer
                ">
  {services.map((service, index) => (
    <ServiceCard key={service.title} index={index} {...service} />
  ))}
</div>
    </div>
  );
};

export default SectionWrapper(About, "about");
