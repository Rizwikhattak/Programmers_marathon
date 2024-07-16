import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiComputerLine } from "react-icons/ri";
import { HiSpeakerphone } from "react-icons/hi";
import { ImStatsBars2 } from "react-icons/im";
import servicesMainImg from "../Assets/servicesMainImg.png";
import servicesCaroouselImg_1 from "../Assets/servicesCarouselmg_1.jpeg";
import servicesCaroouselImg_2 from "../Assets/servicesCarouselImg_2.jpeg";
import servicesCaroouselImg_3 from "../Assets/servicesCarouselImg_3.jpeg";
const Services = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
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

      <div className="services-carousel p-5 flex gap-10 items-center justify-center">
        <Slider {...settings}>
          {carouselData.map((currElem, cur) => {
            return (
              <div className="group carousel-card w-[25%] h-[25%] text-black bg-white rounded-lg transition duration-500 ease-in-ou relative">
                <div className="carImg opacity-100 group-hover:opacity-0">
                  <img
                    src={currElem.carouselImg}
                    alt=""
                    className="rounded-lg w-full"
                  />
                </div>
                <div className="carousel-content p-5 opacity-100 group-hover:opacity-0 group-hover:bg-[#FFAB17]">
                  <div className="logo-content flex  items-center gap-4 pb-4">
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
                  className="hover-content p-5 h-full w-full absolute top-0 left-0 text-white transition duration-500 ease-in-out rounded-lg opacity-0 group-hover:opacity-100 bg-[#FFAB17]"
                  style={{
                    //   backgroundImage: `url(${currElem.carouselImg})`,
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
        </Slider>
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
