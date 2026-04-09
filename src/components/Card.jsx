import React from "react";

const Card = ({ title, img, date }) => {
  return (
    <div className="rounded-xl p-5 hover:scale-95 duration-300 transition-all shadow-2xl ">
      <img
        src={img}
        className="rounded-xl w-full h-[320px] sm:h-[320px] md:h-[400px] object-cover"
      />
      <h1 className="text-m mt-3 text-gray-300">{date}</h1>
      <h1 className="text-m  text-white">{title}</h1>
    </div>
  );
};

export default Card;
