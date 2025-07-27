import React from "react";
import { FaLightbulb, FaBolt, FaHeadset } from "react-icons/fa";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import about from "../assets/about.png"; // or .png, etc.

import "../styles/About.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-text">
          <h1>Who We Are</h1>
          <p>
            We are a technology company committed to driving innovation and
            delivering cutting-edge software solutions. Our mission is to
            empower businesses with state-of-the-art technology, enabling them
            to achieve their goals with efficiency and agility.
          </p>
        </div>
        <div className="about-image">
          <img src={about} alt="Team working with technology" />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="about-timeline">
        <div className="timeline-item">
          <h3>2015</h3>
          <p>Founded</p>
        </div>
        <div className="timeline-item">
          <h3>2018</h3>
          <p>100+ Clients</p>
        </div>
        <div className="timeline-item">
          <h3>2023</h3>
          <p>Global Expansion</p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="about-values">
        <h2>Core Values</h2>
        <div className="value-cards">
          <div className="value-card">
            <FaLightbulb className="icon" />
            <h4>Innovation</h4>
            <p>We foster creativity and embrace new ideas.</p>
          </div>
          <div className="value-card">
            <BiSolidMessageRoundedDots className="icon" />
            <h4>Transparency</h4>
            <p>We believe in openness and clear communication.</p>
          </div>
          <div className="value-card">
            <FaBolt className="icon" />
            <h4>Speed</h4>
            <p>We prioritize fast and efficient delivery.</p>
          </div>
          <div className="value-card">
            <FaHeadset className="icon" />
            <h4>Support</h4>
            <p>We are dedicated to our customers’ success.</p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {/* <section className="testimonial">
        <blockquote>
          “The team consistently delivers high-quality solutions.”
        </blockquote>
        <img src="/images/user-avatar.png" alt="Happy Customer" />
      </section> */}
    </div>
  );
};

export default AboutUs;
