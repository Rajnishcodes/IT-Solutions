import React from "react";
import {
  FaCreditCard,
  FaMobileAlt,
  FaLock,
  FaGlobe,
  FaBolt,
  FaSyncAlt,
  FaWallet,
  FaChartLine,
} from "react-icons/fa";
import "./PaymentGateway.css";

const gatewayFeatures = [
  {
    icon: <FaCreditCard />,
    title: "Multi-Payment Support",
    desc: "Accept cards, UPI, wallets, and net banking with a single integration.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Optimized",
    desc: "Seamless checkout experience across all devices and apps.",
  },
  {
    icon: <FaLock />,
    title: "Bank-Grade Security",
    desc: "End-to-end encryption with PCI-DSS compliance for safe transactions.",
  },
  {
    icon: <FaGlobe />,
    title: "Global Payments",
    desc: "Support for international currencies and cross-border transactions.",
  },
  {
    icon: <FaBolt />,
    title: "Instant Settlements",
    desc: "Get faster payouts with real-time settlement options.",
  },
  {
    icon: <FaSyncAlt />,
    title: "Recurring Billing",
    desc: "Automate subscriptions and recurring payments effortlessly.",
  },
  {
    icon: <FaWallet />,
    title: "Digital Wallet Integration",
    desc: "Integrate with popular wallets for one-tap checkout.",
  },
  {
    icon: <FaChartLine />,
    title: "Analytics Dashboard",
    desc: "Monitor transactions with real-time analytics and reporting tools.",
  },
];

const PaymentGateway = () => {
  return (
    <div className="pg-page">
      {/* === Hero Section === */}
      <header className="pg-hero">
        <div className="pg-hero-content">
          <h1>Next-Gen Payment Gateway</h1>
          <p>
            Secure, fast, and global payment solutions designed to power your
            business with seamless transactions and advanced analytics.
          </p>
        </div>
      </header>

      {/* === Features Section === */}
      <section className="pg-features">
        <h2>Key Features</h2>

        <div className="pg-grid">
          {gatewayFeatures.map((feature, index) => (
            <div className="pg-card" key={index}>
              <div className="pg-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="pg-cta">
        <h2>Start Accepting Payments Today</h2>
        <p>
          Empower your business with our secure, scalable, and global payment
          gateway. Experience faster checkouts and happier customers.
        </p>
        <button className="contact-btn">Get Started</button>
      </section>
    </div>
  );
};

export default PaymentGateway;
