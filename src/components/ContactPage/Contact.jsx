import React, { Component } from "react";
import "./Contact.css";

class contactPage extends Component {
  render() {
    return (
      <div className="contactPage">
        <div className="contactUs">
          <h1>Contact Us</h1>
        </div>
        <div className="contactPageChild">
          <div className="contactInfo">
            <h4>email: hello-world@gmail.com</h4>
            <h4>phone: 000-000-0000</h4>
          </div>
          <div className="contactPageFormParent">
            <form className="contactPageForm " action="">
              <div className="contactPageName">
                <input type="text" placeholder="Full Name" name="fullName" />
              </div>
              <div className="contactPageEmail ">
                <input type="text" placeholder="Email" name="email" />
              </div>
              <div className="contactPageMessage">
                <input placeholder="Message" type="text" name="message" />
              </div>
              <a href="" className="contactPageButton">
                Submit
              </a>
            </form>

            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2688.806799517543!2d-122.1895200855577!3d47.62988669436422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906ceef0ff451f%3A0x30046af1177e6ec2!2s2265%20116th%20Ave%20NE%2C%20Bellevue%2C%20WA%2098004!5e0!3m2!1sen!2sus!4v1607839833310!5m2!1sen!2sus"
                width="400"
                height="400"
                frameborder="0"
                style={{ border: 0 }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </div>
          <div className="contactPageFooter">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              voluptatem ipsam, distinctio maiores saepe vitae corporis
              aspernatur enim quia voluptatum!
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* ------------------------------------------------------------------ */}
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
      </div>
    );
  }
}

export default contactPage;
