import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/croppedLogo.png";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <>
      <header className="navbar">
        <div className="navbar-container navbar-container">
          <div className="logo-section">
            <NavLink to="/">
              <img src={Logo} alt="" />
            </NavLink>
          </div>
          <div className={`nav-links-section ${showNavbar && "active"}`}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/features">Features</NavLink>
              </li>
              <li className="navbar-faqs">
                <NavLink to="/faqs">Faqs </NavLink>
                <GoArrowUpRight className="up-right-arrow" />
              </li>
              <li>
                <NavLink to="/contacts">Contacts</NavLink>
              </li>{" "}
            </ul>
          </div>{" "}
          <div className="menu-icon" onClick={handleShowNavbar}>
            {showNavbar ? <IoMdClose /> : <IoMdMenu />}{" "}
            {/* Show close icon when navbar is open */}
          </div>
          <div className="auth-links-section disapear">
            <ul>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/create-account" className="signup-btn">
                  Create Account
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
