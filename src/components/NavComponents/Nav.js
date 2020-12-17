

import { Link } from 'react-scroll';
import Activities from "./Activities";
import Resources from "./Resources";



function Nav (){

return(
<div>
<div class="scrollUp">
        <a href="#" class="fa fa-chevron-circle-up"></a>
      </div>
      <nav className="navbar">
        <div className="outreachLogo">
          <img src="/images/outreach-design-logo.PNG" height="35px" />
          <div className="logoText">Outreach Design</div>
        </div>

        <div className="navContentsFlex">
          <div className="navContents">
          <Link activeClass="active" to="frontPage" spy={true} smooth={true} duration={200}>Home</Link>

          <Link activeClass="active" to="Blog" spy={true} smooth={true} duration={200}>Blog</Link>
          <Link activeClass="active" to="contactPage" spy={true} smooth={true} duration={200}>Contact</Link>
          <Link to="activities">Activities</Link>
          <Link to="resources">Resources</Link>
          <Link activeClass="active" to="about" spy={true} smooth={true} duration={200}>About</Link>
          </div>
          <div className="searchForm">
            <a href="" className="fa fa-search"></a>
            <input placeholder="search" type="text" name="search" id="search" />
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
      )
}
export default Nav;