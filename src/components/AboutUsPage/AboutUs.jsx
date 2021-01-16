import React, { Component } from "react";
import "./AboutUs.css";

export class AboutUsPage extends Component {
  render() {
    return (
      <div>
        <div className="AboutUs">
          <h1>What We're About</h1>
        </div>
        <div className="cardsPageParent ">
          <div className="cardsPage">
            <a href="" className="card">
              <p>
                {/* <i className="fa fa-usrs"></i> */}
                <h2>Lead Generation</h2>
                Lead generation is the process of attracting and converting
                strangers and prospects into someone who has indicated interest
                in your company's product or service. Outreach Design's
                expertise on this field assures you of bringing your product to
                the awareness of your customers. We will make sure to turn that
                client into a customer.
              </p>
            </a>

            <a href="" className="card">
              <p>
                {/* <i className="fab fa-satellite-dh"></i> */}
                <h2> Mobile App Development</h2>
                Increase customer loyalty, build a stronger brand,
                and increase customer retention by having a mobile app for your business.
                In today's day and age, relying on only web presence is not enough, and increasigly
                trends are shifting towards mobile everything. Work with us to find out how we can create
                your customized mobile application today.
              </p>
            </a>

            <a href="" className="card">
              <p>
                {/* <i className="fas fa-satellite-dis"></i> */}
                <h2>App Development</h2>
                We offer after product services, we continue to work with you
                even after your website is completed to make sure you have an up
                and running website the whole time. Our development does not
                stop there when it comes to Outreach Design we always find ways
                to make your website even better and more modern.
              </p>
            </a>

            <a href="" className="card">
              <p>
                {/* <i className="fa fa-musc"></i> */}
                <h2>Responsive Web Design</h2>
                Responsiveness is very important in website designs. Your
                website need to have the capability to show on all platforms,
                for users on phones or iPads or laptops. Responsiveness is part
                of Outreach Design accolade, we make sure all websites we
                produce shows on all platforms, be it large or small.
              </p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUsPage;
