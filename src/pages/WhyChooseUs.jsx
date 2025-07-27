import React from "react";
import "../styles/WhyChooseUs.css";
import { FiServer, FiLock, FiZap, FiSettings, FiHeadphones, FiDollarSign, FiCalendar, FiUpload } from "react-icons/fi";
import { FaTools } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    { icon: <FiServer />, title: "Scalable Infrastructure", desc: "Easily scale your infrastructure as your business grows." },
    { icon: <FiLock />, title: "High Security", desc: "Protect your data with top-notch security measures." },
    { icon: <FiZap />, title: "Fast Performance", desc: "Experience lightning-fast system performance." },
    { icon: <FaTools />, title: "Custom-Built Solutions", desc: "Get solutions tailored to your specific requirements." },
    { icon: <FiHeadphones />, title: "Reliable Support", desc: "Access our expert support team whenever you need help." },
    { icon: <FiDollarSign />, title: "Cost Effective", desc: "Benefit from competitive pricing without compromise." },
  ];

  const steps = [
    { icon: <FiCalendar />, title: "Plan", desc: "We start by understanding your needs and objectives." },
    { icon: <FiSettings />, title: "Build", desc: "Our team develops a customized solution for you." },
    { icon: <FiUpload />, title: "Deploy", desc: "We deploy the solution and ensure seamless integration." },
  ];

  return (
    <div className="why-choose-us">
      <section className="choose-section">
        <h2>Why Choose Us</h2>
        <div className="grid">
          {features.map((item, index) => (
            <div className="card" key={index}>
              <div className="icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          {steps.map((step, index) => (
            <div className="step" key={index}>
              <div className="icon">{step.icon}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
