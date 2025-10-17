import React, { useState } from "react";
import styles from "../styleS";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <nav
      className={`!sm:px-16 !px-6 
      w-full flex items-center 
      !py-5 fixed top-0 z-20  bg-blue-950`}
    >
      <div
        className="w-full flex justify-end items-center
      max-w-7xl mx-auto
      "
      >
        <div className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`
    ${active === Link.title ? "text-white" : "text-[#9c9a9a]"}
    hover:text-white 
    text-[18px]
    font-medium 
    cursor-pointer
    transition 
    duration-300 
    ease-in-out
  `}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
