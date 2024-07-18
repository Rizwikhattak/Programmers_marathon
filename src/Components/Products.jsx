import React, { useState } from "react";
import "./ProductsPage.css";
import { FaAngleRight } from "react-icons/fa";
import ProductImg_1 from "../Assets/ProductImg_1.jpeg";
import ProductImg_2 from "../Assets/ProductImg_2.jpeg";
import ProductImg_3 from "../Assets/ProductImg_3.jpeg";
import Slider from "react-slick";

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className="custom-arrow-container custom-next-container">
      <div
        className={`${className} custom-arrow custom-next`}
        onClick={onClick}
      />
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className="custom-arrow-container custom-prev-container">
      <div
        className={`${className} custom-arrow custom-prev`}
        onClick={onClick}
      />
    </div>
  );
};

const Products = () => {
  const [checkCurrent, setCheckCurrent] = useState(1);

  const handleClick = (index) => {
    setCheckCurrent(index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
      <div className="product-images-section h-full w-full p-10">
        <Slider {...settings}>
          {productData.map((currElem, currIndex) => {
            return (
              <div className={`product-${currIndex + 1} relative`}>
                <div className="">
                  <img src={currElem.img} alt="" className="" />
                </div>
              </div>
            );
          })}
        </Slider>
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
