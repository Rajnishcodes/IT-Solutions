import React from "react";
import { FiTrendingUp, FiTarget, FiUsers, FiCheckCircle } from "react-icons/fi";
import "./Advertise.css";

const advertiseFeatures = [
  {
    title: "Wide Reach",
    desc: "Target a large audience across multiple digital channels.",
    icon: <FiTrendingUp />,
  },
  {
    title: "Targeted Ads",
    desc: "Deliver ads to the right audience with precision targeting.",
    icon: <FiTarget />,
  },
  {
    title: "Trusted Network",
    desc: "Collaborate with a platform trusted by thousands of businesses.",
    icon: <FiUsers />,
  },
];

const plans = [
  {
    id: 1,
    title: "Starter Plan",
    price: "$199 / month",
    features: [
      "Basic Ad Placement",
      "1 Sponsored Post",
      "Reach up to 5,000 Users",
      "Limited Time",
    ],
  },
  {
    id: 2,
    title: "Professional Plan",
    price: "$499 / month",
    features: [
      "Premium Ad Placement",
      "3 Sponsored Posts",
      "Email Newsletter Feature",
      "Reach up to 25,000 Users",
    ],
  },
  {
    id: 3,
    title: "Enterprise Plan",
    price: "Custom Pricing",
    features: [
      "Dedicated Campaign Manager",
      "Unlimited Sponsored Posts",
      "Exclusive Ad Slots",
      "Reach Global Audience",
    ],
  },
];

const Advertise = () => {
  return (
    <div className="advertise-page">
      {/* Hero Section */}
      <section className="advertise-hero">
        <h1>Advertise With Us 🚀</h1>
        <p>
          Boost your brand visibility by reaching thousands of potential
          customers worldwide.
        </p>
        <button className="cta-btn">Get Started</button>
      </section>

      {/* Why Advertise Features */}
      <section className="advertise-features">
        <h2>Why Choose Us?</h2>
        <div className="advertise-grid">
          {advertiseFeatures.map((feature, index) => (
            <div key={index} className="advertise-card">
              <div className="advertise-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Plans Section */}
      <section className="advertise-plans">
        <h2>Our Advertising Plans</h2>
        <div className="plans-grid">
          {plans.map((plan) => (
            <div key={plan.id} className="plan-card">
              <h3>{plan.title}</h3>
              <p className="price">{plan.price}</p>
              <ul>
                {plan.features.map((feature, index) => (
                  <li key={index}>
                    <FiCheckCircle className="check-icon" /> {feature}
                  </li>
                ))}
              </ul>
              <button className="plan-btn">Choose Plan</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Advertise;
