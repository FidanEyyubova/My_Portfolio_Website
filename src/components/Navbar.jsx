import React, { useState } from "react";
import { navLinks } from "../constants";
import { close, menu } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`!sm:px-15 !px-5 
      w-full flex items-center 
      !py-6 fixed top-0 z-20 bg-[#040412]`}
    >
      <div
        className="w-full flex justify-end items-center
      max-w-7xl mx-auto"
      >
        {/* Desktop Menu */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`relative group 
                ${active === link.title ? "text-white" : "text-[#9c9a9a]"}
                hover:text-white 
                text-[20px]
                font-medium
                cursor-pointer
                transition duration-300 ease-in-out
              `}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
              <span
                className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#653bd9] transition-all duration-300 group-hover:w-full"
              ></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center cursor-pointer relative">
  <img
    src={toggle ? close : menu}
    alt="menu"
    className="w-[28px] h-[28px] object-contain z-20"
    onClick={() => setToggle(!toggle)}
  />

  <div
className={`absolute top-14 right-0 mx-4 my-2  p-6 min-w-[150px]  bg-[#151526] z-10 rounded
      transform transition-all duration-500 ease-in-out origin-top
      ${toggle ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-0 invisible"}`}
  >
    <ul className="list-none flex justify-end items-center flex-1 flex-col gap-4">
      {navLinks.map((nav) => (
        <li
          key={nav.id}
          className={`relative group 
            text-[18px] font-semibold
            cursor-pointer transition duration-300 ease-in-out 
            ${active === nav.title ? "text-white" : "text-[#9c9a9a]"} 
            hover:text-white`}
          onClick={() => {
            setToggle(false);
            setActive(nav.title);
          }}
        >
          <a href={`#${nav.id}`}>{nav.title}</a>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#653bd9] transition-all duration-300 group-hover:w-full"></span>
        </li>
      ))}
    </ul>
  </div>
</div>

      </div>
    </nav>
  );
};

export default Navbar;
