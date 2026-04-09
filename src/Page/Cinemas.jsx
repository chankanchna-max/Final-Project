import React from "react";
import { Link } from "react-router-dom";
import { card, cinemas, comnig } from "../data/Data";
import Card from "../components/Card";
import { MdLocationOn } from "react-icons/md";
function Cinemas() {
  return (
    <div className="w-full mt-30">
      <img
        className="w-full  sm:w-9/12 sm:mt-10 mx-auto sm:rounded-2xl object-cover "
        src="https://media-legend.sgp1.digitaloceanspaces.com/legend-prod/5840e6b4-8923-4eee-894d-f98581885ad4.jpeg"
        alt="Legend Image"
      />
      <div className="w-11/12 m-auto min-h-screen text-white px-4 sm:px-6 md:px-10 py-6 md:py-10">
        <div className="flex items-center gap-4 sm:gap-6 text-lg sm:text-xl md:text-4xl font-semibold mb-6 md:mb-8">
          <h1 className="text-white">Cinema:</h1>
        </div>
        {/* Card */}
        <div className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4 sm:gap-6">
          {cinemas.map((c) => (
            <div className="rounded-xl p-5 hover:scale-95 duration-300 transition-all shadow-2xl ">
              <img
                src={c["img"]}
                className="rounded-xl w-full h-[220px] sm:h-[120px] md:h-[300px] object-cover"
              />
              <h1 className="text-m mt-3 text-gray-300">{c["locat"]}</h1>
              <h1 className="flex mt-2 text-m gap-1 text-white">
                {" "}
                <MdLocationOn
                  size={20}
                  className="text-red-700
                "
                />
                {c["location"]}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cinemas;
