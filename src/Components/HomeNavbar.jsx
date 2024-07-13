import React, { useState } from "react";
import "./Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { Link, Router } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { MdOutlineMailOutline } from "react-icons/md";
import NavbarLogo from "../Assets/NavLogo.png";
import Button from "./Utility Components/Button";

function HomeNavbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="navbar bg-[#242424] text-white flex justify-between pt-8 py-5 px-12 items-center">
      <div className="navbar-logo flex-grow">
        <Link to="/">
          <img src={NavbarLogo} alt="" />
        </Link>
      </div>
      <div className="main-pages flex-grow slg:flex-grow-[2] flex slg:block justify-center items-center">
        {/* Hamburger menu */}
        <div className="hamburgr-menu slg:hidden">
          <div className="hamburger-btn ">
            <button
              className="border-[1px] border-white rounded-full p-3 hover:bg-[#FFAB17] transition duration-300 ease-in-out"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <RxHamburgerMenu className="w-5 h-5" />
            </button>
          </div>

          <div
            className={`hamburger-menu-items fixed bg-[#242424] py-5 h-full w-80 right-0 top-0 transform transition-transform duration-300 ease-in-out ${
              toggleMenu ? "translate-x-0" : "translate-x-full"
            } overflow-y-auto`}
          >
            <div className="logo-cross-btn flex justify-between items-center gap-x-10 pt-7 pb-16">
              <div className="logo px-3 flex-grow-0">
                <Link to="/">
                  <img src={NavbarLogo} alt="" className="w-full" />
                </Link>
              </div>
              <div className="btn px-3 flex-grow-[2]">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <MdOutlineCancel className="w-7 h-7" />
                </button>
              </div>
            </div>
            <ul className="flex flex-col items-center justify-center text-center">
              <li className="h-full w-full border-t-[1px] border-b-[1px] border-white">
                <span className="py-5 block hover:bg-[#FFAB17] transition duration-300 ease-in-out ">
                  <Link to="/">Home</Link>
                </span>
              </li>

              <li className="h-full w-full border-b-[1px] border-white">
                <span className="py-5 block hover:bg-[#FFAB17] transition duration-300 ease-in-out ">
                  <Link to="/about">About</Link>
                </span>
              </li>
              <li className="h-full w-full border-b-[1px] border-white">
                <span className="py-5 block hover:bg-[#FFAB17] transition duration-300 ease-in-out ">
                  <Link to="/contact">Contact</Link>
                </span>
              </li>
              <li className="h-full w-full border-b-[1px] border-white">
                <span className="py-5 block hover:bg-[#FFAB17] transition duration-300 ease-in-out ">
                  <Link to="/login">Login</Link>
                </span>
              </li>
              <li className="h-full w-full border-b-[1px] border-white">
                <span className="py-5 block hover:bg-[#FFAB17] transition duration-300 ease-in-out ">
                  <Link to="/register">Register</Link>
                </span>
              </li>
            </ul>
            <div className="contact-info p-5">
              <div className="heading-contact-info pb-5">
                <h1 className="text-4xl font-bold">Contact Info</h1>
              </div>
              <div className="contact-all-information flex flex-col gap-6">
                <div className="location flex justify-start items-center">
                  <div className="logo-info hover:bg-[#FFAB17] transition duration-300 ease-in-out p-4 rounded-md bg-[#2f2e2e]">
                    <GrLocation className="w-7 h-7" />
                  </div>
                  <div className="content-info px-4">
                    <p>Shamshabad,Rawalpindi</p>
                  </div>
                </div>
                <div className="call-number flex justify-start items-center ">
                  <div className="logo-info  p-4 rounded-md bg-[#2f2e2e] hover:bg-[#FFAB17] transition duration-300 ease-in-out ">
                    <IoCallOutline className="w-7 h-7" />
                  </div>
                  <div className="content-info px-4">
                    <p>+92 3145642492</p>
                  </div>
                </div>
                <div className="gmail flex justify-start items-center">
                  <div className="logo-info  p-4 rounded-md bg-[#2f2e2e] hover:bg-[#FFAB17] transition duration-300 ease-in-out ">
                    <MdOutlineMailOutline className="w-7 h-7" />
                  </div>
                  <div className="content-info px-4">
                    <p>rizwikhattak4384@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className=" justify-evenly items-center hidden slg:flex">
          <li className="underline-animation">
            <Link to="/">Home</Link>
          </li>
          <li className="underline-animation">
            <Link to="/about">About</Link>
          </li>
          <li className="underline-animation">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="underline-animation">
            <Link to="/login">Login</Link>
          </li>
          <li className="underline-animation">
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Button content="Contact Us" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default HomeNavbar;
