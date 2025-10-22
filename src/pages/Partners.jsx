import React from "react";
import "../styles/Partners.css";
import BackgroundVideo from "../assets/backgroundVideo.mp4"; // Add your video file here

// Partner logos (place them in /assets/partners/)
import microsoft from "../assets/microsoftLogo.png";
import broadcom from "../assets/broadcomLogo.png";
import cisco from "../assets/ciscoLogo.png";
import aws from "../assets/awsLogo.png";
import azure from "../assets/azureLogo.png";
import hp from "../assets/hpLogo.png";

const partnersData = [
  { id: 1, name: "Microsoft", logo: microsoft },
  { id: 2, name: "Broadcom", logo: broadcom },
  { id: 3, name: "Cisco", logo: cisco },
  { id: 4, name: "AWS", logo: aws },
  { id: 5, name: "Azure", logo: azure },
  { id: 6, name: "HP", logo: hp },
];

const Partners = () => {
  return (
    <section className="partners-section">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="partners-video">
        <source src={BackgroundVideo} type="video/mp4" />
      </video>

      <h1 className="partners-title">PARTNERS</h1>
      <div className="partners-container">
        {partnersData.map((partner) => (
          <div key={partner.id} className="partner-card">
            <img src={partner.logo} alt={partner.name} />
            <h3>{partner.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
