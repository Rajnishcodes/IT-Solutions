import React from "react";
import { Link } from "react-router-dom";
import { 
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube,
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock 
} from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* 🔹 LEFT SIDE (OLD FOOTER LINKS) */}
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
              <li>Offers</li>
              <li><Link to="/careers">Careers</Link></li>
              <li>Blog</li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Business */}
          <div className="footer-column">
            <h4>For Businesses</h4>
            <ul>
              <li><Link to="/advertise">Advertise With Us</Link></li>
              <li><Link to="/writewithus">Write with Us</Link></li>
              <li><Link to="/sellwithus">Sell With Us</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div className="footer-column">
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

        {/* 🔥 RIGHT SIDE (CONTACT INFO) */}
        <div className="footer-contact">
          <h2 className="footer-contact-title">
            CONTACT <span>INFORMATION</span>
          </h2>
          <p className="footer-contact-text">
            Reach out to us through any of the following channels.
          </p>

          <div className="contact-grid">

            <div className="contact-card">
              <div className="icon"><FaMapMarkerAlt /></div>
              <h3>Visit Us</h3>
              <p>123 Construction Ave<br />Building City, BC 10001</p>
            </div>

            <div className="contact-card">
              <div className="icon"><FaPhoneAlt /></div>
              <h3>Call Us</h3>
              <p>+91 8130702488<br /></p>
            </div>

            <div className="contact-card">
              <div className="icon"><FaEnvelope /></div>
              <h3>Email Us</h3>
              <p>Deepak.t@itsolbuilder.co.in<br />Deepak.t@itsolbuilder.co.in</p>
            </div>

            <div className="contact-card">
              <div className="icon"><FaClock /></div>
              <h3>Working Hours</h3>
              <p>Mon - Fri:10Am - 6PM<br /></p>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom */}
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