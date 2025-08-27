import React from "react";
import {
  FaMobileAlt,
  FaLaptopCode,
  FaCloud,
  FaCogs,
  FaShieldAlt,
} from "react-icons/fa";
import "../styles/ApplicationDevelopment.css"; // 👈 new CSS file

const ApplicationDevelopment = () => {
  return (
    <div className="appdev-page">
      {/* === Hero Section === */}
      <header className="appdev-hero">
        <div className="appdev-hero-content">
          <h1>Application Development Services</h1>
          <p>
            Transform your ideas into scalable, secure, and high-performing
            applications tailored to your business needs.
          </p>
        </div>
      </header>

      {/* === Features Section === */}
      <section className="appdev-features">
        <h2>Our Application Development Capabilities</h2>
        <div className="appdev-grid">
          <div className="appdev-card">
            <FaMobileAlt className="appdev-icon" />
            <h3>Mobile App Development</h3>
            <p>
              Build native and cross-platform apps with engaging UI and seamless
              performance across devices.
            </p>
          </div>

          <div className="appdev-card">
            <FaLaptopCode className="appdev-icon" />
            <h3>Web App Development</h3>
            <p>
              Create modern, scalable, and responsive web applications with the
              latest frameworks and technologies.
            </p>
          </div>

          <div className="appdev-card">
            <FaCloud className="appdev-icon" />
            <h3>Cloud-Native Apps</h3>
            <p>
              Develop and deploy cloud-first applications optimized for speed,
              resilience, and scalability.
            </p>
          </div>

          <div className="appdev-card">
            <FaCogs className="appdev-icon" />
            <h3>Custom Software Solutions</h3>
            <p>
              Tailor-made applications designed to fit your unique business
              processes and requirements.
            </p>
          </div>

          <div className="appdev-card">
            <FaShieldAlt className="appdev-icon" />
            <h3>Secure & Reliable Apps</h3>
            <p>
              Ensure data security, compliance, and performance with enterprise-
              grade development practices.
            </p>
          </div>
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="appdev-cta">
        <h2>Let’s Build Your Next Big Application</h2>
        <p>
          From concept to deployment, we provide end-to-end application
          development services that empower your business.
        </p>
        <button className="contact-btn">Get in Touch</button>
      </section>
    </div>
  );
};

export default ApplicationDevelopment;
