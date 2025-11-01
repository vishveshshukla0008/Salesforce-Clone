import React from "react";

const PeopleThoghtCards = () => {
  return (
    <div className="people-cards-wrapper">
      <h1>How can we help grow your business?</h1>
      <div className="images-wrapper">
        <div className="img-with-link">
          <img
            src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/04/php-products-small-business-in.jpg?resize=1024,1024"
            alt=""
          />
          <a href="">Sell faster</a>
        </div>
        <div className="img-with-link">
          <img
            src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/04/php-products-sales-in.jpg?resize=1024,1024"
            alt=""
          />
          <a href="">Close more deals</a>
        </div>
        <div className="img-with-link">
          <img
            src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/04/php-products-service-in.jpg?resize=1024,1024"
            alt=""
          />
          <a href="">scale service</a>
        </div>
        <div className="img-with-link">
          <img
            src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/03/php-products-marketing.jpg?resize=1024,1024"
            alt=""
          />
          <a href="">Build customer relationships</a>
        </div>
      </div>
    </div>
  );
};

export default PeopleThoghtCards;
