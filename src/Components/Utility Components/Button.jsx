import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
function Button({ content }) {
  return (
    <button>
      {content}{" "}
      <span>
        <FaArrowRightLong />
      </span>
    </button>
  );
}

export default Button;
