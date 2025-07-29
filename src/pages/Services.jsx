import React from "react";
import "../styles/Services.css";

const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications tailored to your business needs.",
    icon: "💻", // You can replace this with an image later
  },
  {
    title: "AI Integration",
    description: "Leveraging artificial intelligence to enhance your processes and systems.",
    icon: "🧠",
  },
  {
    title: "IT Consulting",
    description: "Expert advice to optimize your IT infrastructure and strategy.",
    icon: "📝",
  },
];

const ServicesSection = () => {
  return (
    <section className="services">
      <header className="services-header">
        <h1 className="logo">IT Solution Builder</h1>
        <h2 className="title">What We Offer</h2>
      </header>

      <div className="services-cards">
        {services.map((service, index) => (
          <div className="services-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <div className="cta">
        <button className="contact-btn">Contact Us</button>
      </div>
    </section>
  );
};

export default ServicesSection;
