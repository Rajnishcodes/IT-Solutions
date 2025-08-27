import React from "react";
import {
  FaServer,
  FaMicrochip,
  FaNetworkWired,
  FaLock,
  FaCloud,
} from "react-icons/fa";
import "../styles/VirtualizationService.css"; // 👈 new CSS file

const VirtualizationService = () => {
  return (
    <div className="virtualization-page">
      {/* === Hero Section === */}
      <header className="virtualization-hero">
        <div className="virtualization-hero-content">
          <h1>Virtualization Solutions</h1>
          <p>
            Maximize infrastructure efficiency, reduce costs, and simplify IT
            operations with cutting-edge virtualization technologies.
          </p>
        </div>
      </header>

      {/* === Features Section === */}
      <section className="virtualization-features">
        <h2>Our Virtualization Capabilities</h2>
        <div className="virtualization-grid">
          <div className="virtualization-card">
            <FaServer className="virtualization-icon" />
            <h3>Server Virtualization</h3>
            <p>
              Consolidate multiple workloads into fewer physical servers to
              optimize performance and reduce overhead.
            </p>
          </div>

          <div className="virtualization-card">
            <FaMicrochip className="virtualization-icon" />
            <h3>Desktop Virtualization</h3>
            <p>
              Deliver secure and scalable virtual desktops to employees anywhere
              with seamless access.
            </p>
          </div>

          <div className="virtualization-card">
            <FaNetworkWired className="virtualization-icon" />
            <h3>Network Virtualization</h3>
            <p>
              Simplify complex networks and improve agility using SDN and
              virtualized networking.
            </p>
          </div>

          <div className="virtualization-card">
            <FaLock className="virtualization-icon" />
            <h3>Security & Compliance</h3>
            <p>
              Protect critical assets with built-in security features across all
              virtualized layers.
            </p>
          </div>

          <div className="virtualization-card">
            <FaCloud className="virtualization-icon" />
            <h3>Cloud Integration</h3>
            <p>
              Seamlessly integrate virtualized environments with hybrid and
              multi-cloud strategies.
            </p>
          </div>
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="virtualization-cta">
        <h2>Ready to Modernize with Virtualization?</h2>
        <p>
          Transform your IT landscape with secure, scalable, and cost-effective
          virtualization solutions.
        </p>
        <button className="contact-btn">Contact Us</button>
      </section>
    </div>
  );
};

export default VirtualizationService;
