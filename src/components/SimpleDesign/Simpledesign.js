import React from "react";
import "./simpledesign.css";

function Simpledesign() {
  return (
    <>
      <div className="grid_contain">
        <div className="project_speed">
          <p>Simple Design Process</p>
          <div className="project_speed_contain">
            <div className="discovery">
              <p>Discovery</p>
            </div>
            <div className="agreement">
              <p>Agreement</p>
            </div>
            <div className="completion">
              <p>Completion</p>
            </div>
          </div>
          <div className="speed_text">
            <div>
              <p className="dis_text">
                Our team will find exactly what you need in the budget you have.
                We will look into other alternatives to give you the best
                results for the best price straight and simple.
              </p>
            </div>
            <div className="agre_text">
              <p>
                Upon presenting our findings to you, and giving you the best
                deal available, we will come to an agreement and we will begin
                our work.
              </p>
            </div>
            <div className="comp_text">
              <p>
                Your project will be complete with you fully understanding how
                to use your website or any other application you had built
                leaving you satisfied.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Simpledesign;
