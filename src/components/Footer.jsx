import React from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
=======
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
>>>>>>> a4657f17d677da2027588233a92a885dbdf04cf0
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
<<<<<<< HEAD
        
        {/* Popular Categories */}
        <div className="footer-column">
          <h4>Popular Categories</h4>
          <ul>
            <ul className="footer-links">
               <li><Link to="/stockmarket">Stock Market Software</Link></li>
               <li><Link to="/accountingsoftware">Accounting Software</Link></li>
               <li><Link to="/retailbilling">Retail Billing Software</Link></li>
               <li><Link to="/paymentgateway">Payment Gateway</Link></li>
               <li><Link to="/hrsoftware">HR Software</Link></li>
               <li><Link to="/datarecovery">Data Recovery Software</Link></li>
              </ul>

          </ul>
        </div>

        {/* About */}
        <div className="footer-column">
          <h4>About IT Solution Builder</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li>Offers ⚡</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Blog</li>
            <li><Link to="/contact">contact Us</Link></li>
          </ul>
        </div>

        {/* For Businesses */}
        <div className="footer-column">
          <h4>For Businesses</h4>
          <ul>
            <li><Link to="/advertise">Advertise With Us</Link></li>
            <li>Write with Us</li>
            <li>Sell With Us</li>
            <li>Editorial Policy</li>
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
=======
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
>>>>>>> a4657f17d677da2027588233a92a885dbdf04cf0
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2022 IT Solution Builder. All rights reserved.</p>
        <div className="footer-links-bottom">
          <a href="#">Cancellation & Refund</a>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy</a>
        </div>
=======
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
>>>>>>> a4657f17d677da2027588233a92a885dbdf04cf0
      </div>
    </footer>
  );
};

export default Footer;
