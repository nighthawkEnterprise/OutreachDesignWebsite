import React from "react";
import Carousel from "react-elastic-carousel";
import "./Portfolio.css";

const breakPoints = [{ width: 400, itemsToShow: 1 }];

function PortfolioPage() {
  return (
    <>
      <div>
        <p> Our Portfolio</p>
      </div>
      <div className="caro_contain">
        <Carousel breakPoints={breakPoints}>
          <div className="caro_card">ONE</div>
          <div className="caro_card">TWO</div>
        </Carousel>
      </div>
    </>
  );
}

export default PortfolioPage;
