import React from "react";
import logo from "../../Assets/images/logo.png";
import { IoSearch } from "react-icons/io5";
const HomeNavbar = () => {
  return (
    <nav className="bg-[#245C51] p-5 flex flex-row justify-between align-middle">
      <div className="logo-side p-5 flex flex-row justify-between align-middle">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        {/* <div className="categories px-5">
          <button></button>
        </div> */}
      </div>
      <div className="pages p-5 text-white">
        <ul className="flex justify-between align-middle gap-10">
          <li>Home</li>
          <li>Pages</li>
          <li>Instructor</li>
          <li>Course</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="search-login">
        <input
          type="text"
          placeholder={`${(<IoSearch />)}Search Courses`}
          className="p-5 rounded-full"
        />
      </div>
    </nav>
  );
};

export default HomeNavbar;
