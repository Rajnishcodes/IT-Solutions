import React from "react";
import image from "../assets/Logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={image} alt="Logo" />
        <span>IT Solution Builder</span>
      </div>
      <ul className="navbar-links">
        <li><a href="/hero">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact" className="contact-btn">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
