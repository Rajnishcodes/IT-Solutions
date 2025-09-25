import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import image from "../assets/Logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Toggle dropdown
  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  // Auto close dropdown & mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setMenuOpen(false); // close hamburger menu
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className="navbar" ref={navRef}>
      {/* === Logo === */}
      <div className="navbar-logo">
        <img src={image} alt="Logo" />
        <div className="navbar-texth1">
          <span>IT Solution Builder</span>
        </div>
      </div>

      {/* === Navbar Links === */}
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/home" onClick={handleLinkClick}>Home</Link>
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
              <Link to="/about" onClick={handleLinkClick}>About Company</Link>
            </li>
            <li>
              <Link to="/events" onClick={handleLinkClick}>Events</Link>
            </li>
            <li>
              <Link to="/about" onClick={handleLinkClick}>Growth Partners</Link>
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
              <Link to="/awsservice" onClick={handleLinkClick}><button>AWS Data Engineer</button></Link>
              <Link to="/vmwareservice" onClick={handleLinkClick}><button>VMWare</button></Link>
              <Link to="/analyticsservice" onClick={handleLinkClick}><button>Analytics</button></Link>
              <Link to="/datacenterservice" onClick={handleLinkClick}><button>Data Center</button></Link>
              <Link to="/backupservice" onClick={handleLinkClick}><button>Backup Solution</button></Link>
              <Link to="/softwarelicensing" onClick={handleLinkClick}><button>Software Licensing</button></Link>
              <Link to="/virtualizationservice" onClick={handleLinkClick}><button>Virtualization</button></Link>
              <Link to="/securityservice" onClick={handleLinkClick}><button>Security</button></Link>
              <Link to="/infrastructureservice" onClick={handleLinkClick}><button>Infrastructure</button></Link>
            </div>
            <div>
              <h4>Solutions</h4>
              <Link to="/applicationdevelopment" onClick={handleLinkClick}><button>Application Development</button></Link>
              <Link to="/aimlservice" onClick={handleLinkClick}><button>AI & Machine Learning</button></Link>
              <Link to="/dataengineering" onClick={handleLinkClick}><button>Data Engineering</button></Link>
              <Link to="/cloudengineering" onClick={handleLinkClick}><button>Cloud Engineering</button></Link>
              <Link to="/mobileappdevelopment" onClick={handleLinkClick}><button>Mobile App Development</button></Link>
              <Link to="/qatesting" onClick={handleLinkClick}><button>QA & Testing</button></Link>
              <Link to="/datascience" onClick={handleLinkClick}><button>Data Science</button></Link>
            </div>
          </div>
        </li>

        {/* Static Links */}
        <li>
          <Link to="/partners" className="partner-btn" onClick={handleLinkClick}>
            Partners
          </Link>
        </li>
        <li>
          <Link to="/contact" className="casestudy-btn" onClick={handleLinkClick}>
            Case Studies
          </Link>
        </li>
        <li>
          <Link to="/contact" className="contact-btn" onClick={handleLinkClick}>
            Contact
          </Link>
        </li>
      </ul>

      {/* === Hamburger Toggle (always on far right) === */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
