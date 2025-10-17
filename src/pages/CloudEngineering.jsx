import React from "react";
import {
  FaCloud,
  FaServer,
  FaLock,
  FaNetworkWired,
  FaCogs,
  FaDatabase,
  FaShieldAlt,
  FaSyncAlt,
} from "react-icons/fa";
import "../styles/CloudEngineering.css";
import BackgroundVideo from "../assets/BackgroundVideo.mp4"; // Add your video file here

const cloudServices = [
  {
    icon: <FaCloud />,
    title: "Cloud Migration",
    desc: "Seamlessly move workloads to AWS, Azure, and Google Cloud with minimal downtime.",
  },
  {
    icon: <FaServer />,
    title: "Infrastructure as Code",
    desc: "Automate deployments using Terraform, Ansible, and CloudFormation.",
  },
  {
    icon: <FaLock />,
    title: "Cloud Security",
    desc: "Protect data and workloads with best-in-class security, IAM, and compliance.",
  },
  {
    icon: <FaNetworkWired />,
    title: "Cloud Networking",
    desc: "Design secure and scalable VPCs, VPNs, and multi-cloud networking solutions.",
  },
  {
    icon: <FaCogs />,
    title: "DevOps Enablement",
    desc: "CI/CD pipelines and container orchestration with Kubernetes and Docker.",
  },
  {
    icon: <FaDatabase />,
    title: "Managed Databases",
    desc: "Deploy and optimize databases like RDS, BigQuery, and CosmosDB.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Disaster Recovery",
    desc: "Design cloud-based disaster recovery plans for high availability.",
  },
  {
    icon: <FaSyncAlt />,
    title: "Cloud Optimization",
    desc: "Improve cloud performance and reduce costs through smart monitoring.",
  },
];

const CloudEngineering = () => {
  return (
    <div className="cloud-page">
      {/* === Hero Section === */}
      <header className="cloud-hero">
        <video autoPlay loop muted playsInline className="cloud-video">
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
        <div className="cloud-hero-content">
          <h1>Cloud Engineering Services</h1>
          <p>
            Unlock the power of cloud with scalable infrastructure, automation,
            and modern security practices.
          </p>
        </div>
      </header>

      {/* === Service Cards === */}
      <section className="cloud-services">
        <h2>Our Cloud Engineering Expertise</h2>
        <div className="cloud-grid">
          {cloudServices.map((service, index) => (
            <div className="cloud-card" key={index}>
              <div className="cloud-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="cloud-cta">
        <h2>Accelerate Your Cloud Journey</h2>
        <p>
          Partner with us to design, migrate, and optimize your cloud ecosystem
          for innovation and growth.
        </p>
        <button className="contact-btn">Contact Us</button>
      </section>
    </div>
  );
};

export default CloudEngineering;
