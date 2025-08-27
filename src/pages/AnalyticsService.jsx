import React from "react";
import {
  FaChartLine,
  FaBrain,
  FaDatabase,
  FaMobileAlt,
  FaShieldAlt,
} from "react-icons/fa";
import "../styles/AnalyticsService.css"; // ✅ Reuse same CSS for consistency

const AnalyticsService = () => {
  return (
    <div className="service-page">
      {/* ✅ Hero Section */}
      <header className="service-hero">
        <div className="service-hero-content">
          <h1>Analytics Solutions</h1>
          <p>
            Turn data into actionable insights with advanced analytics,
            AI-powered intelligence, and reporting solutions tailored for your
            business.
          </p>
        </div>
      </header>

      {/* ✅ Features Section */}
      <section className="service-features">
        <h2>Our Analytics Offerings</h2>
        <div className="features-grid">
          <div className="feature-card">
            <FaChartLine className="feature-icon" />
            <h3>Data Visualization</h3>
            <p>
              Transform raw data into interactive dashboards and reports for
              better decision-making.
            </p>
          </div>

          <div className="feature-card">
            <FaBrain className="feature-icon" />
            <h3>AI & Machine Learning</h3>
            <p>
              Leverage predictive analytics and AI-driven insights to stay ahead
              of the competition.
            </p>
          </div>

          <div className="feature-card">
            <FaDatabase className="feature-icon" />
            <h3>Big Data Management</h3>
            <p>
              Process and analyze large-scale data efficiently with modern
              analytics platforms.
            </p>
          </div>

          <div className="feature-card">
            <FaMobileAlt className="feature-icon" />
            <h3>Real-Time Analytics</h3>
            <p>
              Monitor KPIs and business metrics in real time for faster,
              data-driven responses.
            </p>
          </div>

          <div className="feature-card">
            <FaShieldAlt className="feature-icon" />
            <h3>Data Governance</h3>
            <p>
              Ensure compliance, security, and integrity of data across your
              enterprise.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ CTA Section */}
      <section className="service-cta">
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
