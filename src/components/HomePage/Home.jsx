import React, { Component, Fragment } from "react";
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
            </p>{" "}
            <br />
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
          <a href="" className="btn btn-2">
            <i className="fa fa-chevron-up"></i>
          </a>
          <a href="" className="btn btn-3">
            <i className="fa fa-music"></i>
          </a>
          <a href="" className="btn btn-4">
            <i className="fa fa-globe"></i>
          </a>
          <a href="" className="btn btn-5">
            {/* <i className="fa fa-leaf"></i> */}
            <h2>info</h2>
          </a>
        </div>
        <div className="whatWeDo">
          <h1>What We're About</h1>
        </div>
        <div className="cardsPageParent ">
          <div className="cardsPage">
            <div className="cardParent">
              <a href="" className="card">
                <p>
                  <i className="fa fa-usrs"></i>
                  <span>Lead Generation</span>
                  Lead generation is the process of attracting and converting
                  strangers and prospects into someone who has indicated
                  interest in your company's product or service. Outreach
                  Design's expertise on this field assures you of bringing your
                  product to the awareness of your customers. We will make sure
                  to turn that client into a customer.
                </p>
              </a>
            </div>
            <div className="cardParent">
              <a href="" className="card">
                <p>
                  <i className="fab fa-satellite-dh"></i>
                  <span> Search Engine Optimization</span>
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
            </div>
            <div className="cardParent">
              <a href="" className="card">
                <p>
                  <i className="fas fa-satellite-dis"></i>
                  <span>Web Development</span>
                  We offer after product services, we continue to work with you
                  even after your website is completed to make sure you have an
                  up and running website the whole time. Our development does
                  not stop there when it comes to Outreach Design we always find
                  ways to make your website even better and more modern.
                </p>
              </a>
            </div>
            <div className="cardParent">
              <a href="" className="card">
                <p>
                  <i className="fa fa-musc"></i>
                  <span>Responsive Web Design</span>
                  Responsiveness is very important in website designs. Your
                  website need to have the capability to show on all platforms,
                  for users on phones or iPads or laptops. Responsiveness is
                  part of Outreach Design accolade, we make sure all websites we
                  produce shows on all platforms, be it large or small.
                </p>
              </a>
            </div>
            <div className="cardParent">
              <a href="" className="card">
                <p>
                  <i className="fa fa-hert"></i>
                  <span>Site Speed Optimization</span>
                  Speed is all you need to keep a user on your page, you want
                  your information to open when they are clicked. We work on
                  speed optimization to make sure we don’t have a slow website.
                  We use React to maximize your website into smaller components
                  to form one large result in turn optimizing the speed
                  capacity.
                </p>
              </a>
            </div>
            <d className="cardParent">
              <a href="" className="card">
                <p>
                  <i className="fa fa-uer"></i>
                  <span>Web Development</span>
                  We offer after product services, we continue to work with you
                  even after your website is completed, to make sure you have an
                  up and running website at all times. Our development does not
                  stop there. When it comes to Outreach Design we always find
                  ways to make your website even better and more modern.
                </p>
              </a>
            </d>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
