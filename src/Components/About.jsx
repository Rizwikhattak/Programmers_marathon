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
    <section className="About-Section text-white bg-[#242424] h-full w-full flex px-12 py-24 gap-x-10">
      <div className="about-images w-[50%] relative">
        <div className="about-img-1 pl-5">
          <img src={MainAboutImg} alt="" />
        </div>
        <div className="about-img-2 bg-white inline-block p-3 absolute top-72 left-0">
          <div className="black-border border-[15px] border-black py-5 pr-5">
            <div className="count-up-content flex gap-x-10">
              <div
                className="stick text-white bg-[#FFAB17]"
                style={{
                  clipPath:
                    "polygon(0% 0%, 75% 0%, 100% 50%,75% 100%, 0% 100%)",
                }}
              >
                <h1 className="flex  items-center pl-4 pr-5 py-2 relative mr-4 text-2xl font-bold">
                  {state1} +
                </h1>
              </div>

              <img src={headphones} alt="" />
            </div>
            <div className="pt-5">
              <h1 className="text-[#FFAB17] text-xl font-bold text-center">
                Experience
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="about-content relative w-[50%] pr-10">
        <div className="content-img absolute right-0 top-0">
          <img src={CircleAboutImg} alt="" />
        </div>
        <div className="about-all-content">
          <h1 className="flex text-[#FFAB17] text-2xl  items-center py-2 relative mr-4">
            <span className="h-3 w-3 bg-[#FFAB17] rounded-full mr-3"></span>
            About Our Company
          </h1>
          <h1 className=" font-semibold text-4xl py-2 ">
            About 26+ Experience Hands Such As Front Admin
          </h1>
          <p className="text-md py-3">
            In job gives you handcrafted options such as front adm in this
            reviews or email notifications. It also gives employer best
            management fo apps ial media in area.
          </p>
          <div className="check-boxes flex items-center gap-x-12 py-7">
            <div className="check-boxes-col-1">
              <h1 className="my-5">
                <span className="text-[#FFAB17] mr-3">
                  <IoMdCheckboxOutline className="w-5 h-5 inline-block" />
                </span>
                Business ndisse suscipit
              </h1>
              <h1 className="my-5">
                <span className="text-[#FFAB17] mr-3">
                  <IoMdCheckboxOutline className="w-5 h-5 inline-block" />
                </span>
                We gives management
              </h1>
              <h1 className="my-5">
                <span className="text-[#FFAB17] mr-3">
                  <IoMdCheckboxOutline className="w-5 h-5 inline-block" />
                </span>
                Media area the solution.
              </h1>
            </div>
            <div className="check-boxes-col-2">
              <h1 className="my-5">
                <span className="text-[#FFAB17] mr-3">
                  <IoMdCheckboxOutline className="w-5 h-5 inline-block" />
                </span>
                Business ndisse suscipit
              </h1>
              <h1 className="my-5">
                <span className="text-[#FFAB17] mr-3">
                  <IoMdCheckboxOutline className="w-5 h-5 inline-block" />
                </span>
                We gives management
              </h1>
              <h1 className="my-5">
                <span className="text-[#FFAB17] mr-3">
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
