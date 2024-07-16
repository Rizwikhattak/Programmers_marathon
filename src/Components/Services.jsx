import React from "react";
import { RiComputerLine } from "react-icons/ri";
import { HiSpeakerphone } from "react-icons/hi";
import { ImStatsBars2 } from "react-icons/im";
import servicesMainImg from "../Assets/servicesMainImg.png";
import servicesCaroouselImg_1 from "../Assets/servicesCarouselmg_1.jpeg";
import servicesCaroouselImg_2 from "../Assets/servicesCarouselImg_2.jpeg";
import servicesCaroouselImg_3 from "../Assets/servicesCarouselImg_3.jpeg";
const Services = () => {
  return (
    <section className="services-page w-full h-full bg-[#242424]">
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
      <div className="services-carousel p-5 flex gap-5">
        {carouselData.map((currElem, cur) => {
          return (
            <div className="group carousel-card w-[33%] text-black bg-white rounded-lg transition duration-500 ease-in-out">
              <div className="carImg block group-hover:hidden transition duration-500 ease-in-out">
                <img src={currElem.carouselImg} alt="" className="rounded-lg" />
              </div>
              <div className="carousel-content p-5 block group-hover:hidden ">
                <div className="logo-content flex justify-center items-center gap-4 pb-4">
                  <div className="logo-car flex justify-center items-center bg-[#FFAB17]   rounded-full w-12 h-12 text-white">
                    <currElem.carouselIcon className="w-5 h-5" />
                  </div>
                  <div className="logo-car-content ">
                    <h1 className="text-bol">{currElem.carouselTitle}</h1>
                  </div>
                </div>
                <div className="carouselDescription">
                  <p className="text-sm font-thin">
                    {currElem.carouselDescription}
                  </p>
                </div>
              </div>
              <div
                className="hover-content hidden group-hover:block p-5 h-full w-full  text-white transition duration-500 ease-in-out rounded-lg bg-center bg-cover opacity-50 bg-[#FFAB17]"
                style={{
                  backgroundImage: `url(${currElem.carouselImg})`,
                  backgroundColor: "#FFAB17",
                }}
              >
                <div className="logo-car flex justify-center items-center bg-black   rounded-full w-12 h-12 text-white border-2 border-white mt-5">
                  <currElem.hoverIcon className="w-5 h-5" />
                </div>
                <div className="hover-data py-3">
                  <button className="pt-3 font-bold hover:text-black transition duration-500 ease-in-out">
                    {currElem.carouselTitle}
                  </button>
                  <p className="py-3 text-sm font-thin">
                    {currElem.hoverDescription}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const carouselData = [
  {
    carouselImg: servicesCaroouselImg_1,
    carouselIcon: RiComputerLine,
    carouselTitle: "Computer Solution",
    carouselDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eveniet in voluptatem totam id molestiae, fugit reiciendis placeat dolorem quas.",
    hoverIcon: HiSpeakerphone,
    hoverDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eveniet in voluptatem totam id molestiae, fugit reiciendis placeat dolorem quas.",
  },
  {
    carouselImg: servicesCaroouselImg_2,
    carouselIcon: HiSpeakerphone,
    carouselTitle: "Product to Satelite",
    carouselDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eveniet in voluptatem totam id molestiae, fugit reiciendis placeat dolorem quas.",
    hoverIcon: HiSpeakerphone,
    hoverDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eveniet in voluptatem totam id molestiae, fugit reiciendis placeat dolorem quas.",
  },
  {
    carouselImg: servicesCaroouselImg_3,
    carouselIcon: ImStatsBars2,
    carouselTitle: "Computer Solution",
    carouselDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eveniet in voluptatem totam id molestiae, fugit reiciendis placeat dolorem quas.",
    hoverIcon: HiSpeakerphone,
    hoverDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eveniet in voluptatem totam id molestiae, fugit reiciendis placeat dolorem quas.",
  },
  //   {
  //     carouselImg: servicesCaroouselImg_1,
  //     carouselIcon: RiComputerLine,
  //     carouselTitle: "Computer Solution",
  //     carouselDescription:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eveniet in voluptatem totam id molestiae, fugit reiciendis placeat dolorem quas.",
  //     hoverIcon: HiSpeakerphone,
  //     hoverDescription:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eveniet in voluptatem totam id molestiae, fugit reiciendis placeat dolorem quas.",
  //   },
  //   {
  //     carouselImg: servicesCaroouselImg_2,
  //     carouselIcon: HiSpeakerphone,
  //     carouselTitle: "Product to Satelite",
  //     carouselDescription:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eveniet in voluptatem totam id molestiae, fugit reiciendis placeat dolorem quas.",
  //     hoverIcon: HiSpeakerphone,
  //     hoverDescription:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eveniet in voluptatem totam id molestiae, fugit reiciendis placeat dolorem quas.",
  //   },
  //   {
  //     carouselImg: servicesCaroouselImg_3,
  //     carouselIcon: ImStatsBars2,
  //     carouselTitle: "Computer Solution",
  //     carouselDescription:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eveniet in voluptatem totam id molestiae, fugit reiciendis placeat dolorem quas.",
  //     hoverIcon: HiSpeakerphone,
  //     hoverDescription:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eveniet in voluptatem totam id molestiae, fugit reiciendis placeat dolorem quas.",
  //   },
];

export default Services;
