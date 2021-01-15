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
            <h1>High Quality Work </h1>
            <p>
              Powered by recent graduates of coding bootcamps, Outreach Design empowers both businesses
              and graduates the opportunity to work together in a mutually beneficial way. High quality work
              for the business without the high quality price while the graduates are guided to real world experience
              by industry professionals. 
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
