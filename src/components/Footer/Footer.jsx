import React, { Component } from "react";
import "./footer.css";

class footer extends Component {
  render() {
    return (
      <div>
        <div className="footer">
          <div className="footerContants">
            <div className="footerLogo">
              <div className="outreachLogo">
                <div className="logoColors">
                  <div className="topColors">
                    <div className="footerColor1"></div>
                    <div className="footerColor1"></div>
                  </div>
                  <div className="bottomColors">
                    <div className="footerColor1"></div>
                    <div className="footerColor1"></div>
                  </div>
                  <br />
                </div>
                <div className="footerLogoText">Outreach Design</div>
              </div>
            </div>

            <div className="footerContantsChild">
              <div className="contactsParent">
                <div className="contacts">
                  <div className="contactsText">
                    <a href="">Career</a>
                  </div>
                </div>
                <div className="contacts">
                  <a href="">Contact Us</a>{" "}
                </div>
                <div className="contacts">
                  <a href="">Media Center</a>{" "}
                </div>
              </div>
            </div>
            <div className="footerContantsChild">
              <div className="contactsParent">
                <div className="contacts">
                  <a href="">About Us</a>{" "}
                </div>
                <div className="contacts">
                  <a href="">Site Map</a>{" "}
                </div>
                <div className="contacts">
                  <a href="">FAQ</a>{" "}
                </div>
              </div>
            </div>
            <div className="footerContantsChild">
              <div>
                <div className="contactsParent">
                  <div className="contacts">Follow Us</div>

                  <div className="contacts">
                    {" "}
                    <div className="footerIcons">
                      <a href="#">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-github" aria-hidden="true"></i>
                      </a>

                      <a href="#">
                        <i
                          className="fa fa-youtube-play"
                          aria-hidden="true"
                        ></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="llc">
          Copyright © 2020-2021 Outreach Design, LLC. All rights reserved.
        </div>
      </div>
    );
  }
}

export default footer;
