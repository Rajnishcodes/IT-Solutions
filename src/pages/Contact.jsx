import React, { useState } from "react";
import "../styles/Contact.css";
import BackgroundVideo from "../assets/backgroundVideo.mp4"; // Add your video file here

const SimpleContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    service: "",
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
        headers: { "Content-Type": "application/json" },
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
      {/* Video Background */}
      <video autoPlay loop muted playsInline className="contact-video">
        <source src={BackgroundVideo} type="video/mp4" />
      </video>

      <div className="contact-overlay">
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
                placeholder="Full Name *"
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
          </form>
        </div>
      </div>
    </section>
  );
};

export default SimpleContactForm;
