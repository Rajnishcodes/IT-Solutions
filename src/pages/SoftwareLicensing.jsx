import React from "react";
import { FaKey, FaUsers, FaSyncAlt, FaShieldAlt, FaLaptopCode } from "react-icons/fa";
import "../styles/SoftwareLicensing.css"; // 👈 new CSS

const SoftwareLicensing = () => {
  return (
    <div className="licensing-page">
      {/* === Hero Section === */}
      <header className="licensing-hero">
        <div className="licensing-hero-content">
          <h1>Software Licensing Solutions</h1>
          <p>
            Simplify compliance, optimize costs, and maximize the value of your
            enterprise software with tailored licensing solutions.
          </p>
        </div>
      </header>

      {/* === Features Section === */}
      <section className="licensing-features">
        <h2>Our Licensing Capabilities</h2>
        <div className="licensing-grid">
          <div className="licensing-card">
            <FaKey className="licensing-icon" />
            <h3>License Management</h3>
            <p>
              Centralize your license keys and ensure proper utilization across
              your organization.
            </p>
          </div>

          <div className="licensing-card">
            <FaUsers className="licensing-icon" />
            <h3>User Access Control</h3>
            <p>
              Assign licenses to teams or individuals with role-based
              permissions and control.
            </p>
          </div>

          <div className="licensing-card">
            <FaSyncAlt className="licensing-icon" />
            <h3>Subscription Tracking</h3>
            <p>
              Stay updated with automated tracking of renewals and software
              subscriptions.
            </p>
          </div>

          <div className="licensing-card">
            <FaShieldAlt className="licensing-icon" />
            <h3>Compliance & Security</h3>
            <p>
              Ensure your enterprise stays compliant with licensing agreements
              and regulations.
            </p>
          </div>

          <div className="licensing-card">
            <FaLaptopCode className="licensing-icon" />
            <h3>Custom Solutions</h3>
            <p>
              Tailored licensing models for SaaS, on-prem, and hybrid software
              deployments.
            </p>
          </div>
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="licensing-cta">
        <h2>Streamline Your Software Licensing</h2>
        <p>
          Partner with us to reduce costs, stay compliant, and optimize your
          software investments.
        </p>
        <button className="contact-btn">Contact Us</button>
      </section>
    </div>
  );
};

export default SoftwareLicensing;
