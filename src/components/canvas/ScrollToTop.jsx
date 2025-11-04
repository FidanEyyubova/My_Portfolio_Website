"use client"
import React, { useState, useEffect } from "react";
import { IoMdArrowUp } from "react-icons/io";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <button
        onClick={scrollToTop}
        className={`
          fixed bottom-5 right-5 z-50 w-10 h-10 bg-[#653bd9]  text-white rounded-full
          flex items-center justify-center shadow-lg cursor-pointer
          transition-all duration-300 hover:w-12 hover:h-12
          ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}
        `}
      >
        <IoMdArrowUp size={24} />
      </button>
    </div>
  );
};

export default ScrollToTop;
