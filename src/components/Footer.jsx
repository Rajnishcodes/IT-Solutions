import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Popular Categories */}
        <div className="footer-column">
          <h4>Popular Categories</h4>
          <ul className="footer-links">
            <li><Link to="/stockmarket">Stock Market Software</Link></li>
            <li><Link to="/accountingsoftware">Accounting Software</Link></li>
            <li><Link to="/retailbilling">Retail Billing Software</Link></li>
            <li><Link to="/paymentgateway">Payment Gateway</Link></li>
            <li><Link to="/hrsoftware">HR Software</Link></li>
            <li><Link to="/datarecovery">Data Recovery Software</Link></li>
          </ul>
        </div>

        {/* About */}
        <div className="footer-column">
          <h4>About IT Solution Builder</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li>Offers </li>
            <li><Link to="/careers">Careers</Link></li>
            <li>Blog</li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* For Businesses */}
        <div className="footer-column">
          <h4>For Businesses</h4>
          <ul>
            <li><Link to="/advertise">Advertise With Us</Link></li>
            <li><Link to="/writewithus">Write with Us</Link></li>
            <li><Link to="/sellwithus">Sell With Us</Link></li>
            
          </ul>
        </div>

        {/* Newsletter + Socials */}
        <div className="footer-column">
          <h4>Subscribe for Offers</h4>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter Your Email" />
            <button type="submit">Subscribe</button>
          </form>

          <h4 className="social-title">Let’s Get Social</h4>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>Founded in 2021, built on trust, innovation, and excellence</p>
        <p>All rights reserved.</p>
        <div className="footer-links-bottom">
          <a href="#">Privacy & Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Disclaimer</a>
          <a href="/contact">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
