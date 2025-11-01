import React from "react";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="main-footer">
        <div className="img-wrapper">
          <img
            src="https://a.sfdcstatic.com/shared/images/c360-nav/salesforce-with-type-logo.svg"
            alt=""
          />
          <div className="icons-wrapper">
            <i class="ri-facebook-line"></i>
            <i class="ri-twitter-x-line"></i>
            <i class="ri-linkedin-fill"></i>
            <i class="ri-instagram-line"></i>
            <i class="ri-youtube-line"></i>
          </div>
          <span>Call us at 1800-420-7332</span>
        </div>
        <div className="links-section l-1">
          <h4>New to Salesforce?</h4>
          <span>Why Salesforce</span>
          <span>What is CRM ?</span>
          <span>Explore All products</span>
          <span>SaaS</span>
          <span>Customer Success</span>
          <span>Product Pricing</span>
        </div>
        <div className="links-section l-2">
          <h4>About Salesforce?</h4>
          <span>Our Story</span>
          <span>Careers</span>
          <span>Press</span>
          <span>Blog</span>
          <span>Security and performance</span>
          <span>Salesforce.org</span>
          <span>Best CRM Software</span>
          <span>Sustainability</span>
          <span>Legal</span>
          <span>Give us your Feedback</span>
        </div>
        <div className="links-section l-1">
          <h4>Popular Links</h4>
          <span>Salesforce Mobile App</span>
          <span>Business App store</span>
          <span>DreamForce</span>
          <span>CRM software</span>
          <span>Salesforce plus</span>
          <span>Salesforce for startups</span>
        </div>
      </div>

      <div className="last-footer">
        <div className="first">
          <i class="ri-global-line"></i>{" "}
          <p>
            <span>Worldwide</span> <i class="ri-arrow-down-s-line"></i>
          </p>
        </div>
        <div className="second">
          <div className="footer-links-wrapper">
            <a href="">Legal</a>
            <a href="">Terms of Service</a>
            <a href="">Privacy</a>
            <a href="">Responsible Disclosure</a>
            <a href="">Trust</a>
            <a href="">Cookie Preference</a>
            <a href="">Your Privacy Choice</a>
          </div>
          <div className="details">
            © Copyright 2025 salesforce, Inc. <span>All rights reserved.</span>
            Various trademarks held by their respective owners.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
