import React from "react";
import { cinemas, event } from "../data/Data";
import { TiArrowRightThick } from "react-icons/ti";
const Fb = () => {
  return (
    <div className="w-full mt-30">
      <img
        className="w-full  sm:w-9/12 sm:mt-10 mx-auto sm:rounded-2xl object-cover "
        src="https://media-legend.sgp1.digitaloceanspaces.com/legend-prod/40de4c72-907a-4120-b70a-cb475690f888.jpeg"
        alt="Legend Image"
      />
      <div className="w-11/12 m-auto min-h-screen text-white px-4 sm:px-6 md:px-10 py-6 md:py-10">
        <div className="flex items-center gap-4 sm:gap-6 text-lg sm:text-xl md:text-4xl font-semibold mb-6 md:mb-8">
          <h1 className="text-white">Choose Cinema</h1>
        </div>
        {/* Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
          {cinemas.map((c) => (
            <button
              key={c.id}
              className="group flex items-center justify-between p-3 rounded-xl 
                       bg-white/5 border border-white/10 hover:bg-white/10 
                       hover:border-red-500/50 transition-all duration-300 text-left"
            >
              <div className="flex items-center gap-4">
                {/* Cinema Thumbnail */}
                <div className="w-16 h-12 rounded-lg overflow-hidden bg-gray-800">
                  <img
                    src={c.img}
                    alt={c.locat}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                </div>

                <h1 className="font-medium text-gray-200 group-hover:text-white">
                  {c.locat}
                </h1>
              </div>
              <TiArrowRightThick />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fb;
