import React from "react";

const HeroSection = () => {
  return (
    <div className="hero-section-wrapper">
      <div className="hero-section">
        <div className="text-section">
          <h1>Salesforce for SMBs</h1>
          <h1>Now at Special Pricing</h1>
          <p>
            For the first time, Salesforce India is making it easier than ever
            for Indian SMBs to compete — and win.
          </p>
          <p>
            For a limited time, get <span>40% off our flagship solutions</span>{" "}
            — Sales Cloud, Service Cloud, and Marketing Cloud — along with
            fast-track implementation packages, to go live in just 2 weeks.
          </p>
          <button>Know more</button>
        </div>
        <div className="video-section"></div>
      </div>
      <p className="text-heading">
        Learn what Salesforce products can do for you.
      </p>
    </div>
  );
};

export default HeroSection;
