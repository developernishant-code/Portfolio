import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "react-icons/ri";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className="relative">
      {/* Header */}
      <nav className="flex justify-between items-center text-white px-10 pt-6 md:px-20">
        <span className="text-xl font-bold tracking-wide">Portfolio</span>

        {menu ? (
          <RiCloseLine
            size={30}
            className="md:hidden cursor-pointer"
            onClick={() => setMenu(false)}
          />
        ) : (
          <RiMenu2Line
            size={30}
            className="md:hidden cursor-pointer"
            onClick={() => setMenu(true)}
          />
        )}
      </nav>

      {/* MENU (Header ke neeche) */}
      <ul
        className={`
          md:hidden
          bg-black bg-opacity-90 mx-4 mt-3 rounded-xl px-6 py-4
          font-semibold space-y-3 text-left
          transition-all duration-300 ease-in-out
          ${menu ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"}
        `}
      >
        <a href="#About" onClick={() => setMenu(false)}>
          <li className="text-white">About</li>
        </a>
        <a href="#Experience" onClick={() => setMenu(false)}>
          <li className="text-white">Experience</li>
        </a>
        <a href="#Projects" onClick={() => setMenu(false)}>
          <li className="text-white">Projects</li>
        </a>
        <a href="#Footer" onClick={() => setMenu(false)}>
          <li className="text-white">Contact</li>
        </a>
      </ul>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex gap-6 font-semibold absolute right-20 top-6 text-white">
        <li>About</li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </header>
  );
};

export default Header;
