import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavbarVisible, setNavbarVisibility] = useState(false);

  const toggleNavbar = () => {
    setNavbarVisibility(!isNavbarVisible);
  };
  return (
    <>
      <nav class="nav-bar">
        <section className="wrapper">
          <div className="logo">
            <img src="./images/logo2.jpg" alt="logo-pic" />
          </div>

          <span
            className="material-symbols-outlined menu-icon"
            onClick={toggleNavbar}
          >
            menu
          </span>
          <ul className={isNavbarVisible ? "show" : ""}>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/services">SERVICES</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
