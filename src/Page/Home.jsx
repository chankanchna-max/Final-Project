import React from "react";
import { Link } from "react-router-dom";
import { card } from "../data/Data";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="w-full mt-30">
      <img
        className="w-full  sm:w-9/12 sm:mt-10 mx-auto sm:rounded-2xl object-cover "
        src="https://media-legend.sgp1.digitaloceanspaces.com/legend-prod/2e5a97ef-b988-4467-9f7b-2f7a0531d198.jpeg"
        alt="Legend Image"
      />
      <div className="w-11/12 m-auto min-h-screen text-white px-4 sm:px-6 md:px-10 py-6 md:py-10">
        <div className="flex items-center gap-4 sm:gap-6 text-lg sm:text-xl md:text-4xl font-semibold mb-6 md:mb-8">
          <h1 className="text-white bg-red-500/20 backdrop-blur-md py-2 px-5 rounded-full">
            Now Showing
          </h1>
          <h1 className="text-gray-500">|</h1>
          <Link to={"coming/"} className="text-gray-400">
            Coming Soon
          </Link>
        </div>
        {/* Card */}
        <div className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {card.map((c) => (
            // <div className="rounded-xl p-5 hover:scale-95 duration-300 transition-all shadow-2xl ">
            //   <img
            //     src={c["img"]}
            //     className="rounded-xl w-full h-[320px] sm:h-[320px] md:h-[400px] object-cover"
            //   />
            //   <h1 className="text-m mt-3 text-gray-300">07 Apr 2026</h1>
            //   <h1 className="text-m  text-white">Scare Out</h1>
            // </div>

            <Link key={c.id} to={`/detail/${c["id"]}`}>
              <Card title={c.title} img={c.img} date={c.date} />
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4 sm:gap-6 text-lg sm:text-xl md:text-3xl font-semibold mb-6 md:mb-8">
          <h1 className="text-white mt-20">What's new?</h1>
        </div>
      </div>
      <img
        className="w-full mb-10 sm:w-9/12 sm:mt-10 mx-auto sm:rounded-2xl object-cover "
        src="https://media-legend.sgp1.digitaloceanspaces.com/legend-prod/4dd2b7d3-8943-4fd4-b173-6a54c88172ff.jpeg"
        alt="Legend Image"
      />
    </div>
  );
};

export default Home;
