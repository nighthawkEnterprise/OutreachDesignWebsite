import React, { Component } from "react";
import { Link } from "react-scroll";
import "./NavBar.css";

import MeetUs from "../MeetUs/MeetUs";
import Blog from "../BlogPage/Blog";
import Contact from "../ContactPage/Contact";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="outreachLogo">
            <img src="/img/outreachDesignLogo.PNG" height="45px" />
            <div className="logoText">Outreach Design</div>
          </div>

          <div className="navContentsFlex">
            <div className="navContents">
              <a className="navContent" href="/">
                <span className="underLine">Home</span>
              </a>

              {/* ----------------------------------------- */}
              {/* npm install --save react-router */}
              {/* ------------------------------------------------ */}
              <div className="dropDownParent">
                <button className="dropDown">
                  <span className="underLine">Activities </span>
                  <span>
                    <i
                      id="downArrow"
                      className="fa fa-angle-down"
                      aria-hidden="true"
                    ></i>
                  </span>{" "}
                </button>

                <ul>
                  <a href="/Contact">
                    <li>Contact</li>
                  </a>

                  <a href="/MeetUs">
                    <li>MeetUs</li>
                  </a>

                  <a href="/Blog">
                    <li>Blog</li>
                  </a>
                </ul>
              </div>
              {/* -------------------------------------- */}

              <a className="navContent" href="/">
                <span className="underLine">Portfolio</span>
              </a>

              <div className="dropDownParent">
                <button className="dropDown">
                  <span className="underLine">Resources</span>
                  <span>
                    {" "}
                    <i
                      id="downArrow"
                      className="fa fa-angle-down"
                      aria-hidden="true"
                    ></i>
                  </span>
                </button>

                <ul>
                  <li>
                    <a href="/Contact">Contact</a>
                  </li>
                  <li>
                    <a href="/MeetUs">MeetUs</a>
                  </li>

                  <li>
                    <a href="/Blog">Blog</a>
                  </li>
                </ul>
              </div>

              <a className="navContent" href="/">
                <span className="underLine">About</span>
              </a>
            </div>
            <div className="searchForm">
              <a href="" className="fa fa-search"></a>
              <input
                placeholder="search"
                type="text"
                name="search"
                id="search"
              />
            </div>

            <div className="signingButtens">
              <a href="" className="signin">
                {" "}
                Sign in{" "}
              </a>
              <a href="" className="getStarted">
                {" "}
                Get started{" "}
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
