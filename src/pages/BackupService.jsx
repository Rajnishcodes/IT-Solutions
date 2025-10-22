import React from "react";
import { FaDatabase, FaShieldAlt, FaCloudUploadAlt, FaHistory, FaLock } from "react-icons/fa";
import "../styles/BackupService.css";
import BackupVideo from "../assets/backgroundVideo.mp4"; 

const BackupService = () => {
  return (
    <div className="backup-page">
      {/* === Hero Section with Video === */}
      <header className="backup-hero">
        <video autoPlay loop muted playsInline className="backup-video">
          <source src={BackupVideo} type="video/mp4" />
        </video>

        <div className="backup-hero-content">
          <h1>Backup & Recovery Solutions</h1>
          <p>
            Safeguard your critical business data with secure, scalable, and
            reliable backup & recovery solutions tailored to your enterprise.
          </p>
        </div>
      </header>

      {/* === Features Section === */}
      <section className="backup-features">
        <h2>Why Choose Our Backup Solutions?</h2>
        <div className="backup-grid">
          <div className="backup-card">
            <FaDatabase className="backup-icon" />
            <h3>Data Protection</h3>
            <p>
              Ensure your databases, files, and applications are always
              protected with advanced backup solutions.
            </p>
          </div>

          <div className="backup-card">
            <FaShieldAlt className="backup-icon" />
            <h3>Disaster Recovery</h3>
            <p>
              Minimize downtime with automated disaster recovery planning and
              business continuity solutions.
            </p>
          </div>

          <div className="backup-card">
            <FaCloudUploadAlt className="backup-icon" />
            <h3>Cloud Backup</h3>
            <p>
              Securely store backups in the cloud with scalable storage and
              instant accessibility.
            </p>
          </div>

          <div className="backup-card">
            <FaHistory className="backup-icon" />
            <h3>Version Control</h3>
            <p>
              Access previous versions of your files and recover data instantly
              when required.
            </p>
          </div>

          <div className="backup-card">
            <FaLock className="backup-icon" />
            <h3>Security & Compliance</h3>
            <p>
              Stay compliant with industry standards while keeping your data
              safe from breaches and threats.
            </p>
          </div>
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="backup-cta">
        <h2>Ready to Secure Your Data?</h2>
        <p>
          Let our experts help you implement a reliable backup and disaster
          recovery strategy for your business.
        </p>
        <button className="contact-btn">Contact Us</button>
      </section>
    </div>
  );
};

export default BackupService;
