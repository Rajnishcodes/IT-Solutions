import React from "react";
import "../styles/About.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-text">
          <h1><span>Who</span> We Are</h1>
          <p>
            It Solution Builder offers a wide array of application consulting
            services to augment your enterprise and enable you to derive maximum
            business value from your technology investments. Our experienced
            team of industry experts understand your business complexities and
            provide effective, tailor-made solutions which simplify
            implementations and optimize productivity.
            <br /><br />
            We help enterprises in designing and deploying a comprehensive
            project plan and authenticate it for end user acceptance. Our
            holistic approach initiates with assessing your business needs based
            on which we work with you to devise a roadmap to transform your
            enterprise into a business intelligence enterprise.
            <br /><br />
            With a deep experience in software development, deployment, quality
            assurance, and software support, our extensive services cover the
            complete development and implementation life cycle and ensure
            enterprises of steady business workflow.
            <br /><br />
            Our application consulting experts help in optimizing your business
            operations and offer round the clock on-demand support to
            enterprises.
          </p>
        </div>
      </section>

      {/* White Background Section */}
      <section className="about-highlight">
        <div className="about-text2">
        <h1>OUR JOURNEY</h1>
        <p>
            <br />
            From day one, we have aimed to be more than just a technology
            partner — we strive to be enablers of digital transformation.
            Through deep technical expertise, strategic insight, and a passion
            for innovation, we help organizations unlock new opportunities,
            streamline operations, and stay competitive in a rapidly evolving
            digital world.
            <br />
            <br />
            Our multidisciplinary teams specialize in a wide range of areas
            including cloud computing, cybersecurity, data management, DevOps,
            automation, and enterprise IT services. Whether it's modernizing
            legacy infrastructure or implementing next-generation solutions, we
            ensure every engagement is tailored to the unique needs and
            ambitions of our clients.
            <br />
            <br />
            We believe that great technology is built on strong relationships,
            and we take pride in delivering solutions that are not only scalable
            and secure but also intuitive and impactful. With a client-centric
            approach and a track record of successful projects across
            industries, we continue to build a reputation for reliability,
            innovation, and excellence.
            <br />
            <br />
            At our core, we are problem solvers, change-makers, and
            collaborators — dedicated to helping businesses thrive in the
            digital age.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
