import React from "react";
import {
  FaBug,
  FaCogs,
  FaLaptopCode,
  FaClipboardCheck,
  FaRobot,
  FaShieldAlt,
  FaUserCheck,
  FaMobileAlt,
} from "react-icons/fa";
import "../styles/QATesting.css";
import BackgroundVideo from "../assets/BackgroundVideo.mp4"; // Add your video file here

const qaServices = [
  {
    icon: <FaBug />,
    title: "Manual Testing",
    desc: "Comprehensive manual testing to identify bugs and ensure functionality meets requirements.",
  },
  {
    icon: <FaRobot />,
    title: "Automation Testing",
    desc: "Automated test scripts for faster, scalable, and repeatable quality assurance processes.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Performance Testing",
    desc: "Load, stress, and scalability testing to ensure apps perform under real-world conditions.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Testing",
    desc: "Testing across devices, platforms, and OS versions for consistent mobile performance.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Functional Testing",
    desc: "Validating app features against business requirements to ensure correctness and usability.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Security Testing",
    desc: "Identifying vulnerabilities and applying best practices for secure applications.",
  },
  {
    icon: <FaCogs />,
    title: "Integration Testing",
    desc: "Testing how components and APIs interact together for seamless integration.",
  },
  {
    icon: <FaUserCheck />,
    title: "User Acceptance Testing",
    desc: "Ensuring the end product meets client expectations and is ready for deployment.",
  },
];

const QATesting = () => {
  return (
    <div className="qa-page">
      {/* === Hero Section with Video === */}
      <header className="qa-hero">
        <video autoPlay loop muted playsInline className="qa-video">
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
        <div className="qa-hero-content">
          <h1>QA & Testing Services</h1>
          <p>
            Delivering high-quality software with robust testing strategies,
            automation, and end-to-end validation.
          </p>
        </div>
      </header>

      {/* === QA Services Grid === */}
      <section className="qa-services">
        <h2>Our QA Expertise</h2>
        <div className="qa-grid">
          {qaServices.map((service, index) => (
            <div className="qa-card" key={index}>
              <div className="qa-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="qa-cta">
        <h2>Ready to Ensure Quality?</h2>
        <p>
          Partner with us for reliable QA and testing services that ensure your
          applications are secure, stable, and scalable.
        </p>
        <button className="contact-btn">Contact Us</button>
      </section>
    </div>
  );
};

export default QATesting;
