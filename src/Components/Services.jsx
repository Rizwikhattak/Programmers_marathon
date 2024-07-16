import React from "react";
import servicesMainImg from "../Assets/servicesMainImg.png";
const Services = () => {
  return (
    <section className="services-page w-full h-full">
      <div
        className="services-content bg-cover bg-center w-full h-72 flex flex-col gap-5 justify-center items-center"
        style={{
          backgroundImage: `url(${servicesMainImg})`,
        }}
      >
        <h1 className="flex text-[#FFAB17] text-xl items-center px-4 py-2 relative mr-4 font-bold">
          <span className="h-3 w-3 bg-[#FFAB17] rounded-full mr-3"></span>
          WHAT WE DO
        </h1>
        <h1 className="text-3xl text-white">We High Service That Stand</h1>
      </div>
    </section>
  );
};

export default Services;
