// // src/components/Services.js
// import React from 'react';
// import '../styles/Services.css'; 
// import itConsulting from '../assets/itConsulting.png';
// import itDesign from '../assets/itDesign.png';
// import itMaintenance from '../assets/itMaintenance.png';

// // ServiceCard Component (Moved Here)
// const ServiceCard = ({ imageSrc, title, services }) => {
//   return (
//     <div className="service-card">
//       <div className="service-card-image-container">
//         <img src={imageSrc} alt={title} className="service-card-image" />
//       </div>
//       <h3 className="service-card-title">{title}</h3>
//       <ul className="service-card-list">
//         {services.map((service, index) => (
//           <li key={index} className="service-card-list-item">
//             {service}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// // ServicesPage Component (Moved Here)
// const ServicesPage = () => {
//   const servicesData = [
//     {
//       imageSrc: itConsulting,
//       title: 'IT Infrastructure Consulting Services',
//       services: [
//         'IT Landscape Analysis',
//         'Defining IT Road Map',
//         'IT Infrastructure (on-prem and Cloud) Optimization',
//       ],
//     },
//     {
//       imageSrc: itDesign,
//       title: 'IT Infrastructure Design and Deployment Services',
//       services: [
//         'Unified Messaging',
//         'Collaboration',
//         'Virtualization',
//         'Security Solution',
//         'Cloud Services',
//       ],
//     },
//     {
//       imageSrc: itMaintenance,
//       title: 'IT Maintenance and Support Services',
//       services: [
//         'HelpDesk Support',
//         'Database Management',
//         'Desktop and Server Support',
//         'Application Support',
//       ],
//     },
//   ];

//   return (
//     <div className="services-page-container">
//       <div className="services-header">
//         <h1 className="services-title">Services</h1>
//       </div>

//       <div className="services-cards-grid">
//         {servicesData.map((data, index) => (
//           <ServiceCard
//             key={index}
//             imageSrc={data.imageSrc}
//             title={data.title}
//             services={data.services}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServicesPage; // Export only the main ServicesPage