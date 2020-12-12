import "./styling.css";
import Home from "./components/Home";

function App() {
  return (
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
            <a href="">Home</a>
            <a href="">Blog</a>
            <a href="">Contact</a>
            <a href="">About</a>
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
      <Home />
    </div>
  );
}

export default App;
