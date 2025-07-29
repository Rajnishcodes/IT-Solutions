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
        </form>
      </div>
    </section>
  );
};

export default SimpleContactForm;
