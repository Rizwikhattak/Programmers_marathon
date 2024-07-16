import React, { useEffect, useState } from "react";
import CircleAboutImg from "../Assets/circleAboutImg.png";
import MainAboutImg from "../Assets/MainAboutImg.png";
import headphones from "../Assets/headphones.png";
import { IoMdCheckboxOutline } from "react-icons/io";
import CountUp from "react-countup";

const About = () => {
  const [state1, setState1] = useState();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop >= 800) {
        setState1(<CountUp end={56} duration={3} />);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="About-Section px-5 mdsm:px-12 py-24 text-white bg-[#242424] h-full w-full flex flex-col lg:flex-row gap-y-16 mdsm:gap-y-10 lg:gap-x-10 justify-center lg:justify-normal">
      <div className="about-images w-full lg:w-1/2 relative flex flex-col justify-center">
        <div className="about-img-1 pl-5 w-full">
          <img src={MainAboutImg} alt="" className="w-full" />
        </div>
        <div className="about-img-2 bg-white inline-block p-2 mdsm:p-3 absolute top-40 mdsm:top-60 sm:top-72 md:top-96 lg:top-72 left-0">
          <div className="black-border border-[5px] mdsm:border-[15px] border-black py-2 pr-2 mdsm:py-5 mdsm:pr-5">
            <div className="count-up-content flex gap-x-5 mdsm:gap-x-10">
              <div
                className="stick text-white bg-[#FFAB17] flex items-center justify-center"
                style={{
                  clipPath:
                    "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)",
                }}
              >
                <h1 className="flex items-center pl-2 mdsm:pl-4 pr-3 mdsm:pr-5 py-1 mdsmpy-2 relative mr-2 mdsm:mr-4 text-md mdsm:text-2xl font-bold text-center">
                  {state1} +
                </h1>
              </div>

              <img src={headphones} alt="" />
            </div>
            <div className="pt-2 mdsm:pt-5">
              <h1 className="text-[#FFAB17] text-md mdsm:text-xl font-bold text-center">
                Experience
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="about-content relative w-full lg:w-1/2 pr-0 mdsm:pr-10">
        <div className="content-img absolute right-0 top-0">
          <img src={CircleAboutImg} alt="" />
        </div>
        <div className="about-all-content">
          <h1 className="flex text-[#FFAB17] text-xl mdsm:text-2xl items-center py-2 relative mr-0 mdsm:mr-4">
            <span className="h-3 w-3 bg-[#FFAB17] rounded-full mr-3"></span>
            About Our Company
          </h1>
          <h1 className="font-semibold text-2xl mdsm:text-4xl py-2">
            About 26+ Experience Hands Such As Front Admin
          </h1>
          <p className="text-md py-3">
            In job gives you handcrafted options such as front admin in this
            reviews or email notifications. It also gives employers the best
            management for apps and social media in the area.
          </p>
          <div className="check-boxes flex items-center gap-x-1 mdsm:gap-x-12 py-7">
            <div className="check-boxes-col-1">
              <h1 className="my-5 text-sm mdsm:text-md">
                <span className="text-[#FFAB17] mr-1 mdsm:mr-3">
                  <IoMdCheckboxOutline className="w-5 h-5 inline-block" />
                </span>
                Business ndisse suscipit
              </h1>
              <h1 className="my-5 text-sm mdsm:text-md">
                <span className="text-[#FFAB17] mr-1 mdsm:mr-3">
                  <IoMdCheckboxOutline className="w-5 h-5 inline-block" />
                </span>
                We give management
              </h1>
              <h1 className="my-5 text-sm mdsm:text-md">
                <span className="text-[#FFAB17] mr-1 mdsm:mr-3">
                  <IoMdCheckboxOutline className="w-5 h-5 inline-block" />
                </span>
                Media area the solution.
              </h1>
            </div>
            <div className="check-boxes-col-2">
              <h1 className="my-5 text-sm mdsm:text-md">
                <span className="text-[#FFAB17] mr-1 mdsm:mr-3">
                  <IoMdCheckboxOutline className="w-5 h-5 inline-block" />
                </span>
                Business ndisse suscipit
              </h1>
              <h1 className="my-5 text-sm mdsm:text-md">
                <span className="text-[#FFAB17] mr-1 mdsm:mr-3">
                  <IoMdCheckboxOutline className="w-5 h-5 inline-block" />
                </span>
                We give management
              </h1>
              <h1 className="my-5 text-sm mdsm:text-md">
                <span className="text-[#FFAB17] mr-1 mdsm:mr-3">
                  <IoMdCheckboxOutline className="w-5 h-5 inline-block" />
                </span>
                Media area the solution.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
