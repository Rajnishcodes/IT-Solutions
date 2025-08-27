<<<<<<< HEAD
import React, { useState } from "react";
import "../styles/Contact.css";

const SimpleContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message || "Message sent successfully!");
    } catch (error) {
      alert("Error submitting form");
      console.error(error);
    }
  };

  return (
    <section className="contact-section">
      <h1 className="contact-heading">Get in Touch with Us</h1>
      <p className="contact-subtext">
        Fill Out the Form Below to Discover More About Our Services
      </p>

      <div className="form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              id="name"
              placeholder="Name *"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              id="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <input
              type="text"
              id="phone"
              placeholder="Contact Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <textarea
            id="message"
            placeholder="Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="send-btn">
            SEND MESSAGE
          </button>
=======
import React from "react";
import "../styles/Contact.css";

const SimpleContactForm = () => {
  return (
    <section className="contact-section">
      <h1 className="contact-heading">CONTACT US</h1>

      <div className="form-container">
        <form className="contact-form">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Full Name" />

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Email Address" />

          <label htmlFor="service">Choose Service</label>
          <select id="service">
            <option>Web Development</option>
            <option>Mobile App Development</option>
            <option>Cybersecurity</option>
            <option>Cloud Solutions</option>
            <option>IT Consulting</option>
          </select>

          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Message" rows="4"></textarea>

          <button type="submit">Submit</button>
>>>>>>> a4657f17d677da2027588233a92a885dbdf04cf0
        </form>
      </div>
    </section>
  );
};

export default SimpleContactForm;
