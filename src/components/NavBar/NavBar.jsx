import React, { Component } from "react";

import "./NavBar.css";

function NavBar(props) {
  const activities = ["Workshop", "Freelangitlsce"];
  const Project = ["React", "React Native"];
  const resources = ["Blog", "Templet"];

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

            <div className="dropDownParent">
              <button className="dropDown">
                <span className="underLine">Activities</span>
                <span>
                  <i
                    id="downArrow"
                    className="fa fa-angle-down"
                    aria-hidden="true"
                  ></i>
                </span>{" "}
              </button>

              <ul>
                <a href="#">
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

            <a className="navContent" href="/Portfolio">
              <span className="underLine">Portfolio</span>
            </a>

            <div className="navContent">
              <a className="dropDown">
                <span className="underLine">Resources</span>
              </a>
            </div>

            <a className="navContent" href="/">
              <span className="underLine">About</span>
            </a>
          </div>
          <div className="searchForm">
            <a href="" className="fa fa-search"></a>
            <input placeholder="search" type="text" name="search" id="search" />
          </div>

          <div className="signingButtens">
            <a href="Signin" className="signin">
              {" "}
              Sign in{" "}
            </a>
            <a href="getstarted" className="getStarted">
              {" "}
              Get started{" "}
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
