import React, { Component, Fragment } from "react";
import "./Home.css";
import SimpleDesign from "../SimpleDesign/SimpleDesign";
import Footer from "../Footer/Footer";
import Contact from "../ContactPage/Contact";
import AboutUs from "../AboutUsPage/AboutUs";
import { Link } from "react-scroll";
class Home extends Component {
  render() {
    return (
      <Fragment>
        {" "}
        <div className="frontPage">
          <div className="frontPageTitle">
            <h1>One Stop Shop</h1>
            <p>
              Any successful company big or small has to have a way their
              customers can reach them easily from around the world. One of the
              best ways is through a website. Outreach Design is here to help
              you fill that gap in your company by creating a solid dynamic or
              static website that is responsive on all platform and help your
            </p>
            <a href="#" className="getStarted">
              Get started
            </a>
          </div>
          <div className="logoColors">
            <img
              height="600px"
              alt="Technical Animations to help showcase your products"
              data-src="https://www.animatedtechnologies.co.uk/wp-content/uploads/2019/02/technical-animations.png"
              class="x-img x-img-none lazyloaded"
              src="https://www.animatedtechnologies.co.uk/wp-content/uploads/2019/02/technical-animations.png"
              loading="lazy"
            ></img>
          </div>
        </div>
        {/* -------------------------------------- */}
        <div class="container">
          <a href="" className="btn btn-1">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            {/* <h2>icon</h2> */}
          </a>

          <a href="" className="btn btn-3">
            <i className="fa fa-twitter" aria-hidden="true"></i>
            {/* <h2>blg</h2> */}
          </a>
          <a href="" className="btn btn-4">
            <i className="fa fa-github" aria-hidden="true"></i>
            {/* <h2>cnt</h2> */}
          </a>
          <a href="" className="btn btn-5">
            <i className="fa fa-facebook" aria-hidden="true"></i>
            {/* <h2>info</h2> */}
          </a>
        </div>
        {/* -------------------------------------------- */}
        <div className="picsLine">
          <div className="picsLineChild">
            <img
              src="https://coconutcreatives.co.uk/wp-content/uploads/2018/04/web-design-icon.png"
              alt=""
              title=""
              srcset="https://coconutcreatives.co.uk/wp-content/uploads/2018/04/web-design-icon.png 200w, https://coconutcreatives.co.uk/wp-content/uploads/2018/04/web-design-icon-150x150.png 150w"
              sizes="(max-width: 200px) 100vw, 200px"
            ></img>
            <h1>Web Development</h1>
          </div>
          <div className="picsLineChild">
            <img
              src="https://coconutcreatives.co.uk/wp-content/uploads/2018/04/email-marketing-icon.png"
              alt=""
              title=""
              srcset="https://coconutcreatives.co.uk/wp-content/uploads/2018/04/email-marketing-icon.png 200w, https://coconutcreatives.co.uk/wp-content/uploads/2018/04/email-marketing-icon-150x150.png 150w"
              sizes="(max-width: 200px) 100vw, 200px"
            ></img>
            <h1>Direct Messaging</h1>
          </div>
          <div className="picsLineChild">
            <img
              src="https://coconutcreatives.co.uk/wp-content/uploads/2018/04/copywriting-icon.png"
              alt=""
              title=""
              srcset="https://coconutcreatives.co.uk/wp-content/uploads/2018/04/copywriting-icon.png 200w, https://coconutcreatives.co.uk/wp-content/uploads/2018/04/copywriting-icon-150x150.png 150w"
              sizes="(max-width: 200px) 100vw, 200px"
            ></img>
            <h1>Copywriting and PR</h1>
          </div>
          <div className="picsLineChild">
            <img
              src="https://coconutcreatives.co.uk/wp-content/uploads/2018/04/pay-per-click-icon.png"
              alt=""
              title=""
              srcset="https://coconutcreatives.co.uk/wp-content/uploads/2018/04/pay-per-click-icon.png 200w, https://coconutcreatives.co.uk/wp-content/uploads/2018/04/pay-per-click-icon-150x150.png 150w"
              sizes="(max-width: 200px) 100vw, 200px"
            ></img>
            <h1>Pay Per Click</h1>
          </div>
          <div className="picsLineChild">
            <img
              src="https://coconutcreatives.co.uk/wp-content/uploads/2018/04/viedo-icon.png"
              alt=""
              title=""
              srcset="https://coconutcreatives.co.uk/wp-content/uploads/2018/04/viedo-icon.png 200w, https://coconutcreatives.co.uk/wp-content/uploads/2018/04/viedo-icon-150x150.png 150w"
              sizes="(max-width: 200px) 100vw, 200px"
            ></img>
            <h1>Video Production</h1>
          </div>
        </div>
        {/* ------------------------- */}
        <SimpleDesign />
        <div className="lastSection">
          <img
            height="600px"
            src="https://coconutcreatives.co.uk/wp-content/uploads/2018/05/Strategy.png"
            alt=""
            title=""
            srcset="https://coconutcreatives.co.uk/wp-content/uploads/2018/05/Strategy.png 842w, https://coconutcreatives.co.uk/wp-content/uploads/2018/05/Strategy-300x212.png 300w, https://coconutcreatives.co.uk/wp-content/uploads/2018/05/Strategy-768x543.png 768w, https://coconutcreatives.co.uk/wp-content/uploads/2018/05/Strategy-610x431.png 610w, https://coconutcreatives.co.uk/wp-content/uploads/2018/05/Strategy-400x284.png 400w"
            sizes="(max-width: 842px) 100vw, 842px"
          ></img>
          <div className="lastSectionText">
          <h1>HOW WE WORK</h1>
            <p>
            Outreach Design looks at your business from a consulting perspective. 
            We start by learning more about you, your business, and the goals you have for your website.
             From there, our team provides advice, feedback, logical concepts, 
            and creative ideas to ensure your company is a great solution to achieving business goals.
            </p>

          </div>
        </div>
        {/* --------------------- */}
        <div className="homePercentages">
          <div className="intro">
            <div className="statistics">
              <div className="homePercentage">38%</div>
              <h2>title</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                beatae eos laborum et distinctio perspiciatis nihil quibusdam
                illum optio voluptatum?
              </p>
            </div>
            <div className="statistics">
              <div className="homePercentage">47%</div>
              <h2>title</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                beatae eos laborum et distinctio perspiciatis nihil quibusdam
                illum optio voluptatum?
              </p>
            </div>
            <div className="statistics">
              <div className="homePercentage">13%</div>
              <h2>title</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                beatae eos laborum et distinctio perspiciatis nihil quibusdam
                illum optio voluptatum?
              </p>
            </div>
          </div>
        </div>
        {/* ------------------------------ */}
        <br />
        <br />
        <br />
        <br />
        <AboutUs />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* ------------------------------- */}
        <div
          style={{
            height: 200,
            background:
              "linear-gradient(rgb(255, 253, 252),rgb(255, 226, 213))",
            textAlign: "center",
          }}
        ></div>
        <div className="homeIntro">
          <div className="intro">
            <div className="introImg">
              <img
                height="346"
                src="https://shareplm.com/wp-content/uploads/2020/02/Strategy-Session-1024x586.png"
                data-lazy-type="image"
                data-src="https://shareplm.com/wp-content/uploads/2020/02/Strategy-Session-1024x586.png"
                class="attachment-large size-large lazy-loaded"
                alt=""
                loading="lazy"
                srcset="https://shareplm.com/wp-content/uploads/2020/02/Strategy-Session-1024x586.png 1024w, https://shareplm.com/wp-content/uploads/2020/02/Strategy-Session-300x172.png 300w, https://shareplm.com/wp-content/uploads/2020/02/Strategy-Session-768x439.png 768w, https://shareplm.com/wp-content/uploads/2020/02/Strategy-Session.png 1290w"
                data-srcset=""
                sizes="(max-width: 1024px) 100vw, 1024px"
              ></img>
            </div>
            <div className="introText">
              <h1>Web Application Consulting</h1>
              <p>
              Outreach Design offers a comprehensive range of web application 
              consulting services. Сreating and delivering custom web 
              applications, we assist businesses in different domains to 
              keep up with the times and effectively reach their target 
              audience. We don’t just stick to the beaten track in the 
              software development process. For each project, our 
              consultants gain deeper insight into the client’s business 
              needs to ensure mutually beneficial cooperation and deliver 
              an individual web solution in the end.
              </p>
            </div>
          </div>

          <div className="intro">
            <div className="introText">
              <h1>Web and Mobile App Development Services</h1>
              <p>
              Whether you are a small-scale business, a startup, or an 
              enterprise looking to build a mobile app, our development 
              process remains the same. We transform your ideas into 
              successful mobile apps that become an integral part of 
              everyone’s lives. With our smooth app development process, 
              the apps we build are engaging, robust, user-friendly, and 
              well-crafted.
              </p>
            </div>

            <div className="introImg">
              <img
                height="440px"
                src="https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://pixeltechnologies.in/wp-content/uploads/2020/04/Animated-Video-Production-Service.png"
                class="aligncenter"
                alt=""
              ></img>
            </div>
          </div>
        </div>
        <div
          style={{
            height: 200,
            background:
              "linear-gradient(rgb(255, 226, 213),rgb(255, 253, 252))",
            textAlign: "center",
          }}
        ></div>
        <Contact />
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
