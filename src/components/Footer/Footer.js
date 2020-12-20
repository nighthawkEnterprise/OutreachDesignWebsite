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
                Lead Generation, <br /> Search Engine Optimization, <br />{" "}
                Responsive Web Design, <br />
                Site Speed Optimization, <br /> Web Development
              </p>
            </div>
            <div className="foot_res">
              Resources
              <p>
                React, <br /> Sass Project, <br />
                React-Native Project, <br />
                JavaScript, <br /> Wordpress Project
              </p>
            </div>
            <div className="foot_con">
              Contact
              <p>
                2265 116th Ave NE Ste 210-7, <br />
                Bellevue, WA 98004 <br />
                Tel 000-000-0000
              </p>
            </div>
            <div className="foot_sup">
              Support
              <p>help@outreachdesign.com</p>
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
