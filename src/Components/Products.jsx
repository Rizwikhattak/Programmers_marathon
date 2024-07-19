import React, { useState, useRef } from "react";
import "./ProductsPage.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import ProductImg_1 from "../Assets/ProductImg_1.jpeg";
import ProductImg_2 from "../Assets/ProductImg_2.jpeg";
import ProductImg_3 from "../Assets/ProductImg_3.jpeg";
import Slider from "react-slick";

const Products = () => {
  const [checkCurrent, setCheckCurrent] = useState(1);
  const sliderRef = useRef(null);

  const handleClick = (index) => {
    setCheckCurrent(index);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <section className="product-page text-white bg-[#242424] h-full w-full">
      <div className="product-page-title p-10 flex justify-between items-center">
        <div className="headings-product">
          <h1 className="flex text-[#FFAB17] items-center px-4 py-2 relative mr-4">
            <span className="h-3 w-3 bg-[#FFAB17] rounded-full mr-3"></span>
            Our Projects
          </h1>
          <h1 className="font-bold text-4xl">We Case Studies Best Work</h1>
        </div>
        <ul className="buttons flex justify-between items-center gap-5">
          {["All Products", "Business", "Development", "Support"].map(
            (text, index) => (
              <li
                key={index}
                className={`underline-animationProducts ${
                  checkCurrent === index + 1 ? "underline-active" : ""
                }`}
              >
                <button
                  className={`font-bold text-xl`}
                  onClick={() => handleClick(index + 1)}
                >
                  {text}
                </button>
              </li>
            )
          )}
        </ul>
      </div>
      <div className="products-carousel p-5">
        <Slider ref={sliderRef} {...settings}>
          {productData.map((currElem, currIndex) => (
            <div
              className={`product-${currIndex + 1} relative`}
              key={currIndex}
            >
              <div>
                <img src={currElem.img} alt="" className="" />
              </div>
              <div className="products-content flex justify-between bg-white text-black p-5  rounded-xl">
                <div className="prod-content">
                  <h1 className="font-bold text-2xl">{currElem.title}</h1>
                  <p className="text-sm">{currElem.description}</p>
                </div>
                <div className="prod-icon">
                  <span className="group right-carousel-btn p-3 bg-white rounded-full flex justify-center items-center hover:bg-[#FFAB17] transition duration-300 ease-in-out cursor-pointer">
                    <button
                      className="right-btn p-1 bg-[#FFAB17] rounded-full text-white group-hover:bg-white group-hover:text-[#FFAB17] transition duration-300 ease-in-out"
                      onClick={handleNext}
                    >
                      <FaAngleRight />
                    </button>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex justify-end items-center pr-40">
          <div className="carousel-buttons flex items-center py-5">
            <span className="group left-carousel-btn p-3 mr-5 bg-white rounded-full flex justify-center items-center hover:bg-[#FFAB17] transition duration-300 ease-in-out cursor-pointer">
              <button
                className="left-btn p-1 bg-[#FFAB17] rounded-full text-white group-hover:bg-white group-hover:text-[#FFAB17] transition duration-300 ease-in-out"
                onClick={handlePrev}
              >
                <FaAngleLeft />
              </button>
            </span>

            <span className="group right-carousel-btn p-3 bg-white rounded-full flex justify-center items-center hover:bg-[#FFAB17] transition duration-300 ease-in-out cursor-pointer">
              <button
                className="right-btn p-1 bg-[#FFAB17] rounded-full text-white group-hover:bg-white group-hover:text-[#FFAB17] transition duration-300 ease-in-out"
                onClick={handleNext}
              >
                <FaAngleRight />
              </button>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

const productData = [
  {
    img: ProductImg_1,
    title: "Product to Satelite",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, laboriosam!",
    icon: FaAngleRight,
  },
  {
    img: ProductImg_2,
    title: "Product to Satelite",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, laboriosam!",
    icon: FaAngleRight,
  },
  {
    img: ProductImg_3,
    title: "Product to Satelite",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, laboriosam!",
    icon: FaAngleRight,
  },
];

export default Products;
