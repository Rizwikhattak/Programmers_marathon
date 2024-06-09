import React from "react";
import logo from "../../Assets/images/logo.png";
const HomeNavbar = () => {
  return (
    <nav className="bg-[#245C51] p-5 flex flex-row justify-between align-middle">
      <div className="logo-side p-5 flex flex-row justify-between align-middle">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="categories px-5">
          <button></button>
        </div>
      </div>
      <div className="pages p-5">
        <ul>
          <li>hi</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="search-login"></div>
    </nav>
  );
};

export default HomeNavbar;
