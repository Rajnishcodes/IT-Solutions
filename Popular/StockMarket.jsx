import React from "react";
import "./StockMarket.css";
import {
  FaChartLine,
  FaRobot,
  FaBriefcase,
  FaLock,
  FaBell,
  FaGlobe,
} from "react-icons/fa6";

const stockFeatures = [
  {
    title: "Real-Time Market Data",
    desc: "Stay ahead with instant access to live stock quotes, indices, and trading volumes.",
    icon: <FaChartLine />,
  },
  {
    title: "AI-Powered Analytics",
    desc: "Leverage AI models to analyze market trends and make informed trading decisions.",
    icon: <FaRobot />,
  },
  {
    title: "Portfolio Management",
    desc: "Easily manage and optimize your investments with advanced portfolio tracking tools.",
    icon: <FaBriefcase />,
  },
  {
    title: "Secure Transactions",
    desc: "Ensure safe and seamless trading with robust authentication and encryption.",
    icon: <FaLock />,
  },
  {
    title: "Custom Alerts",
    desc: "Set price alerts and notifications for stocks and market events you care about.",
    icon: <FaBell />,
  },
  {
    title: "Cross-Platform Access",
    desc: "Access your trading dashboard from web, mobile, and tablet – anytime, anywhere.",
    icon: <FaGlobe />,
  },
];

const StockMarket = () => {
  return (
    <div className="stock-page">
      {/* Hero Section */}
      <section className="stock-hero">
        <h1>Stock Market Software Solutions</h1>
        <p>
          Build modern, scalable, and secure stock market platforms with real-time
          data, AI analytics, and advanced trading tools.
        </p>
        <button className="contact-btn">Get Started</button>
      </section>

      {/* Features Grid */}
      <section className="stock-features">
        <h2>Our Key Capabilities</h2>
        <div className="stock-grid">
          {stockFeatures.map((feature, index) => (
            <div key={index} className="stock-card">
              <div className="stock-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StockMarket;
