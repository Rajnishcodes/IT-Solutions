import React from "react";
import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaApple,
  FaAndroid,
  FaReact,
  FaCode,
  FaCloudUploadAlt,
  FaShieldAlt,
  FaUserCheck,
} from "react-icons/fa";
import "../styles/MobileAppDevelopment.css";
import BackgroundVideo from "../assets/backgroundVideo.mp4"; // Add your video file here

const mobileServices = [
  {
    icon: <FaApple />,
    title: "iOS App Development",
    desc: "Custom iPhone and iPad apps with high performance and Apple guidelines compliance.",
  },
  {
    icon: <FaAndroid />,
    title: "Android App Development",
    desc: "Build powerful Android applications optimized for all devices and versions.",
  },
  {
    icon: <FaReact />,
    title: "Cross-Platform Apps",
    desc: "Develop apps using React Native or Flutter for seamless multi-platform experiences.",
  },
  {
    icon: <FaCode />,
    title: "Custom Mobile Solutions",
    desc: "Tailored apps for businesses, startups, and enterprises with scalable architecture.",
  },
  {
    icon: <FaCloudUploadAlt />,
    title: "App Deployment",
    desc: "Launch apps on App Store, Google Play, and private enterprise stores smoothly.",
  },
  {
    icon: <FaShieldAlt />,
    title: "App Security",
    desc: "Implement security best practices, authentication, and data encryption.",
  },
  {
    icon: <FaUserCheck />,
    title: "UI/UX Design",
    desc: "Deliver user-friendly interfaces with engaging designs and smooth experiences.",
  },
  {
    icon: <FaMobileAlt />,
    title: "App Maintenance",
    desc: "Ongoing support, updates, and optimizations for maximum performance.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const MobileAppDevelopment = () => {
  return (
    <div className="mobile-page">
      {/* === Hero Section with Video === */}
      <motion.header
        className="mobile-hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <video autoPlay loop muted playsInline className="mobile-video">
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
        <div className="mobile-hero-content">
          <h1>Mobile App Development</h1>
          <p>
            Create innovative, scalable, and high-performing mobile apps for
            iOS, Android, and beyond.
          </p>
        </div>
      </motion.header>

      {/* === Service Cards === */}
      <section className="mobile-services">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Our Mobile App Expertise
        </motion.h2>

        <div className="mobile-grid">
          {mobileServices.map((service, index) => (
            <motion.div
              className="mobile-card"
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="mobile-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === CTA Section === */}
      <motion.section
        className="mobile-cta"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Let’s Build Your Next Mobile App</h2>
        <p>
          Whether it’s a consumer-facing app or an enterprise-grade solution, we
          deliver apps that drive results.
        </p>
        <motion.button
          className="contact-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.button>
      </motion.section>
    </div>
  );
};

export default MobileAppDevelopment;
