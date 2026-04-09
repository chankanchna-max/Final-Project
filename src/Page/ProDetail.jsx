import React from "react";
import { Link, useParams } from "react-router-dom";
import { event } from "../data/Data";

const ProDetail = () => {
  const { id } = useParams();
  console.log(id);
  console.log(event);
  const findeEvent = event.find((c) => c.id == id);
  console.log(findeEvent);

  return (
    <div className="w-full mt-30 mb-10">
      <div className="w-full  sm:w-9/12 sm:mt-10 mx-auto sm:rounded-2xl ">
        <h1 className="text-white sm:gap-6 text-lg sm:text-xl md:text-3xl font-semibold mb-2 md:mb-2">
          {findeEvent.title}
        </h1>
        <p className="text-white mb-5">
          Publish Date: {findeEvent.PublishDate}
        </p>

        <img
          className="sm:rounded-2xl object-cover "
          src={findeEvent.img}
          alt="Legend Image"
        />

        <p className="text-white mb-5 w-5/12 mt-10">{findeEvent.text}</p>
      </div>
    </div>
  );
};

export default ProDetail;
