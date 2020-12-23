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
                <h2> Search Engine Optimization</h2>
                Apart from owning a website that is super cute, it’s very
                important for your website to be able to pop out across all
                major search engines. This will make your clientele have easy
                access to the information they need through your website.
                Outreach Design team specializes on this field of work. We
                optimize your website to make sure it not only shows up on
                results but it also shows as the top 5 results found when
                searched.
              </p>
            </a>

            <a href="" className="card">
              <p>
                {/* <i className="fas fa-satellite-dis"></i> */}
                <h2>Web Development</h2>
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

            <a href="" className="card">
              <p>
                {/* <i className="fa fa-hert"></i> */}
                <h2>Site Speed Optimization</h2>
                Speed is all you need to keep a user on your page, you want your
                information to open when they are clicked. We work on speed
                optimization to make sure we don’t have a slow website. We use
                React to maximize your website into smaller components to form
                one large result in turn optimizing the speed capacity.
              </p>
            </a>
            <a href="" className="card">
              <p>
                {/* <i className="fa fa-uer"></i> */}
                <h2>Web Development</h2>
                We offer after product services, we continue to work with you
                even after your website is completed, to make sure you have an
                up and running website at all times. Our development does not
                stop there. When it comes to Outreach Design we always find ways
                to make your website even better and more modern.
              </p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUsPage;
