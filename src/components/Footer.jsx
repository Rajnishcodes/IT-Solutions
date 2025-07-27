import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>IT Solution Builder</h3>
          <p>
            Empowering your digital future with scalable solutions tailored to your business.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li>Contact</li>
              <li>Help Center</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li>Cloud Solutions</li>
              <li>DevOps</li>
              <li>Consulting</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="socials">
          <h4>Follow Us</h4>
          <div className="icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
        <p>© 2025 IT Solution Builder. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
