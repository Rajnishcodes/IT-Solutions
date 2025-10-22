import React from "react";
import {
  FaChartLine,
  FaBrain,
  FaDatabase,
  FaMobileAlt,
  FaShieldAlt,
} from "react-icons/fa";
import "../styles/AnalyticsService.css";
import BackgroundVideo from "../assets/backgroundVideo.mp4";

const AnalyticsService = () => {
  return (
    <div className="analytics-page">
      {/* ✅ Hero Section */}
      <header className="analytics-hero">
        <video autoPlay loop muted playsInline className="analytics-video">
          <source src={BackgroundVideo} type="video/mp4" />
        </video>

        <div className="analytics-hero-content">
          <h1>Analytics Solutions</h1>
          <p>
            Turn data into actionable insights with advanced analytics,
            AI-powered intelligence, and reporting solutions tailored for your
            business.
          </p>
        </div>
      </header>

      {/* ✅ Features Section */}
      <section className="analytics-features">
        <h2>Our Analytics Offerings</h2>
        <div className="analytics-grid">
          <div className="analytics-card">
            <FaChartLine className="analytics-icon" />
            <h3>Data Visualization</h3>
            <p>
              Transform raw data into interactive dashboards and reports for
              better decision-making.
            </p>
          </div>

          <div className="analytics-card">
            <FaBrain className="analytics-icon" />
            <h3>AI & Machine Learning</h3>
            <p>
              Leverage predictive analytics and AI-driven insights to stay ahead
              of the competition.
            </p>
          </div>

          <div className="analytics-card">
            <FaDatabase className="analytics-icon" />
            <h3>Big Data Management</h3>
            <p>
              Process and analyze large-scale data efficiently with modern
              analytics platforms.
            </p>
          </div>

          <div className="analytics-card">
            <FaMobileAlt className="analytics-icon" />
            <h3>Real-Time Analytics</h3>
            <p>
              Monitor KPIs and business metrics in real time for faster,
              data-driven responses.
            </p>
          </div>

          <div className="analytics-card">
            <FaShieldAlt className="analytics-icon" />
            <h3>Data Governance</h3>
            <p>
              Ensure compliance, security, and integrity of data across your
              enterprise.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ CTA Section */}
      <section className="analytics-cta">
        <h2>Unlock Insights with Analytics</h2>
        <p>
          Partner with us to harness the power of analytics and make smarter,
          faster, and more informed business decisions.
        </p>
        <button className="contact-btn">Contact Us</button>
      </section>
    </div>
  );
};

export default AnalyticsService;
