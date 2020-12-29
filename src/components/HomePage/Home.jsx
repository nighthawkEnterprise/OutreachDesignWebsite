import React, { Component, Fragment } from "react";
import "./Home.css";
class Home extends Component {
  render() {
    return (
      <Fragment>
        {" "}
        <div className="frontPage">
          <div className="frontPageTitle">
            <h1>Where Work Happens</h1>
            <p>
              Any successful company big or small has to have a way their
              customers can reach them easily from around the world. One of the
              best ways is through a website. Outreach Design is here to help
              you fill that gap in your company by creating a solid dynamic or
              static website that is responsive on all platform and help your
              customer reach you easily. Outreach Design has 5 years of
              experience building applications and solving web problems, in turn
              leaving many businesses happy. Let chat about your website ideas
              and work together to achieve your goals. Get 30% whooper discount!
            </p>
            <a href="#" className="getStarted">
              Get started
            </a>
          </div>
          <div className="logoColors">
            <div className="topColors">
              <div className="color1"></div>
              <div className="color2"></div>
            </div>
            <div className="bottomColors">
              <div className="color3"></div>
              <div className="color4"></div>
            </div>
            <br />
          </div>
        </div>
      
      </Fragment>
    );
  }
}

export default Home;
