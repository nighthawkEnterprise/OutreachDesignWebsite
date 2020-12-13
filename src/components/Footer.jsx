import React, { Component } from "react";

class footer extends Component {
  render() {
    return (
      <div>
        <div className="footer">
          <div className="footerLine"></div>

          <div className="footerContants">
            <div className="contacts">Contact Us</div>
            <div className="spaceLine"></div>
            <div className="contacts">FAQ</div>
            <div className="spaceLine"></div>
            <div className="contacts">Reviews</div>
            <div className="spaceLine"></div>
            <div className="contacts">Blog</div>
            <div className="spaceLine"></div>
            <div className="contacts">SWE Project Contests</div>
            <div className="spaceLine"></div>
            <div className="contacts">Legal Stuff</div>
          </div>

          <div className="llc">
            Copyright © 2020-2021 Outreach Design, LLC. All rights reserved.
          </div>
        </div>
      </div>
    );
  }
}

export default footer;
