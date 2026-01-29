import React, { useState } from "react"; 
import "../styles/Contact.css";
import BackgroundVideo from "../assets/backgroundVideo.mp4"; // Video file

const SimpleContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    service: "",
    message: "",
  });

  // ========== Additional Feature: Validation Errors ==========
  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });

    // ========== Additional Feature: Real-time Validation ==========
    if (e.target.id === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(e.target.value)) {
        setErrors((prev) => ({ ...prev, email: "Invalid email" }));
      } else {
        setErrors((prev) => ({ ...prev, email: "" }));
      }
    }

    if (e.target.id === "phone") {
      const phoneRegex = /^\d{10}$/; // only 10-digit numbers
      if (e.target.value && !phoneRegex.test(e.target.value)) {
        setErrors((prev) => ({ ...prev, phone: "Invalid Phone number" }));
      } else {
        setErrors((prev) => ({ ...prev, phone: "" }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ========== Additional Feature: Pre-submit Validation ==========
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!emailRegex.test(formData.email)) {
      alert("Invalid email");
      return;
    }

    if (formData.phone && !phoneRegex.test(formData.phone)) {
      alert("Invalid Phone number");
      return;
    }

    if (!formData.name || !formData.message) {
      alert("Name and Message are required");
      return;
    }

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
              <div style={{ position: "relative" }}>
                <input
                  type="email"
                  id="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {/* ========== Additional Feature: Inline Error ========= */}
                {errors.email && (
                  <span className="error-text">{errors.email}</span>
                )}
              </div>
            </div>

            <div className="form-row">
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
              <div style={{ position: "relative" }}>
                <input
                  type="text"
                  id="phone"
                  placeholder="Contact Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {/* ========== Additional Feature: Inline Error ========= */}
                {errors.phone && (
                  <span className="error-text">{errors.phone}</span>
                )}
              </div>
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
