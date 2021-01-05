import React from "react";
import "./Portfolio.css";
import Footer from "../Footer/Footer";
import Carousel from "react-elastic-carousel";

const breakPoints = [{ width: 400, itemsToShow: 1 }];

function Portfolio() {
  return (
    <>
      <div className="container_port">
        <div className="main_port">
          <div className="main_header">
            <h2>Our Portfolio ~</h2>
            <h3>Explore few of our many intergrated applications</h3>
          </div>
          <div className="caro_holder">
            <div className="caro_contain">
              <Carousel breakPoints={breakPoints}>
                <div className="caro_card">
                  <img
                    src="/img/web1.jpg"
                    alt="webpage"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className="caro_card">
                  <img
                    src="/img/web2.jpg"
                    alt="webpage"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className="caro_card">
                  <img
                    src="/img/web3.png"
                    alt="webpage"
                    width="100%"
                    height="100%"
                  />
                </div>
              </Carousel>
            </div>
            <div className="caro_contain">
              <Carousel breakPoints={breakPoints}>
                <div className="caro_card">
                  <img
                    src="/img/webb1.jpg"
                    alt="webpage"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className="caro_card">
                  <img
                    src="/img/webb2.png"
                    alt="webpage"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className="caro_card">
                  <img
                    src="/img/webb3.png"
                    alt="webpage"
                    width="100%"
                    height="100%"
                  />
                </div>
              </Carousel>
            </div>
          </div>
          <div className="dis_contain">
            <div className="side_1">
              <a className="portfo_link" href="">
                <p className="side_1_title">9jaDiaspora</p>
              </a>{" "}
              <br />
              <p className="side_1_subtitle">
                This is a news site coupled with sales and promotion. 9ja
                diaspora is one of our many project. It was completed just in
                time for our client and we still handle the optimization and
                updates.
              </p>
              <span className="app_used">
                <p>React</p>
                <p>Express</p>
                <p>Mongoose</p>
                <p>Sass</p>
              </span>
            </div>
            <div className="side_1">
              <a className="portfo_link" href="">
                <p className="side_1_title">CodeSpire</p>
              </a>{" "}
              <br />
              <p className="side_1_subtitle">
                This is a news site coupled with sales and promotion. 9ja
                diaspora is one of our many project. It was completed just in
                time for our client and we still handle the optimization and
                updates.
              </p>
              <span className="app_used">
                <p>React</p>
                <p>Atlas</p>
                <p>Express</p>
                <p>Sass</p>
              </span>
            </div>
          </div>
        </div>
        {/* <--------  Second Section --------------------> */}
        <div className="caro_holder">
          <div className="caro_contain">
            <Carousel breakPoints={breakPoints}>
              <div className="caro_card">
                <img src="A" alt="webpage" width="100%" height="100%" />
              </div>
              <div className="caro_card">
                <img src="B" alt="webpage" width="100%" height="100%" />
              </div>
              <div className="caro_card">
                <img src="C" alt="webpage" width="100%" height="100%" />
              </div>
            </Carousel>
          </div>
          <div className="caro_contain">
            <Carousel breakPoints={breakPoints}>
              <div className="caro_card">
                <img src="1" alt="webpage" width="100%" height="100%" />
              </div>
              <div className="caro_card">
                <img src="2" alt="webpage" width="100%" height="100%" />
              </div>
              <div className="caro_card">
                <img src="3" alt="webpage" width="100%" height="100%" />
              </div>
            </Carousel>
          </div>
        </div>
        <div className="dis_contain">
          <div className="side_1">
            <a className="portfo_link" href="">
              <p className="side_1_title">LOREM</p>
            </a>{" "}
            <br />
            <p className="side_1_subtitle">
              loremAute anim cupidatat duis enim aliqua exercitation sint.
              loremAute anim cupidatat duis enim aliqua exercitation sint.
              loremAute anim cupidatat duis enim aliqua exercitation sint.
            </p>
            <span className="app_used">
              <p>React</p>
              <p>Express</p>
              <p>Mongoose</p>
              <p>Sass</p>
            </span>
          </div>
          <div className="side_1">
            <a className="portfo_link" href="">
              <p className="side_1_title">LOREM</p>
            </a>{" "}
            <br />
            <p className="side_1_subtitle">
              loremAute anim cupidatat duis enim aliqua exercitation sint.
              loremAute anim cupidatat duis enim aliqua exercitation sint.
              loremAute anim cupidatat duis enim aliqua exercitation sint.
            </p>
            <span className="app_used">
              <p>React</p>
              <p>Atlas</p>
              <p>Express</p>
              <p>Sass</p>
            </span>
          </div>
        </div>

        <div className="foot">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Portfolio;
