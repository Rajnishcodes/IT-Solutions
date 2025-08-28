import React from "react";
import {
  FiShoppingCart,
  FiTrendingUp,
  FiUsers,
  FiDollarSign,
  FiCheckCircle,
  FiHeadphones,
} from "react-icons/fi";
import "./SellWithUs.css";

const sellerBenefits = [
  {
    title: "Reach More Customers",
    desc: "Get access to thousands of potential buyers and increase your brand visibility.",
    icon: <FiUsers />,
  },
  {
    title: "Boost Your Sales",
    desc: "Leverage our platform to maximize your revenue and grow faster.",
    icon: <FiTrendingUp />,
  },
  {
    title: "Secure Payments",
    desc: "Enjoy hassle-free transactions with fast and secure payment processing.",
    icon: <FiDollarSign />,
  },
  {
    title: "Marketing Support",
    desc: "We help you promote your products with campaigns and featured placements.",
    icon: <FiShoppingCart />,
  },
];

const processSteps = [
  "Register as a seller on our platform.",
  "List your products with details & pricing.",
  "We verify and approve your listings.",
  "Start selling and grow your business!",
];

const SellWithUs = () => {
  return (
    <div className="sell-page">
      {/* Hero Section */}
      <section className="sell-hero">
        <h1>Sell With Us 🛒</h1>
        <p>
          Expand your business by joining our marketplace. Connect with more
          customers and increase your sales effortlessly.
        </p>
        <button className="cta-btn">Start Selling Today</button>
      </section>

      {/* Benefits Section */}
      <section className="sell-benefits">
        <h2>Why Sell With Us?</h2>
        <div className="benefits-grid">
          {sellerBenefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="sell-steps">
        <h2>How It Works</h2>
        <div className="steps-grid">
          {processSteps.map((step, index) => (
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
      <section className="sell-cta">
        <h2>Ready to Grow Your Business?</h2>
        <p>
          Join our marketplace and start selling to a wider audience today.
        </p>
        <button className="cta-btn">Join Now</button>
      </section>
    </div>
  );
};

export default SellWithUs;
