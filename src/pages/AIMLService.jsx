import React from "react";
import {
  FaBrain,
  FaRobot,
  FaChartLine,
  FaCamera,
  FaLanguage,
} from "react-icons/fa";
import "../styles/AIMLService.css"; // 👈 new CSS file

const AIMLService = () => {
  return (
    <div className="aiml-page">
      {/* === Hero Section === */}
      <header className="aiml-hero">
        <div className="aiml-hero-content">
          <h1>AI & Machine Learning Services</h1>
          <p>
            Unlock the power of artificial intelligence with tailored ML
            solutions that drive automation, insights, and innovation.
          </p>
        </div>
      </header>

      {/* === Features Section === */}
      <section className="aiml-features">
        <h2>Our AI/ML Capabilities</h2>
        <div className="aiml-grid">
          <div className="aiml-card">
            <FaBrain className="aiml-icon" />
            <h3>Predictive Analytics</h3>
            <p>
              Harness data-driven insights to forecast trends, risks, and
              opportunities with precision.
            </p>
          </div>

          <div className="aiml-card">
            <FaRobot className="aiml-icon" />
            <h3>Automation & RPA</h3>
            <p>
              Streamline workflows with AI-powered bots and robotic process
              automation.
            </p>
          </div>

          <div className="aiml-card">
            <FaCamera className="aiml-icon" />
            <h3>Computer Vision</h3>
            <p>
              Enable image and video recognition for healthcare, retail,
              security, and more.
            </p>
          </div>

          <div className="aiml-card">
            <FaLanguage className="aiml-icon" />
            <h3>Natural Language Processing</h3>
            <p>
              Enhance customer experience with chatbots, sentiment analysis, and
              AI-driven assistants.
            </p>
          </div>

          <div className="aiml-card">
            <FaChartLine className="aiml-icon" />
            <h3>AI Strategy & Consulting</h3>
            <p>
              Design and implement AI solutions aligned with your business
              goals.
            </p>
          </div>
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="aiml-cta">
        <h2>Transform Your Business with AI</h2>
        <p>
          Let’s build innovative, intelligent solutions together to make your
          business smarter and future-ready.
        </p>
        <button className="contact-btn">Contact Us</button>
      </section>
    </div>
  );
};

export default AIMLService;
