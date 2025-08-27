import React from "react";
import {
  FaServer,
  FaNetworkWired,
  FaCloud,
  FaTools,
  FaDatabase,
} from "react-icons/fa";
import "../styles/InfrastructureService.css"; // 👈 new CSS file

const InfrastructureService = () => {
  return (
    <div className="infra-page">
      {/* === Hero Section === */}
      <header className="infra-hero">
        <div className="infra-hero-content">
          <h1>Infrastructure Services</h1>
          <p>
            Build, optimize, and modernize IT infrastructure with scalable,
            secure, and future-ready solutions.
          </p>
        </div>
      </header>

      {/* === Features Section === */}
      <section className="infra-features">
        <h2>Our Infrastructure Capabilities</h2>
        <div className="infra-grid">
          <div className="infra-card">
            <FaServer className="infra-icon" />
            <h3>Data Center Management</h3>
            <p>
              Streamlined server management with high availability, automation,
              and cost efficiency.
            </p>
          </div>

          <div className="infra-card">
            <FaNetworkWired className="infra-icon" />
            <h3>Networking</h3>
            <p>
              Robust and secure networking solutions to ensure seamless
              connectivity and performance.
            </p>
          </div>

          <div className="infra-card">
            <FaCloud className="infra-icon" />
            <h3>Cloud Infrastructure</h3>
            <p>
              Build and manage hybrid & multi-cloud environments for agility and
              scalability.
            </p>
          </div>

          <div className="infra-card">
            <FaTools className="infra-icon" />
            <h3>DevOps & Automation</h3>
            <p>
              Automate infrastructure deployment and monitoring for faster
              delivery cycles.
            </p>
          </div>

          <div className="infra-card">
            <FaDatabase className="infra-icon" />
            <h3>Storage & Backup</h3>
            <p>
              Ensure reliability with advanced storage, backup, and disaster
              recovery solutions.
            </p>
          </div>
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="infra-cta">
        <h2>Future-Proof Your Infrastructure</h2>
        <p>
          Partner with us to design, deploy, and optimize infrastructure that
          scales with your business needs.
        </p>
        <button className="contact-btn">Contact Us</button>
      </section>
    </div>
  );
};

export default InfrastructureService;
