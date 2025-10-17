import React from "react";
import { FiUsers, FiActivity, FiGlobe, FiHeart } from "react-icons/fi";
import "../styles/About.css";
import BackgroundVideo from "../assets/backgroundVideo.mp4";

const aboutHighlights = [
  {
    title: "Experienced Team",
    desc: "Our professionals bring years of expertise to craft tailored IT solutions.",
    icon: <FiUsers />,
  },
  {
    title: "Innovative Approach",
    desc: "We use cutting-edge technologies to ensure high-quality results.",
    icon: <FiActivity />,
  },
  {
    title: "Global Reach",
    desc: "Serving clients around the world with scalable digital solutions.",
    icon: <FiGlobe />,
  },
  {
    title: "Client-Centric",
    desc: "Your goals drive our strategy — we grow when you succeed.",
    icon: <FiHeart />,
  },
];

const journeyMilestones = [
  {
    year: "2015",
    event: "Company Founded",
    desc: "Started with a small team passionate about digital transformation.",
  },
  {
    year: "2018",
    event: "Global Expansion",
    desc: "Reached clients in over 10 countries, delivering scalable IT solutions.",
  },
  {
    year: "2021",
    event: "Innovation Hub",
    desc: "Launched our R&D center focused on automation and AI-driven tech.",
  },
  {
    year: "2024",
    event: "Industry Recognition",
    desc: "Recognized as a top enterprise consulting partner worldwide.",
  },
];

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <video autoPlay loop muted playsInline className="about-video">
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
        <div className="about-hero-content">
          <h1>Who We Are</h1>
          <p>
            We are a global IT solutions provider helping businesses grow through
            technology. Our expertise spans application consulting, digital
            transformation, and enterprise optimization — empowering you to
            achieve sustainable success in a competitive digital era.
          </p>
          <button className="cta-btn">Learn More</button>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="about-features">
        <h2>What Makes Us Different</h2>
        <div className="about-grid">
          {aboutHighlights.map((item, index) => (
            <div key={index} className="about-card">
              <div className="about-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Journey Section */}
      <section className="about-journey">
        <h2>Our Journey</h2>
        <div className="journey-grid">
          {journeyMilestones.map((milestone, index) => (
            <div key={index} className="journey-card">
              <h3>{milestone.year}</h3>
              <h4>{milestone.event}</h4>
              <p>{milestone.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
