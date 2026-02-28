import React from "react";
import "../styles/PageLoader.css";

const PageLoader = () => {
  return (
    <div className="loader-container">
      <div className="loader-circle"></div>
      <p className="loader-text">Loading, please wait...</p>
    </div>
  );
};

export default PageLoader;