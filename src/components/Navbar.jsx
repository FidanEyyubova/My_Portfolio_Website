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
      !py-5 fixed top-0 z-20  bg-[#050816]`}
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
    font-semibold 
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
        <div className='sm:hidden flex flex-1 justify-end items-center cursor-pointer'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } !p-6 bg-orange-500 absolute top-15 right-0 mx-4 my-2 min-w-[140px] z-10`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={` hover:text-white 
    text-[18px]
    font-semibold 
    cursor-pointer
    transition 
    duration-300 
    ease-in-out ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
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
