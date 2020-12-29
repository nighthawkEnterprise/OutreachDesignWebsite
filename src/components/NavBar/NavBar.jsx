
import { Link } from "react-scroll";


import "./NavBar.css";

function NavBar(props) {
  const activities = ["Workshop","Freelangitlsce"]
  const Project = ["React", "React Native"]
  const resources = ["Blog", "Templet"]

      return (
      <div>
        <nav className="navbar">
          <div className="outreachLogo">
            <img src="/img/outreachDesignLogo.PNG" height="45px" />
            <div className="logoText">Outreach Design</div>
          </div>

          <div className="navContentsFlex">
            <div className="navContents">
              <Link
                className="navContent"
                activeClass="active"
                to="frontPage"
                spy={true}
                smooth={true}
                duration={200}
              >
                Home
              </Link>
              <Link 
               className="navContent"
               activeClass="active" to="activities">

              Activities  
              {/* <Dropdown  actItem={activities}/> */}
              </Link>

              <Link
                className="navContent"
                activeClass="active"
                to="#"
                spy={true}
                smooth={true}
                duration={200}
              >
                Resources
              </Link>

              <Link
                className="navContent"
                activeClass="active"
                to="blogPageTitle"
                spy={true}
                smooth={true}
                duration={200}
              >
                Blog
              </Link>
              <Link
                className="navContent"
                activeClass="active"
                to="AboutUs"
                spy={true}
                smooth={true}
                duration={200}
              >
                Project
              </Link>
              <Link
                className="navContent"
                activeClass="active"
                to="AboutUs"
                spy={true}
                smooth={true}
                duration={200}
              >
                About
              </Link>
              <Link
                className="navContent"
                activeClass="active"
                to="contactPage"
                spy={true}
                smooth={true}
                duration={200}
              >
                Contact
              </Link>
      

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

export default NavBar;
