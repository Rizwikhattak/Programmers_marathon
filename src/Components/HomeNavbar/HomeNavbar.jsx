import React from "react";
import NavbarLogo from "../../Assets/NavLogo.png";
import Button from "../Utility Components/Button";
function HomeNavbar() {
  return (
    <nav className="navbar bg-[#242424] text-white flex justify-between py-[17px] px-[58px] items-center">
      <div className="navbar-logo flex-grow">
        <img src={NavbarLogo} alt="" />
      </div>
      <div className="main-pages flex-grow-[2]">
        <ul className="flex justify-evenly items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
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
