import React, { Component, Fragment } from "react";
import "./Home.css";
import SimpleDesign from "../SimpleDesign/SimpleDesign";
import Footer from "..//Footer/Footer";
import AboutUs from "../AboutUsPage/AboutUs";
import { Link } from "react-scroll";
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
        <div class="container">
          <a href="" className="btn btn-1">
            <h2>icon</h2>
          </a>
          <a>
            <Link
              activeClass="active"
              to="AboutUs"
              spy={true}
              smooth={true}
              duration={200}
              className="btn btn-2"
            >
              <h2>abt</h2>
            </Link>
          </a>
          <a href="" className="btn btn-3">
            {/* <i className="fa fa-music"></i> */}
            <h2>blg</h2>
          </a>
          <a href="" className="btn btn-4">
            {/* <i className="fa fa-globe"></i> */}
            <h2>cnt</h2>
          </a>
          <a href="" className="btn btn-5">
            {/* <i className="fa fa-leaf"></i> */}
            <h2>info</h2>
          </a>
        </div>
        <SimpleDesign />
        <AboutUs />
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
        <br />
        <br />
        <Footer />
      </Fragment>
    );
  }
}

export default Home;
