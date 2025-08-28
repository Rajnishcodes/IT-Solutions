import React from "react";
import { FaAws, FaCloud, FaServer, FaShieldAlt, FaDatabase } from "react-icons/fa";
import "../styles/AwsService.css";

const AWSService = () => {
  const awsFeatures = [
    {
      icon: <FaCloud />,
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud infrastructure for your applications."
    },
    {
      icon: <FaServer />,
      title: "Migration Services",
      description: "Seamless migration of your applications and workloads to AWS."
    },
    {
      icon: <FaDatabase />,
      title: "Data Solutions",
      description: "Advanced analytics and data storage solutions tailored for your business."
    },
    {
      icon: <FaShieldAlt />,
      title: "Security",
      description: "Robust security and compliance frameworks to protect your data."
    }
  ];

  return (
    <div className="aws-hero">
      <div className="aws-overlay">
        <div className="aws-container">
          {/* Hero Section */}
          <div className="aws-hero-content">
            <FaAws className="aws-icon" />
            <h1>AWS Service Provider</h1>
            <p>
              Delivering enterprise-grade AWS cloud solutions to accelerate digital transformation.
            </p>
            <a href="/contact" className="aws-btn">Get Started</a>
          </div>

          {/* Features Section */}
          <div className="aws-features">
            {awsFeatures.map((feature, index) => (
              <div className="aws-card" key={index}>
                <span className="feature-icon">{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AWSService;
