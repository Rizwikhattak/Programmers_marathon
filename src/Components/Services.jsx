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
      <div className="services-carousel p-5">
        {carouselData.map((currElem, cur) => {
          <div className="carousel-card">
            <div className="carImg">
              <img src={currElem.carouselImg} alt="" />
            </div>
            <div className="carousel-content">
              <div className="logo-content">
                <currElem.carouselIcon />
                {currElem.carouselTitle}
              </div>
              <div className="carouselDescription">
                {currElem.carouselDescription}
              </div>
            </div>
          </div>;
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
];

export default Services;
