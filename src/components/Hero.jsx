import React from "react";
import "../styles/Hero.css";
import awsLogo from "../assets/awsLogo.png";
import reactLogo from "../assets/vmwareLogo.png";
import dockerLogo from "../assets/dockerLogo.png";
import microsoftLogo from "../assets/microsoftLogo.png";
import heroImage from "../assets/heroImage.png"; // Use your own image or illustration

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Powerful Software Solutions for Your Business</h1>
          <p>
            We build scalable, secure and efficient platforms tailored to your growth.
            Our team of experts is dedicated to delivering innovative IT solutions that drive success.
            From cloud services to DevOps, we have you covered.
            Join us in transforming your digital landscape. 
            Let's build the future together!
            <span>Hi We waiting For you </span>

          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-outline">Book a Free Demo</button>
          </div>
        </div>

        <div className="heroImage">
          <img src={heroImage} alt="Hero Illustration" />
        </div>

        {/* Moved brands section here */}
        <div className="brands">
          {/* <p>Trusted by Leading Brands</p> */}
          <div className="brand-logos">
            <img src={awsLogo} alt="AWS" />
            <img src={reactLogo} alt="React" />
            <img src={dockerLogo} alt="Docker" />
            <img src={microsoftLogo} alt="Microsoft" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
