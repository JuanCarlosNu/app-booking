import React, { useState } from "react";
import logo from "../../assets/logoT.png";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <a href="/">
          <img src={logo} alt="App Logo" className="logo" />
        </a>
        <span className="tagline">Tu estadía en paz</span>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <a href="/">Find🔎</a>
          </li>
          <li>
            <a href="/categories">Categories</a>
          </li>
          <li>
            <a href="/contact">Recommended</a>
          </li>
        </ul>
      </nav>

      <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <button className="header-btn signup">Sign Up</button>
        <button className="header-btn">Log In</button>
      </div>

      <button className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </header>
  );
};

export default Header;
