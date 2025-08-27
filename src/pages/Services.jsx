import React from "react";
import "../styles/Services.css";
<<<<<<< HEAD
import ComputerIcon from "@mui/icons-material/Computer";
import PsychologyIcon from "@mui/icons-material/Psychology";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { Button } from "@mui/material";
=======
>>>>>>> a4657f17d677da2027588233a92a885dbdf04cf0

const services = [
  {
    title: "Web Development",
<<<<<<< HEAD
    description:
      "Custom websites and web applications tailored to your business needs.",
    icon: <ComputerIcon fontSize="large" color="primary" />,
  },
  {
    title: "AI Integration",
    description:
      "Leveraging artificial intelligence to enhance your processes and systems.",
    icon: <PsychologyIcon fontSize="large" color="secondary" />,
  },
  {
    title: "IT Consulting",
    description:
      "Expert advice to optimize your IT infrastructure and strategy.",
    icon: <BusinessCenterIcon fontSize="large" color="success" />,
=======
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
>>>>>>> a4657f17d677da2027588233a92a885dbdf04cf0
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
<<<<<<< HEAD
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="/contact"
          className="contact-btn"
        >
          Contact Us
        </Button>
=======
        <button className="contact-btn">Contact Us</button>
>>>>>>> a4657f17d677da2027588233a92a885dbdf04cf0
      </div>
    </section>
  );
};

export default ServicesSection;
