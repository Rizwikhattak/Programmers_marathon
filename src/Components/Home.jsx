import React from "react";
import Button from "./Utility Components/Button";
import homeImageMain from "../Assets/HomeImgMain.png";

const Home = () => {
  return (
    <section className="Home-page text-white bg-[#242424] h-full w-full flex justify-center items-center px-14 py-24">
      <div className="home-content px-5 w-[100%]  flex-grow-[2]">
        <div className="stick-content inline-block">
          <div
            className="stick bg-white text-[#FFAB17]"
            style={{
              clipPath: "polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)",
            }}
          >
            <h1 className="flex bg-white items-center px-4 py-2 relative mr-4">
              <span
                className="h-3 w-3 bg-[#FFAB17] rounded-full mr-3"
                style={
                  {
                    // clipPath: "circle(50% at 50% 50%)",
                  }
                }
              ></span>{" "}
              Welcome to nosie
            </h1>
          </div>
        </div>
        <div>
          <div className="left-home-content py-10">
            <h1 className=" text-7xl font-bold py-5">
              IT-Solution For Optimize Systems.
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              inventore blanditiis quod consectetur placeat labore optio maiores
              quos quo voluptas.
            </p>
            <div className="buttons-home py-5">
              <Button content="Contact Us" />
            </div>
          </div>
        </div>
      </div>
      <div className="home-images w-100% flex-grow">
        <div className="img-home-1">
          <img src={homeImageMain} alt="" className=" w-full" />
        </div>
      </div>
    </section>
  );
};

export default Home;
