import React from "react";
import {
  FaChartLine,
  FaDatabase,
  FaBrain,
  FaProjectDiagram,
  FaRobot,
  FaSearch,
  FaCogs,
  FaCloud,
} from "react-icons/fa";
import "../styles/DataScience.css";
import BackgroundVideo from "../assets/BackgroundVideo.mp4"; // Add your video file here

const dataScienceServices = [
  {
    icon: <FaChartLine />,
    title: "Data Analytics",
    desc: "Transforming raw data into actionable insights with advanced analytical techniques.",
  },
  {
    icon: <FaDatabase />,
    title: "Big Data Solutions",
    desc: "Managing, processing, and analyzing large-scale datasets with cutting-edge tools.",
  },
  {
    icon: <FaBrain />,
    title: "Machine Learning",
    desc: "Building predictive models and intelligent systems to drive smarter decisions.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Data Visualization",
    desc: "Interactive dashboards and visual storytelling to make data easily understandable.",
  },
  {
    icon: <FaRobot />,
    title: "AI Integration",
    desc: "Implementing AI-driven solutions into workflows for automation and efficiency.",
  },
  {
    icon: <FaSearch />,
    title: "Data Mining",
    desc: "Extracting hidden patterns, correlations, and trends from complex datasets.",
  },
  {
    icon: <FaCogs />,
    title: "Predictive Modeling",
    desc: "Forecasting outcomes using statistical and machine learning models.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Data Solutions",
    desc: "Leveraging cloud infrastructure for scalable, secure, and real-time data processing.",
  },
];

const DataScience = () => {
  return (
    <div className="ds-page">
      {/* Hero Section with Video */}
      <header className="ds-hero">
        <video autoPlay loop muted playsInline className="ds-video">
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
        <div className="ds-hero-content">
          <h1>Data Science Services</h1>
          <p>
            Unlock the power of your data with cutting-edge analytics, AI, and
            scalable data-driven solutions.
          </p>
        </div>
      </header>

      {/* Services Section */}
      <section className="ds-services">
        <h2>Our Data Science Expertise</h2>
        <div className="ds-grid">
          {dataScienceServices.map((service, index) => (
            <div className="ds-card" key={index}>
              <div className="ds-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="ds-cta">
        <h2>Ready to Leverage Data Science?</h2>
        <p>
          Partner with us to transform data into intelligence and intelligence
          into business success.
        </p>
        <button className="contact-btn">Contact Us</button>
      </section>
    </div>
  );
};

export default DataScience;
