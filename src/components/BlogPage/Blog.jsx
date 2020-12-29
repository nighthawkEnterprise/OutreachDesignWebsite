import React, { Component } from "react";
import "./Blog.css";

export class Blog extends Component {
  render() {
    return (
      <div className="blogPage">
        <div className="blogPageTitle">
          <h1>Blog</h1>
        </div>
        <div id="bblogPage">
          <div className="blogPageChildren">
            <div className="blogCards">
              <div className="eachTwoCards">
                <div className="blogCard">
                  <img src="./img/roma.PNG" height="250" width="400" />
                  {/* <div className="blogCardPic1"></div> */}
                  <div className="blogCardInfo">
                    <div className="littleTitle">
                      <a href="">DESIGN</a>
                    </div>
                    <h3>Design Tips For Extra Website Footers</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Corporis, ab voluptatum. Maiores rerum eligendi quasi
                      officiis dolor officia consequatur dolores!
                    </p>
                  </div>
                </div>
                <div className="blogCard">
                  <img src="./img/africa.PNG" height="250" width="400" />
                  {/* <div className="blogCardPic2"></div> */}
                  <div className="blogCardInfo">
                    <div className="littleTitle">
                      <a href="">INSPIRATION</a>
                    </div>
                    <h3>
                      20 Messages Hidden in 20 of the Most Recognizable Logos
                    </h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Corporis, ab voluptatum. Maiores
                    </p>
                  </div>
                </div>
              </div>
              <div className="eachTwoCards">
                <div className="blogCard">
                  <img src="./img/Aflag.PNG" height="250" width="400" />
                  {/* <div className="blogCardPic3"></div> */}
                  <div className="blogCardInfo">
                    <div className="littleTitle">
                      <a href="">DESIGN</a>
                    </div>
                    <h3>Design Tips For Extra Website Footers</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Corporis, ab voluptatum. Maiores rerum eligendi quasi
                      officiis
                    </p>
                  </div>
                </div>
                <div className="blogCard">
                  <img src="./img/car.PNG" height="250" width="400" />
                  {/* <div className="blogCardPic4"></div> */}
                  <div className="blogCardInfo">
                    <div className="littleTitle">
                      <a href="">DESIGN</a>
                    </div>
                    <h3>Design Tips For Extra Website Footers</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Corporis, ab voluptatum. Maiores rerum eligendi quasi
                      officiis
                    </p>
                  </div>
                </div>
              </div>
              <div className="eachTwoCards">
                <div className="blogCard">
                  <img src="./img/cat.PNG" height="250" width="400" />
                  {/* <div className="blogCardPic5"></div> */}
                  <div className="blogCardInfo">
                    <div className="littleTitle">
                      <a href="">DESIGN</a>
                    </div>
                    <h3>Design Tips For Extra Website Footers</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Corporis, ab voluptatum. Maiores rerum eligendi quasi
                      officiis dolor officia consequatur dolores!
                    </p>
                  </div>
                </div>
                <div className="blogCard">
                  {/* <div className="blogCardPic6"></div> */}
                  <img src="./img/masks.PNG" height="250" width="400" />
                  <div className="blogCardInfo">
                    <div className="littleTitle">
                      <a href="">DESIGN</a>
                    </div>
                    <h3>Design Tips For Extra Website Footers</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Corporis, ab voluptatum. Maiores rerum eligendi quasi
                      officiis dolor officia consequatur dolores!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ----------------------------------------- */}
            <div className="iconsSection">
              <div className="blogPageIcons">
                <a href="#">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>

                <a href="#">
                  <i className="fa fa-youtube-play" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </div>
              <div className="iconsSectionInfo">
                <div className="iconsSectionInfoChild">
                  <h1>title</h1>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Veritatis quam accusantium sequi, exercitationem atque
                  voluptates totam ullam, enim culpa delectus! Placeat tempora
                  mollitia aut nesciunt dolores alias qui enim animi. id officia
                  necessitatibus, vero voluptates totam ullam, enim culpa
                  delectus! Placeat tempora mollitia aut nesciunt dolores alias
                  qui enim animi. Doloribus, numquam?
                </div>
              </div>
              <div className="iconsSectionInfo">
                <div className="iconsSectionInfoChild">
                  <h1>title</h1>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Veritatis quam accusantium sequi, exercitationem atque
                  voluptates totam ullam, enim culpa delectus! Placeat tempora
                  mollitia aut nesciunt dolores alias qui enim animi. id officia
                  necessitatibus, vero voluptates totam ullam, enim culpa
                  delectus! Placeat tempora mollitia aut nesciunt dolores alias
                  qui enim animi. Doloribus, numquam?
                </div>
              </div>
              <div className="blogPageButtons">
                <div className="buttonBox">
                  <i className="fa fa-github"></i>
                  <p>
                    {" "}
                    Lorem ipsum dolor, asdg gasg amet consectetur adipisicing
                  </p>
                  <a href="">click</a>
                </div>

                <div className="buttonBox">
                  <i className="fa fa-github"></i>
                  <p>
                    {" "}
                    Lorem ipsum dolor, asdg gasg amet consectetur adipisicing
                  </p>
                  <a href="">click</a>
                </div>

                <div className="buttonBox">
                  <i className="fa fa-github"></i>

                  <p>
                    Lorem ipsum dolor, asdg gasg amet consectetur adipisicing
                  </p>
                  <a href="">click</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
