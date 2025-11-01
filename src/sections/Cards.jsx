import React from "react";

const Cards = () => {
  return (
    <div className="cards-and-naturalScene">
      <div className="radiant-color"></div>
      <div className="cards-wrapper">
        <div className="card">
          <div></div>
          <img
            src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/03/pb-hp-product-smb_icon-1.jpg?resize=768,433"
            alt=""
          />
          <div className="text-section">
            <p className="heading-1">Small Business</p>
            <p>Sales, service, and email outreach tools in a single app.</p>
            <a href="">Learn More</a>
          </div>
        </div>
        <div className="card">
          <div></div>
          <img
            src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/03/pb-hp-product-smb_icon-2.jpg?resize=768,433"
            alt=""
          />
          <div className="text-section">
            <p>Sales Cloud</p>
            <p>Sales, service, and email outreach tools in a single app.</p>
            <a href="">Learn More</a>
          </div>
        </div>
        <div className="card">
          <div></div>
          <img
            src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/03/pb-hp-product-smb_icon-3.jpg?resize=768,433"
            alt=""
          />
          <div className="text-section">
            <p>Service Cloud</p>
            <p>
              Make customers happy faster and build loyalty with Service Cloud.
            </p>
            <a href="">Learn More</a>
          </div>
        </div>
        <div className="card">
          <div></div>
          <img
            src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/03/pb-hp-product-smb_icon-4.jpg?resize=768,433"
            alt=""
          />
          <div className="text-section">
            <p>Marketing Cloud</p>
            <p>
              Build customer relationships for life with data-first digital
              marketing.
            </p>
            <a href="">Learn More</a>
          </div>
        </div>
        <div className="natural-scene">
        <button>View all our products</button>
      </div>
      </div>
      
    </div>
  );
};

export default Cards;
