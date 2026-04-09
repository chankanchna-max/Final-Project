import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered, FaTag } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { MdFastfood, MdLocationOn } from "react-icons/md";

function Header() {
  const [toggle, setToggle] = useState(false);

  // Disable scroll when menu open
  useEffect(() => {
    document.body.style.overflow = toggle ? "hidden" : "auto";
  }, [toggle]);

  return (
    <div className="h-20 backdrop-blur-lg shadow-md border-b border-red-700 fixed top-0 left-0 w-full z-50">
      <div className="h-full m-auto w-5/6 flex items-center justify-between">
        <img
          className="h-10"
          src="https://www.legend.com.kh/_ipx/s_117x44/legend-cinema-logo.png"
          alt="Logo"
        />

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex gap-5 text-white">
            <li className="bg-red-500/20 backdrop-blur-md py-2 px-5 rounded-md uppercase font-medium hover:text-red-300 transition">
              <Link to="/" className="flex gap-2">
                <FaHome size={18} className="mt-1" /> Home
              </Link>
            </li>
            <li className="bg-red-500/20 backdrop-blur-md py-2 px-5 rounded-md uppercase font-medium hover:text-red-300 transition">
              <Link to="cinemas/" className="flex gap-2">
                <MdLocationOn size={20} /> Cinemas
              </Link>
            </li>
            <li className="bg-red-500/20 backdrop-blur-md py-2 px-5 rounded-md uppercase font-medium hover:text-red-300 transition">
              <Link to="offers/" className="flex gap-2">
                <FaTag size={16} className="mt-1" /> Offers
              </Link>
            </li>
            <li className="bg-red-500/20 backdrop-blur-md py-2 px-5 rounded-md uppercase font-medium hover:text-red-300 transition">
              <Link to="fb/" className="flex gap-2">
                <MdFastfood size={20} /> F&B
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <FaBarsStaggered
            className="text-3xl text-white cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-2/3 h-screen z-50 transition-all duration-300 transform ${
          toggle ? "translate-x-0" : "-translate-x-full"
        } bg-red-950/70 backdrop-blur-md mt-20`}
      >
        <ul className="flex flex-col gap-5 text-white p-6">
          <li>
            <Link
              to="/"
              onClick={() => setToggle(false)}
              className="flex gap-2 py-2 px-4 rounded-lg hover:bg-white/10 transition"
            >
              <FaHome size={18} /> Home
            </Link>
          </li>
          <li>
            <Link
              to="cinemas/"
              onClick={() => setToggle(false)}
              className="flex gap-2 py-2 px-4 rounded-lg hover:bg-white/10 transition"
            >
              <MdLocationOn size={20} /> Cinemas
            </Link>
          </li>
          <li>
            <Link
              to="offers/"
              onClick={() => setToggle(false)}
              className="flex gap-2 py-2 px-4 rounded-lg hover:bg-white/10 transition"
            >
              <FaTag size={16} /> Offers
            </Link>
          </li>
          <li>
            <Link
              to="fb/"
              onClick={() => setToggle(false)}
              className="flex gap-2 py-2 px-4 rounded-lg hover:bg-white/10 transition"
            >
              <MdFastfood size={20} /> F&B
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
