import React from "react";
import { FiPenTool, FiUsers, FiBookOpen, FiTrendingUp, FiCheckCircle } from "react-icons/fi";
import "./WriteWithUs.css";

const writerBenefits = [
  {
    title: "Showcase Your Expertise",
    desc: "Share your knowledge with a global audience and build authority in your niche.",
    icon: <FiPenTool />,
  },
  {
    title: "Expand Your Reach",
    desc: "Get featured in front of thousands of readers, professionals, and businesses.",
    icon: <FiTrendingUp />,
  },
  {
    title: "Be Part of a Community",
    desc: "Collaborate and connect with other writers, thought leaders, and innovators.",
    icon: <FiUsers />,
  },
  {
    title: "Boost Your Portfolio",
    desc: "Strengthen your profile by publishing high-quality content under your name.",
    icon: <FiBookOpen />,
  },
];

const submissionSteps = [
  "Submit your article idea or draft.",
  "Our editorial team reviews it for quality & originality.",
  "We provide feedback or approval.",
  "Your article gets published & promoted!",
];

const WriteWithUs = () => {
  return (
    <div className="write-page">
      {/* Hero Section */}
      <section className="write-hero">
        <h1>Write With Us ✍️</h1>
        <p>
          Join our community of writers and share your insights with the world.
          Let your words inspire, educate, and reach thousands of readers.
        </p>
        <button className="cta-btn">Become a Contributor</button>
      </section>

      {/* Benefits Section */}
      <section className="write-benefits">
        <h2>Why Write With Us?</h2>
        <div className="benefits-grid">
          {writerBenefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Submission Process */}
      <section className="write-steps">
        <h2>Submission Process</h2>
        <div className="steps-grid">
          {submissionSteps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{index + 1}</div>
              <p>
                <FiCheckCircle className="check-icon" /> {step}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="write-cta">
        <h2>Ready to Share Your Voice?</h2>
        <p>
          Submit your article idea today and become a valued part of our growing writer community.
        </p>
        <button className="cta-btn">Submit Your Article</button>
      </section>
    </div>
  );
};

export default WriteWithUs;
