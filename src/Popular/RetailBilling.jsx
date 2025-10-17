import React from "react";
import {
  FaCashRegister,
  FaFileInvoiceDollar,
  FaUsers,
  FaChartBar,
  FaBoxOpen,
  FaReceipt,
  FaCreditCard,
  FaCogs,
} from "react-icons/fa";
import "./RetailBilling.css";

const billingFeatures = [
  {
    icon: <FaCashRegister />,
    title: "Smart POS System",
    desc: "Quick and reliable billing with an intuitive point-of-sale interface.",
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "Invoice Management",
    desc: "Generate, track, and manage invoices seamlessly in real-time.",
  },
  {
    icon: <FaUsers />,
    title: "Customer Management",
    desc: "Build customer profiles, track purchase history, and offer loyalty rewards.",
  },
  {
    icon: <FaChartBar />,
    title: "Sales Reports",
    desc: "Gain insights with detailed analytics and sales performance reports.",
  },
  {
    icon: <FaBoxOpen />,
    title: "Inventory Tracking",
    desc: "Monitor stock levels and get alerts for low inventory automatically.",
  },
  {
    icon: <FaReceipt />,
    title: "Digital Receipts",
    desc: "Send receipts via email or SMS for a paperless and modern experience.",
  },
  {
    icon: <FaCreditCard />,
    title: "Multi-Payment Support",
    desc: "Accept payments via cash, cards, UPI, and wallets with ease.",
  },
  {
    icon: <FaCogs />,
    title: "Customizable Settings",
    desc: "Easily configure billing workflows to match your retail business.",
  },
];

const RetailBilling = () => {
  return (
    <div className="rb-page">
      {/* === Hero Section === */}
      <header className="rb-hero">
        <div className="rb-hero-content">
          <h1>Retail Billing Software</h1>
          <p>
            Simplify your billing process with modern POS solutions, automated invoices,
            and powerful analytics for smarter retail management.
          </p>
        </div>
      </header>

      {/* === Features Section === */}
      <section className="rb-features">
        <h2>Key Features</h2>

        <div className="rb-grid">
          {billingFeatures.map((feature, index) => (
            <div className="rb-card" key={index}>
              <div className="rb-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="rb-cta">
        <h2>Upgrade Your Retail Experience</h2>
        <p>
          Empower your store with our modern retail billing software and boost efficiency
          with faster billing and better customer management.
        </p>
        <button className="contact-btn">Contact Us</button>
      </section>
    </div>
  );
};

export default RetailBilling;
