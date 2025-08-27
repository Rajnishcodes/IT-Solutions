import React from "react";
import {
  FaUserTie,
  FaUsers,
  FaChartLine,
  FaCalendarCheck,
  FaMoneyCheckAlt,
  FaIdBadge,
  FaLaptopHouse,
  FaHandshake,
} from "react-icons/fa";
import "./HRSoftware.css";

const hrFeatures = [
  {
    icon: <FaUserTie />,
    title: "Recruitment Management",
    desc: "Streamline hiring with applicant tracking, smart filtering, and interview scheduling.",
  },
  {
    icon: <FaUsers />,
    title: "Employee Management",
    desc: "Maintain employee records, roles, and team structures in one platform.",
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: "Payroll Automation",
    desc: "Simplify salary processing with automated tax calculations and payslip generation.",
  },
  {
    icon: <FaChartLine />,
    title: "Performance Tracking",
    desc: "Monitor KPIs, set goals, and conduct appraisals with real-time insights.",
  },
  {
    icon: <FaCalendarCheck />,
    title: "Attendance & Leave",
    desc: "Manage shifts, attendance, and leave requests with ease.",
  },
  {
    icon: <FaIdBadge />,
    title: "Onboarding & Offboarding",
    desc: "Digitize onboarding workflows and manage smooth exits efficiently.",
  },
  {
    icon: <FaLaptopHouse />,
    title: "Remote Work Tools",
    desc: "Enable hybrid work with virtual check-ins and productivity tracking.",
  },
  {
    icon: <FaHandshake />,
    title: "Employee Engagement",
    desc: "Boost culture with surveys, feedback, and recognition programs.",
  },
];

const HRSoftware = () => {
  return (
    <div className="hr-page">
      {/* === Hero Section === */}
      <header className="hr-hero">
        <div className="hr-hero-content">
          <h1>Smart HR Software</h1>
          <p>
            Manage recruitment, payroll, performance, and employee engagement
            all in one powerful platform designed for modern workplaces.
          </p>
        </div>
      </header>

      {/* === Features Section === */}
      <section className="hr-features">
        <h2>Key Features</h2>

        <div className="hr-grid">
          {hrFeatures.map((feature, index) => (
            <div className="hr-card" key={index}>
              <div className="hr-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="hr-cta">
        <h2>Transform Your HR Management</h2>
        <p>
          Empower your workforce with seamless HR operations, from recruitment
          to retirement — all on a single platform.
        </p>
        <button className="contact-btn">Request a Demo</button>
      </section>
    </div>
  );
};

export default HRSoftware;
