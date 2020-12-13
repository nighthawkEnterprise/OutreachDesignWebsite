import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="grid_contain">
        <div className="footer">
          <div className="foottop">
            <div className="foot_ready">
              <p className="foot_ready_to">Ready to</p>
              <p className="foot_started">Get Started?</p>
              <div className="request">REQUEST A FREE QUOTE</div>
            </div>
            <div className="foot_pro">
              Product
              <p>
                lorem lorem lorem loremlorem loremlorem loremlorem lorem lorem
                lorem lorem loremlorem loremlorem loremlorem loremlorem lorem
                lorem loremlorem loremlorem loremlorem lorem
              </p>
            </div>
            <div className="foot_res">
              Resources
              <p>
                lorem lorem lorem loremlorem loremlorem loremlorem lorem lorem
                lorem lorem loremlorem loremlorem loremlorem lorem lorem lorem
                lorem
              </p>
            </div>
            <div className="foot_con">
              Contact
              <p>
                orem lorem lorem loremlorem loremlorem loremlorem lorem lorem
                lorem lorem loremlorem loremlorem loremlorem lorem lorem lorem
                lorem
              </p>
            </div>
            <div className="foot_sup">
              Support
              <p>
                orem lorem lorem loremlorem loremlorem loremlorem lorem lorem
                lorem lorem loremlorem loremlorem loremlorem lorem lorem lorem
                lorem
              </p>
            </div>
          </div>
          <div className="foot_bottom">
            <div className="foot_icon"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
