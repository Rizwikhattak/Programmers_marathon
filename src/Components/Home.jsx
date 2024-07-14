import React from "react";

const Home = () => {
  return (
    <section className="Home-page text-white bg-[#242424] h-96 w-full flex p-5">
      <div className="home-content">
        <div className="stick-content">
          <div
            className="stick bg-white text-[#FFAB17] py-3 px-5"
            style={{
              clipPath: "polygon(0 0, 0% 100%, 100% 50%)",
            }}
          >
            <h1>
              <span className="w-5 h-5 rounded-full bg-[#FFAB17]"></span>{" "}
              Welcome to nosie
            </h1>
          </div>
        </div>
      </div>
      <div className="home-images"></div>
    </section>
  );
};

export default Home;
