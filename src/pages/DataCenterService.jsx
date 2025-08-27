import React from "react";
import {
  FaServer,
  FaNetworkWired,
  FaShieldAlt,
  FaDatabase,
  FaCog,
  FaCloud,
} from "react-icons/fa";
import "../styles/DataCenterService.css"; // ✅ custom CSS for Data Center page

const DataCenterService = () => {
  return (
    <div className="datacenter-page">
      {/* ✅ Hero Section */}
      <header className="datacenter-hero">
        <div className="datacenter-hero-content">
          <h1>Data Center Solutions</h1>
          <p>
            Build a secure, scalable, and high-performing data center
            infrastructure that powers your business with reliability and
            innovation.
          </p>
        </div>
      </header>

      {/* ✅ Features Section */}
      <section className="datacenter-features">
        <h2>What We Offer</h2>
        <div className="datacenter-grid">
          <div className="datacenter-card">
            <div className="icon-circle"><FaServer /></div>
            <h3>Server Infrastructure</h3>
            <p>
              High-performance server management and optimization for
              enterprise workloads.
            </p>
          </div>

          <div className="datacenter-card">
            <div className="icon-circle"><FaNetworkWired /></div>
            <h3>Networking</h3>
            <p>
              Robust, scalable networking solutions to ensure connectivity and
              uptime across your infrastructure.
            </p>
          </div>

          <div className="datacenter-card">
            <div className="icon-circle"><FaShieldAlt /></div>
            <h3>Security & Compliance</h3>
            <p>
              End-to-end security solutions to safeguard sensitive business and
              customer data.
            </p>
          </div>

          <div className="datacenter-card">
            <div className="icon-circle"><FaDatabase /></div>
            <h3>Storage Solutions</h3>
            <p>
              Scalable and reliable storage for growing enterprise data
              demands.
            </p>
          </div>

          <div className="datacenter-card">
            <div className="icon-circle"><FaCog /></div>
            <h3>Automation</h3>
            <p>
              Automate your data center operations with intelligent monitoring
              and orchestration.
            </p>
          </div>

          <div className="datacenter-card">
            <div className="icon-circle"><FaCloud /></div>
            <h3>Cloud Integration</h3>
            <p>
              Seamlessly integrate hybrid and multi-cloud strategies with your
              data center.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ CTA Section */}
      <section className="datacenter-cta">
        <h2>Future-Proof Your Infrastructure</h2>
        <p>
          Our Data Center solutions empower your business with scalability,
          security, and innovation for the digital era.
        </p>
        <button className="contact-btn">Get Started</button>
      </section>
    </div>
  );
};

export default DataCenterService;
