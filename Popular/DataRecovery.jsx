import React from "react";
import {
  FaHdd,
  FaCloudDownloadAlt,
  FaFileAlt,
  FaShieldAlt,
  FaLaptop,
  FaDatabase,
  FaSyncAlt,
  FaCheckCircle,
} from "react-icons/fa";
import "./DataRecovery.css";

const recoveryFeatures = [
  {
    icon: <FaHdd />,
    title: "Hard Drive Recovery",
    desc: "Recover lost, deleted, or corrupted files from HDDs and SSDs with high success rates.",
  },
  {
    icon: <FaCloudDownloadAlt />,
    title: "Cloud Backup Restore",
    desc: "Retrieve and restore data securely from cloud backups with one click.",
  },
  {
    icon: <FaFileAlt />,
    title: "File Type Support",
    desc: "Recover documents, photos, videos, databases, and over 1000+ file types.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Process",
    desc: "End-to-end encrypted recovery ensures complete data security.",
  },
  {
    icon: <FaLaptop />,
    title: "Device Compatibility",
    desc: "Supports desktops, laptops, external drives, USBs, and SD cards.",
  },
  {
    icon: <FaDatabase />,
    title: "Database Recovery",
    desc: "Repair and restore SQL, Oracle, and other enterprise databases.",
  },
  {
    icon: <FaSyncAlt />,
    title: "Quick & Deep Scan",
    desc: "Choose between instant scans or deep scans for maximum recovery.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Preview Before Recovery",
    desc: "View recoverable files before restoring them back to your system.",
  },
];

const DataRecovery = () => {
  return (
    <div className="dr-page">
      {/* === Hero Section === */}
      <header className="dr-hero">
        <div className="dr-hero-content">
          <h1>Data Recovery Software</h1>
          <p>
            Safeguard your business with modern data recovery solutions. Restore lost
            files, recover corrupted data, and keep your information secure.
          </p>
          <button className="contact-btn">Get Started</button>
        </div>
      </header>

      {/* === Features Section === */}
      <section className="dr-features">
        <h2>Powerful Recovery Features</h2>

        <div className="dr-grid">
          {recoveryFeatures.map((feature, index) => (
            <div className="dr-card" key={index}>
              <div className="dr-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="dr-cta">
        <h2>Protect Your Business Data Today</h2>
        <p>
          Don’t let data loss slow you down. Our recovery software ensures your business
          stays up and running with advanced protection.
        </p>
        <button className="contact-btn">Contact Us</button>
      </section>
    </div>
  );
};

export default DataRecovery;
