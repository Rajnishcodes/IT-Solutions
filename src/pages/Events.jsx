import React from "react";
import {
  FaCalendarAlt,
  FaUsers,
  FaMicrophone,
  FaGlobe,
  FaHandshake,
} from "react-icons/fa";
import "../styles/Events.css";
import BackgroundVideo from "../assets/backgroundVideo.mp4"; // Add your video file here

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      date: "Oct 15, 2025",
      title: "AI & Innovation Summit",
      desc: "A 2-day summit exploring AI-driven transformation across industries.",
    },
    {
      id: 2,
      date: "Nov 3, 2025",
      title: "Future of Web Conference",
      desc: "Dive into modern web technologies, frameworks, and best practices.",
    },
    {
      id: 3,
      date: "Dec 10, 2025",
      title: "Global Networking Meetup",
      desc: "Connect with professionals and entrepreneurs across the globe.",
    },
  ];

  return (
    <div className="event-page">
      {/* Hero Section with Video */}
      <header className="event-hero">
        <video autoPlay loop muted playsInline className="event-video">
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
        <div className="event-hero-content">
          <h1>Join Our Events</h1>
          <p>
            Be part of inspiring conferences, workshops, and networking sessions
            designed to connect innovators, creators, and leaders from across
            the globe.
          </p>
        </div>
      </header>

      {/* Features Section */}
      <section className="event-features">
        <h2>Why Attend Our Events?</h2>
        <div className="event-grid">
          <div className="event-card">
            <FaCalendarAlt className="event-icon" />
            <h3>Conferences</h3>
            <p>Stay updated with the latest industry innovations and insights.</p>
          </div>

          <div className="event-card">
            <FaUsers className="event-icon" />
            <h3>Workshops</h3>
            <p>Hands-on sessions designed to help you learn and grow.</p>
          </div>

          <div className="event-card">
            <FaMicrophone className="event-icon" />
            <h3>Speakers</h3>
            <p>Hear from leaders, innovators, and pioneers shaping the future.</p>
          </div>

          <div className="event-card">
            <FaGlobe className="event-icon" />
            <h3>Networking</h3>
            <p>Meet peers, mentors, and professionals from around the globe.</p>
          </div>

          <div className="event-card">
            <FaHandshake className="event-icon" />
            <h3>Collaboration</h3>
            <p>Build meaningful connections and explore new opportunities.</p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="upcoming-events">
        <h2>Upcoming Events</h2>
        <div className="events-grid">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="upcoming-card">
              <span className="event-date">{event.date}</span>
              <h3>{event.title}</h3>
              <p>{event.desc}</p>
              <button className="event-btn">Register</button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="event-cta">
        <h2>Don’t Miss Out!</h2>
        <p>
          Reserve your spot today and gain access to inspiring sessions, live
          demos, and unparalleled networking opportunities.
        </p>
        <button className="contact-btn">Join Us</button>
      </section>
    </div>
  );
};

export default Events;
