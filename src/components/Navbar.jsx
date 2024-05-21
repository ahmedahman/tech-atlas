import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py- 2 md:px-10 md:py-4 sm:px-12 sm:py-2 xs:px-6 justify-between items-center navbar rounded-b-5xl bg-primary">
      <img src={logo} alt="tech_atlas" className="w-[39px] h-[39.63px] sm:w-[49px] sm:h-[49.63px] md:w-[59px] md:h-[59.63px] lg:mx-20 mx-10 my-3 md:ml-2"/>

      <ul className="list-none md:flex hidden justify-center items-center rounded-full bg-navlinks py-3 px-10 ml-10 md:ml-0">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-medium cursor-pointer text-[14px] lg:text-[16px] md:w-full ${
              active === nav.title ? "text-secondary" : "text-white"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <button className="md:flex hidden font-montserrat font-medium cursor-pointer text-[14px] px-8 py-3 lg:mr-20 bg-secondary text-white rounded-full hover:bg-white hover:text-primary">Submit Data</button>

      <div className="md:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] object-contain mr-14 cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-secondary absolute top-20 right-0 mx-4 mt-2 pb-1 min-w-[140px] rounded-xl sidebar flex-col z-20`}
        >
          <ul className="list-none flex justify-end items-center flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-montserrat font-medium cursor-pointer text-[16px] px-9 ${
                  active === nav.title ? "text-primary" : "text-black"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          <ul className="list-none flex justify-end items-end pt-3 mb-0">
    <li className="font-montserrat font-medium cursor-pointer text-[16px] text-white mb-4">
      <button className="px-5 py-3 bg-primary text-white rounded-full hover:bg-primary-dark">Submit Data</button>
    </li>
  </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
