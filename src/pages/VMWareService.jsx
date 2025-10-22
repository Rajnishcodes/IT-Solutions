import React from "react";
import { FaServer, FaCloud, FaLock, FaCogs, FaDatabase } from "react-icons/fa";
import "../styles/VMWareService.css"; 
import BackgroundVideo from "../assets/backgroundVideo.mp4"; // Add your video file here

const VMWareService = () => {
  return (
    <div className="service-page">
      {/* ✅ Hero Section with Video */}
      <header className="service-hero">
        <video autoPlay loop muted playsInline className="service-video">
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
        <div className="service-hero-content">
          <h1>VMWare Service Provider</h1>
          <p>
            Empowering enterprises with next-gen virtualization, cloud, and
            security solutions using VMWare technology.
          </p>
        </div>
      </header>

      {/* ✅ Features Section */}
      <section className="service-features">
        <h2>Our VMWare Solutions</h2>
        <div className="features-grid">
          <div className="feature-card">
            <FaServer className="feature-icon" />
            <h3>Virtualization</h3>
            <p>
              Optimize workloads with VMware vSphere for better efficiency,
              scalability, and performance.
            </p>
          </div>

          <div className="feature-card">
            <FaCloud className="feature-icon" />
            <h3>Hybrid Cloud</h3>
            <p>
              Build and scale hybrid cloud environments with VMware Cloud
              Foundation and vCloud Director.
            </p>
          </div>

          <div className="feature-card">
            <FaLock className="feature-icon" />
            <h3>Security</h3>
            <p>
              Protect your infrastructure with VMware NSX and intrinsic security
              solutions.
            </p>
          </div>

          <div className="feature-card">
            <FaCogs className="feature-icon" />
            <h3>Automation</h3>
            <p>
              Streamline IT operations using VMware vRealize automation for
              faster deployment.
            </p>
          </div>

          <div className="feature-card">
            <FaDatabase className="feature-icon" />
            <h3>Storage & Backup</h3>
            <p>
              Ensure high availability with VMware vSAN and integrated data
              protection.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ CTA Section */}
      <section className="service-cta">
        <h2>Ready to Transform with VMWare?</h2>
        <p>
          Get in touch with our experts to build a secure, scalable, and
          cloud-ready infrastructure powered by VMware.
        </p>
        <button className="contact-btn">Contact Us</button>
      </section>
    </div>
  );
};

export default VMWareService;
