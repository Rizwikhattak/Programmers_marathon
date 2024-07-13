import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
function Button({ content }) {
  return (
    <button className="px-5 py-3 rounded-md bg-[#FFAB17] content-center text-center hover:bg-white hover:text-[#FFAB17]  transition duration-300 ease-in-out">
      {content}

      <span className="px-2 py-5">
        <FaArrowRightLong className="inline" />
      </span>
    </button>
  );
}

export default Button;
