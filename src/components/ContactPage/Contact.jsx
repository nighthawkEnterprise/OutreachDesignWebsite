import React from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import Swal from "sweetalert2";

function contactPage() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_233gru9",
        "template_7w1gf9s",
        e.target,
        "user_E2UQdwhXw6MQZE5rgrgDS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    Swal.fire(
      "Thank you!",
      "Your Messages was  submitted <br /> Successfully :)",
      "Success"
    );
    e.target.reset();
  }

  return (
    <div className="contactPage">
      <div className="contactUs">
        <h1>Contact Us</h1>
      </div>
      <div className="contactPageChild">
        <div className="contactInfo">
          <i class="fa fa-paper-plane"></i>
          <h4>
            outreachdesign@outreach.com <span>|</span>{" "}
          </h4>
          <i class="fa fa-phone-square"></i>
          <h4>000-000-0000</h4>
        </div>
        <div className="contactPageFormParent">
          <form className="contactPageForm " onSubmit={sendEmail}>
            <div className="contactPageName">
              <input
                type="text"
                placeholder="Your Name"
                name="fullName"
                required
              />
            </div>
            <div className="contactPageEmail ">
              <input type="text" placeholder="Email" name="email" required />
            </div>
            <div className="contactPageName">
              <input
                type="text"
                placeholder="Phone Number"
                name="PhoneNumber"
                required
              />
            </div>
            <div className="contactPageMessage">
              <textarea placeholder="Enter text here" name="message" required />
            </div>
            <input
              className="contactPageButton"
              Value="Send Message"
              type="submit"
            />
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
      </div>
    </div>
  );
}

export default contactPage;
