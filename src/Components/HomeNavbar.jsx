import React from "react";
import "./Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, Router } from "react-router-dom";
import NavbarLogo from "../Assets/NavLogo.png";
import Button from "./Utility Components/Button";

function HomeNavbar() {
  return (
    <nav className="navbar bg-[#242424] text-white flex justify-between pt-8 py-5 px-12 items-center">
      <div className="navbar-logo flex-grow">
        <Link to="/">
          <img src={NavbarLogo} alt="" />
        </Link>
      </div>
      <div className="main-pages flex-grow slg:flex-grow-[2] flex slg:block justify-center items-center">
        <div className="hamburgr-menu absolute bg-[#242424] p-5 h-full w-80 right-0 top-0 slg:hidden">
          <div className="hamburger-btn hidden">
            <button className="border-[1px] border-white rounded-full p-3">
              <RxHamburgerMenu className="w-5 h-5" />
            </button>
          </div>
          <div className="hamburger-menu-items relative">
            <div className="logo-cross-btn">
              <div className="logo">
                <Link to="/">
                  <img src={NavbarLogo} alt="" />
                </Link>
              </div>
              <div className="btn"></div>
            </div>
            <ul className="flex flex-col items-center justify-center gap-8 text-center">
              <li className=" h-full w-full underline-animation border-t-[1px] border-b-[1px] border-white">
                <span className="py-4">
                  <Link to="/">Home</Link>
                </span>
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
