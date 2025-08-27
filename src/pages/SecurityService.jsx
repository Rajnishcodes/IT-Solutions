import React from "react";
import {
  FaShieldAlt,
  FaLock,
  FaUserShield,
  FaFingerprint,
  FaCloud,
} from "react-icons/fa";
import "../styles/SecurityService.css"; // 👈 new CSS file

const SecurityService = () => {
  return (
    <div className="security-page">
      {/* === Hero Section === */}
      <header className="security-hero">
        <div className="security-hero-content">
          <h1>Security Solutions</h1>
          <p>
            Safeguard your business with enterprise-grade cybersecurity,
            compliance, and cloud security solutions.
          </p>
        </div>
      </header>

      {/* === Features Section === */}
      <section className="security-features">
        <h2>Our Security Capabilities</h2>
        <div className="security-grid">
          <div className="security-card">
            <FaShieldAlt className="security-icon" />
            <h3>Threat Protection</h3>
            <p>
              Proactive defense against malware, ransomware, and advanced
              persistent threats.
            </p>
          </div>

          <div className="security-card">
            <FaLock className="security-icon" />
            <h3>Data Encryption</h3>
            <p>
              End-to-end encryption to secure sensitive business information in
              transit and at rest.
            </p>
          </div>

          <div className="security-card">
            <FaUserShield className="security-icon" />
            <h3>Identity & Access</h3>
            <p>
              Multi-factor authentication and access management to safeguard
              user identities.
            </p>
          </div>

          <div className="security-card">
            <FaFingerprint className="security-icon" />
            <h3>Compliance</h3>
            <p>
              Ensure regulatory compliance with GDPR, HIPAA, and industry
              security standards.
            </p>
          </div>

          <div className="security-card">
            <FaCloud className="security-icon" />
            <h3>Cloud Security</h3>
            <p>
              Protect workloads, apps, and data across hybrid and multi-cloud
              environments.
            </p>
          </div>
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="security-cta">
        <h2>Ready to Secure Your Enterprise?</h2>
        <p>
          Partner with us to strengthen your digital defenses and build a
          security-first infrastructure.
        </p>
        <button className="contact-btn">Contact Us</button>
      </section>
    </div>
  );
};

export default SecurityService;
