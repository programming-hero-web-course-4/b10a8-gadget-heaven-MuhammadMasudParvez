import React from "react";

const Heading = ({ title, description }) => {
  return (
    <div className="bg-[#9538E2] h-64">
      <div className="w-11/12 mx-auto text-center text-white">
        <h1 className="pt-8 text-4xl font-bold">{title}</h1>
        <p className="w-[796px] mx-auto pt-2">{description}</p>
      </div>
    </div>
  );
};

export default Heading;
