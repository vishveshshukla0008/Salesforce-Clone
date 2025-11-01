import React from "react";

const Modulecards = () => {
  return (
    <div className="module-wrapper">
      <div className="module">
        <img
          src="https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/salesforce-quick-look-1/259d8619519bb3912ef0100cee5071cc_badge.png"
          alt=""
        />
        <div className="text-part">
          <span>Module</span>
          <h3>Salesforece Values : Quick Look</h3>
          <p>
            Learn how Salesforce helps your business build stronger
            relationships with your customers.
          </p>
          <a href="">Start learning</a>
        </div>
      </div>
      <div className="module">
        <img
          src="https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/lex_implementation_basics/56b5a2cb9fb731dbfe6b5b88cd855775_badge.png"
          alt=""
        />
        <div className="text-part">
          <span>Module</span>
          <h3>Salesforece CRM</h3>
          <p>
            Learn how to use customer relationship management (CRM) software to
            grow your business.
          </p>
          <a href="">Start learning</a>
        </div>
      </div>
      <div className="module">
        <img
          src="https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/sales-cloud-platform-quick-look/b91b2499486a772a4eee8ce55aa32b57_badge.png"
          alt=""
        />
        <div className="text-part">
          <span>Module</span>
          <h3>Sales Cloud Basics</h3>
          <p>
            Grow your business, boost productivity, and make smart decisions
            with Sales Cloud.
          </p>
          <a href="">Start learning</a>
        </div>
      </div>
    </div>
  );
};

export default Modulecards;
