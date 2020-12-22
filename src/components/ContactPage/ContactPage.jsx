import React, { Component } from "react";

class ContactPage extends Component {
  render() {
    return (
      <div className="contactPage" id="contactPage">
        <div className="contactUs">
          <h1>Contact Us</h1>
        </div>
        <div className="contactPageChild">
          <div id="contactPageChild">
            <div className="contactInfo">
              <h4>phone</h4>
              <h4>email</h4>
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
                  width="240"
                  height="240"
                  frameborder="0"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;
