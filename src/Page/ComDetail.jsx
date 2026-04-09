import React from "react";
import {
  FaPlay,
  FaCalendarAlt,
  FaClock,
  FaStar,
  FaGlobe,
  FaClosedCaptioning,
} from "react-icons/fa";
import { IoNewspaper } from "react-icons/io5";
import { comnig } from "../data/Data";
import { useParams } from "react-router-dom";

const ComDetail = () => {
  const { id } = useParams();
  console.log(id);
  console.log(comnig);
  const findeComnig = comnig.find((c) => c.id == id);
  console.log(findeComnig);

  return (
    <div className="mt-20 min-h-screen bg-[#0b0d11] text-white font-sans">
      <div className="relative h-[300px] md:h-[700px] w-full">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d11] via-[#0b0d11]/50 to-transparent z-10" />
        <img
          src={findeComnig.img}
          alt="backdrop"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 -mt-20 md:-mt-40 relative z-20 pb-20">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="w-56 md:w-80 flex-shrink-0 mx-auto md:mx-0">
            <button className="w-full mt-5 bg-red-600 py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-red-700 transition">
              <FaPlay size={14} /> WATCH TRAILER
            </button>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-6xl font-black mb-4 tracking-tight uppercase">
              {findeComnig.title}
            </h1>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6 items-center text-sm md:text-base">
              <span className="bg-red-600 px-2 py-0.5 rounded font-bold">
                2D/3D
              </span>
              <div className="flex items-center gap-1.5 text-gray-300 border-l border-gray-700 pl-4">
                <FaCalendarAlt className="text-red-600" /> {findeComnig.date}
              </div>
              <div className="flex items-center gap-1.5 text-gray-300 border-l border-gray-700 pl-4">
                <FaClock className="text-red-600" /> {findeComnig.time}
              </div>
              <div className="flex items-center gap-1.5 text-gray-300 border-l border-gray-700 pl-4">
                <IoNewspaper className="text-red-600" /> {findeComnig.genre}
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-100 mb-2">
                Description
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-lg max-w-2xl mx-auto md:mx-0">
                {findeComnig.detail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComDetail;
