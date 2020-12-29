import React from "react";
import "./SimpleDesign.css";

function Simpledesign() {
  return (
    <div>
      <div
        style={{
          height: 100,
          background: "linear-gradient(rgb(255, 253, 252), rgb(247, 247, 247))",
          textAlign: "center",
        }}
      ></div>

      <div className="simpleDesignPage">
        <div className="title">Simple Design Process</div>
        <div className="simpleDesign">
          <div className="project_speed">
            <div className="imgFrame">
              <img className="img1" src="../img/icon-for-discover-24.png" />
            </div>

            <h1 className="project_speed_contain">Discovery</h1>
            <p className="dis_text">
              Our team will find exactly what you need in the budget you have.
              We will look into other alternatives to give you the best results
              for the best price straight and simple.
            </p>
          </div>
          <div className="project_speed">
            <div className="imgFrame">
              <img className="img2" src="../img/hands.PNG" />
            </div>

            <h1 className="project_speed_contain">Agreement</h1>
            <p className="dis_text">
              Upon presenting our findings to you, and giving you the best deal
              available, we will come to an agreement and we will begin our
              work.
            </p>
          </div>
          <div className="project_speed">
            <div className="imgFrame">
              <img className="img3" src="../img/completed.png" />
            </div>
            <h1 className="project_speed_contain">Completion</h1>
            <p className="dis_text">
              Your project will be complete with you fully understanding how to
              use your website or any other application you had built leaving
              you satisfied.
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          height: 100,
          background: "linear-gradient(rgb(247, 247, 247),rgb(255, 253, 252))",
          textAlign: "center",
        }}
      ></div>
    </div>
  );
}

export default Simpledesign;
