import React from "react";
import "./AccountingSoftware.css";
import {
  FaChartPie,
  FaFileInvoiceDollar,
  FaCalculator,
  FaLock,
  FaUsersCog,
  FaCloudUploadAlt,
} from "react-icons/fa";

const accountingFeatures = [
  {
    title: "Smart Invoicing",
    desc: "Generate professional invoices, track payments, and automate reminders effortlessly.",
    icon: <FaFileInvoiceDollar />,
  },
  {
    title: "Expense Tracking",
    desc: "Monitor and categorize expenses in real-time to stay on top of cash flow.",
    icon: <FaCalculator />,
  },
  {
    title: "Financial Reports",
    desc: "Get detailed balance sheets, profit & loss statements, and tax-ready reports.",
    icon: <FaChartPie />,
  },
  {
    title: "Secure Data",
    desc: "Protect sensitive financial data with encryption and multi-factor authentication.",
    icon: <FaLock />,
  },
  {
    title: "Multi-User Access",
    desc: "Collaborate with your team and accountants with controlled role-based access.",
    icon: <FaUsersCog />,
  },
  {
    title: "Cloud Backup",
    desc: "Access your financial data anytime, anywhere with automatic cloud backups.",
    icon: <FaCloudUploadAlt />,
  },
];

const AccountingSoftware = () => {
  return (
    <div className="accounting-page">
      {/* Hero Section */}
      <section className="accounting-hero">
        <h1>Modern Accounting Software Solutions</h1>
        <p>
          Streamline financial management with automation, security, and powerful
          insights designed for businesses of all sizes.
        </p>
        <button className="contact-btn">Request a Demo</button>
      </section>

      {/* Features Grid */}
      <section className="accounting-features">
        <h2>Our Core Features</h2>
        <div className="accounting-grid">
          {accountingFeatures.map((feature, index) => (
            <div key={index} className="accounting-card">
              <div className="accounting-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AccountingSoftware;
