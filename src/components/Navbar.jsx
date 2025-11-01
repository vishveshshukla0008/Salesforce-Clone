import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img
          src="https://a.sfdcstatic.com/shared/images/c360-nav/salesforce-with-type-logo.svg"
          alt=""
        />
        <i className="ri-menu-line humburger"></i>
      </div>
      <a href="">Products</a>
      <a href="">Industries</a>
      <a href="">Customers</a>
      <a href="">
        More <i className="ri-arrow-drop-down-line"></i>
      </a>
      <div className="search-section">
        <i className="ri-search-ai-line"></i>
        <span>Ask Agentforce anything</span>
      </div>
      <div>
        <a href="">Contact Us</a>
        <p>1800-420-7332</p>
      </div>
      <i className="ri-global-line"></i>
      <a href="">
        <span>Login</span>
      </a> 
      <div className="btns-wrapper">
        <i className="ri-user-fill"></i> 
        <button>Try for free</button>
      </div>
    </nav>
  );
};

export default Navbar;
