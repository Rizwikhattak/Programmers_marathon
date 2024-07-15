import React from "react";
import Button from "./Utility Components/Button";
import homeImageMain from "../Assets/HomeImgMain.png";
import homeImage_1 from "../Assets/HomeImg_1.png";
import { FaCirclePlay } from "react-icons/fa6";
import "./Home.css";

const Home = () => {
  return (
    <section className="Home-page text-white bg-[#242424] h-full w-full flex px-14 py-24 gap-x-5">
      <div className="home-content pl-4 w-[100%] flex-grow-[2]">
        <div className="stick-content inline-block">
          <div
            className="stick bg-white text-[#FFAB17]"
            style={{
              clipPath: "polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)",
            }}
          >
            <h1 className="flex bg-white items-center px-4 py-2 relative mr-4">
              <span className="h-3 w-3 bg-[#FFAB17] rounded-full mr-3"></span>
              Welcome to nosie
            </h1>
          </div>
        </div>
        <div>
          <div className="left-home-content py-10">
            <h1 className="text-6xl font-bold py-5">
              IT-Solution For Optimize Systems.
            </h1>
            <p className="text-xl py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              inventore blanditiis quod consectetur placeat labore optio maiores
              quos quo voluptas.
            </p>
            <div className="buttons-home py-10 flex gap-x-10 relative">
              <button>
                <Button content="Contact Us" a />
              </button>
              <button className="ripple-button">
                <FaCirclePlay className="w-14 h-14 bg-[#FFAB17] text-white rounded-full hover:bg-white hover:text-[#FFAB17] transition duration-300 ease-in-out relative" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-images w-100% flex-grow relative">
        <div className="img-home-2 absolute right-0 top-0 z-10">
          <img src={homeImage_1} alt="" className="w-40" />
        </div>
        <div className="img-home-1 hidden mlg:block h-full z-20 w-full relative">
          <img src={homeImageMain} alt="" className="w-full" />
          <button className="px-[1.69rem] py-[0.79rem] rounded-2xl bg-[#FFAB17] content-center text-center hover:bg-opacity-80 hover:bg-white hover:text-[#FFAB17]  transition duration-300 ease-in-out absolute left-0 bottom-[32%] z-30 bg-opacity-80">
            25,200 Clients Solution
          </button>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default Home;
