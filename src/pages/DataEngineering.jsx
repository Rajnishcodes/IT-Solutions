import React from "react";
import {
  FaDatabase,
  FaProjectDiagram,
  FaServer,
  FaCogs,
  FaChartBar,
  FaCloud,
} from "react-icons/fa";
import "../styles/DataEngineering.css";
import BackgroundVideo from "../assets/backgroundVideo.mp4"; // add your video file here

const services = [
  {
    icon: <FaDatabase />,
    title: "Data Warehousing",
    desc: "Design scalable and secure data warehouses for structured and unstructured data.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Data Pipeline Development",
    desc: "Build robust ETL/ELT pipelines to move, clean, and transform large-scale data.",
  },
  {
    icon: <FaServer />,
    title: "Big Data Processing",
    desc: "Leverage Hadoop, Spark, and distributed systems for real-time and batch processing.",
  },
  {
    icon: <FaCogs />,
    title: "Data Integration",
    desc: "Integrate multiple data sources into a unified view for analytics and decision-making.",
  },
  {
    icon: <FaChartBar />,
    title: "Data Analytics Enablement",
    desc: "Empower business users with insights through BI dashboards and reporting.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Data Engineering",
    desc: "Deploy and optimize data infrastructure on AWS, Azure, and Google Cloud.",
  },
];

const DataEngineering = () => {
  return (
    <div className="data-page">
      {/* Hero Section with Video */}
      <header className="data-hero">
        <video autoPlay loop muted playsInline className="data-video">
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
        <div className="data-hero-content">
          <h1>Data Engineering Services</h1>
          <p>
            Transform raw data into actionable insights with scalable pipelines,
            modern warehouses, and cloud-first data solutions.
          </p>
        </div>
      </header>

      {/* Features Section */}
      <section className="data-features">
        <h2>Our Data Engineering Capabilities</h2>
        <div className="data-grid">
          {services.map((service, index) => (
            <div className="data-card" key={index}>
              <div className="data-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="data-cta">
        <h2>Make Data Your Competitive Advantage</h2>
        <p>
          Partner with us to design data-driven ecosystems that power
          innovation, automation, and smarter decisions.
        </p>
        <button className="contact-btn">Contact Us</button>
      </section>
    </div>
  );
};

export default DataEngineering;
