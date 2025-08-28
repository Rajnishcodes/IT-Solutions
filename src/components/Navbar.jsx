import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image from "../assets/Logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle dropdown
  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  // Auto close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      {/* === Logo + Hamburger === */}
      <div className="navbar-logo">
        <img src={image} alt="Logo" />
        <div className="navbar-texth1">
          <span>IT Solution Builder</span>
        </div>

        {/* Hamburger Toggle */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* === Navbar Links === */}
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/home">Home</Link>
        </li>

        {/* About Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => setActiveDropdown("about")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <button className="dropbtn">About ▾</button>
          <ul
            className={`dropdown-content ${
              activeDropdown === "about" ? "show" : ""
            }`}
          >
            <li>
              <Link to="/about">About Company</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/about">Growth Partners</Link>
            </li>
          </ul>
        </li>

        {/* Services Mega Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => setActiveDropdown("services")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <button className="dropbtn">Services ▾</button>
          <div
            className={`mega-dropdown ${
              activeDropdown === "services" ? "show" : ""
            }`}
          >
            <div>
              <h4>Technologies</h4>
              <Link to="/awsservice"><button>AWS Data Engineer</button></Link>
              <Link to="/vmwareservice"><button>VMWare</button></Link>
              <Link to="/analyticsservice"><button>Analytics</button></Link>
              <Link to="/datacenterservice"><button>Data Center</button></Link>
              <Link to="/backupservice"><button>Backup Solution</button></Link>
              <Link to="/softwarelicensing"><button>Software Licensing</button></Link>
              <Link to="/virtualizationservice"><button>Virtualization</button></Link>
              <Link to="/securityservice"><button>Security</button></Link>
              <Link to="/infrastructureservice"><button>Infrastructure</button></Link>
            </div>
            <div>
              <h4>Solutions</h4>
              <Link to="/applicationdevelopment"><button>Application Development</button></Link>
              <Link to="/aimlservice"><button>AI & Machine Learning</button></Link>
              <Link to="/dataengineering"><button>Data Engineering</button></Link>
              <Link to="/cloudengineering"><button>Cloud Engineering</button></Link>
              <Link to="/mobileappdevelopment"><button>Mobile App Development</button></Link>
              <Link to="/qatesting"><button>QA & Testing</button></Link>
              <Link to="/datascience"><button>Data Science</button></Link>
            </div>
          </div>
        </li>

        {/* Static Links */}
        <li>
          <Link to="/partners" className="partner-btn">Partners</Link>
        </li>
        <li>
          <Link to="/contact" className="casestudy-btn">Case Studies</Link>
        </li>
        <li>
          <Link to="/contact" className="contact-btn">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
