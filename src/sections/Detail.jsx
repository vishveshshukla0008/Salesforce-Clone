import React from "react";

const Detail = () => {
  return (
    <div className="details-wrapper-bottom">
      <h1>
        Our technology helps people create better jobs, lives, companies, and
        communities.
      </h1>

      <div className="details-parent">
        <div className="cards-parent">
          <div className="card">
            <img
              src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/03/group-201168.png?resize=1024,683"
              alt=""
            />
            <span>Technology given for free or discounted</span>
          </div>
          <div className="card">
            <img
              src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/03/group-201169.png?resize=1024,683"
              alt=""
            />
            <span>
              Fortune 100 Best Companies to Work For 2024 (16 years in a row)
            </span>
          </div>
          <div className="card">
            <img
              src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/03/group-201170.png?resize=1024,683"
              alt=""
            />
            <p>Fortune World’s Most Admired Companies 2024</p>
          </div>
        </div>
        <div className="background">
          <div className="img-with-svg-wrapper">
            <img
              src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/03/pb-hp-products-bg-2.png?resize=2048,410"
              alt=""
            />
            <svg
              class="background__contour background__contour--overlap"
              viewBox="0 0 1440 98"
              fill="none">
              <path
                d="M0 0.000976562C229.219 63.3102 470.662 98.001 720 98.001C969.338 98.001 1210.78 63.31 1440 0.000976562V99.001H0V0.000976562Z"
                fill="white"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
